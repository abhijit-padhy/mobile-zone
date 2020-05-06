import React, { useState, useEffect, useRef } from 'react';
import NewBillForm from './NewBillForm';
import BillDeskTimeSeriesChart from './BillDeskTimeSeriesChart';

const initialFormState = {
  show: false,
  data: undefined
}
/**
 * Bill Desk
 * Use case: please refer ./BillDesk.useCase.pdf
 * @host BrightMoney
 */
export default () => {
  const [displayBills, setDisplayBills] = useState([])
  const [bills, setBills] = useState([])
  const [formState, setFormState] = useState(initialFormState);
  const [billCategories, setBillCategories] = useState({
    selectedCategory: "All",
    categories: []
  });
  const budget = useRef(0);
  const [minBillsToPay, setMinBillsToPay] = useState([])

  useEffect(() => {
    fetchProducts();
    return () => {
      console.log('Unmounting Bill desk.')
    }
  }, []);

  useEffect((prevProps) => {
    console.log("changed");
    let _categories = getUniqueDataSet(bills, "category");
    let _selectedCategory = _categories.findIndex(c =>
      c === billCategories.selectedCategory) > -1
      ? billCategories.selectedCategory : "All"
    setBillCategories({
      ...billCategories,
      categories: [..._categories],
      selectedCategory: _selectedCategory
    });
    setDisplayBills(filterList(bills, _selectedCategory, "category"));
  }, [bills, billCategories.selectedCategory]);

  /**
   * Used to filter out bills by category
   * @param {*} list 
   * @param {*} key 
   */
  function filterList(list = [], _filterText, key) {
    let _list = [];
    if (list.length && _filterText && key) {
      let __filterText = _filterText.toLowerCase();
      if (__filterText === "all") {
        _list = list;
      } else {
        list.forEach(_item => {
          if (_item[key].toLowerCase() === __filterText) _list.push(_item);
        });
      }
    }
    return [..._list];
  }

  /**
   * Used to generate bill category list.
   * returns Array of unique strings.
   * @param {Array} list 
   * @param {String} key 
   */
  function getUniqueDataSet(list = [], key) {
    try {
      if (key) {
        let dataSet = {};
        list.forEach(item => {
          //without below if in wrong cases it assigns undefined=true
          if (item[key]) dataSet[item[key]] = true;
        });
        console.log(dataSet);
        return Object.keys(dataSet || {});
      }
    } catch (error) {
      console.log(error);
    }
    return [];
  }

  function fetchProducts() {
    let url = "/mobile-zone/data/bill-desk/bills.json";
    fetch(url, {})
      .then(res => res.json())
      .then(response => {
        console.log(response);
        if (response) {
          setBills(response.bills || []);
          budget.current = response.budget;
        }
      });
  }

  function enableNewBillForm(_showForm, data) {
    if (_showForm) {
      setFormState({
        show: true,
        data: JSON.parse(JSON.stringify(data ? data
          : { id: bills[bills.length - 1]["id"] + 1 }))
      })
    } else {
      setFormState({ ...initialFormState });
    }
  }

  function onSubmit(updatedBill) {
    let _bills = [...bills]
    let bIndex = _bills.findIndex(bill => bill.id === updatedBill.id);
    if (bIndex > -1) {
      Object.keys(updatedBill).forEach(key => _bills[bIndex][key] = updatedBill[key]);
    } else {
      _bills.push(updatedBill);
    }
    setBills([..._bills]);
    resetForm();
  }

  function resetForm() {
    enableNewBillForm(false);
  }

  function deleteItem(id) {
    let _bills = [...bills];
    let bIndex = _bills.findIndex(bill => bill.id === id);
    if (bIndex > -1) {
      _bills.splice(bIndex, 1);
    }
    setBills([..._bills]);
  }

  function reduceBillsLessThanBuget() {
    let _budget = 0;
    let _reduced = [];
    [...bills].sort((a, b) => b.amount - a.amount).forEach(bill => {
      let tmp = _budget;
      _budget += Number(bill.amount);
      if (_budget <= budget.current) {
        _reduced.push(bill);
      } else {
        _budget = tmp;
      }
    });
    console.log("budget", _reduced);
    setMinBillsToPay([..._reduced]);
  }

  return (
    <div className="bill-desk">
      <div>Bill Desk vBeta</div>
      <div className="bills-container">
        {
          billCategories.categories.length ?
            <select onChange={(e) => setBillCategories(
              { ...billCategories, selectedCategory: e.target.value }
            )}>
              <option selected={"All" === billCategories.selectedCategory} value={"All"}>All</option>
              {
                billCategories.categories.map(_category => (
                  <option selected={_category === billCategories.selectedCategory} value={_category}>{_category}</option>
                ))
              }
            </select>
            : <></>
        }
        {
          displayBills.length ?
            displayBills.map((bill, id) => (
              <div key={id} className="bill-container">
                <div className="bill">
                  <div className="bill-col">
                    <div>{bill.description} | </div>
                    <div>{bill.category} | </div>
                    <div><b>INR {bill.amount}</b> | </div>
                    <div>{bill.date}</div>
                  </div>
                  <div className="bill-col">
                    <button onClick={() => enableNewBillForm(true, bill)}>Edit</button>
                    <button onClick={() => deleteItem(bill.id)}>Delete</button>
                  </div>
                </div>
              </div>
            )) : <></>
        }
      </div>
      <button onClick={() => enableNewBillForm(!formState.show)}>Add Bill</button>
      <button onClick={reduceBillsLessThanBuget} style={{ marginLeft: ".5rem" }}>Reduce Bills</button>
      {
        formState.show ?
          <NewBillForm data={formState.data} onSubmit={onSubmit} resetForm={resetForm} /> : <></>
      }
      {
        minBillsToPay.length ?
          <div className="bills-container">
            <h3>Minimum Bills To Pay</h3>
            <p>* considering minimum budget per month is INR {budget.current}</p>
            {
              minBillsToPay.map((bill, id) => (
                <div key={id} className="bill-container">
                  <div className="bill">
                    <div className="bill-col">
                      <div>{bill.description} | </div>
                      <div>{bill.category} | </div>
                      <div><b>INR {bill.amount}</b> | </div>
                      <div>{bill.date}</div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div> : <></>
      }
      {
        displayBills.length ?
        <BillDeskTimeSeriesChart bills={displayBills} /> : <></>
      }
      <style jsx="true">{`
        .bill-desk {
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 2px 2px 6px 2px #eee;
          max-width: fit-content;
          margin: 0 auto;
          padding: 1rem;
        }

        .bill-desk .title {
          padding: 1rem;
        }

        .bill-desk .bills-container {
          padding-bottom: 1rem;
        }

        .bill-desk .bills-container select {
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          width: 210px;
        }

        .bill-desk .bills-container .bill {
          padding: .5rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          font-size: 14px;
        }

        .bill-desk .bills-container .bill:not(:last-child) {
          margin-bottom: .5rem;
        }

        .bill-desk .bills-container .bill .bill-col {
          display: flex;
        }

        .bill-desk .bills-container .bill .bill-col>div:not(:first-child),
        .bill-desk .bills-container .bill .bill-col>button {
          margin-left: .25rem;
        }

        .bill-desk button {
          padding: .35rem 1.5rem;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
        }

        .bill-desk button:focus,
        .bill-desk button:hover,
        .bill-desk input {
          outline: none;
        }

        .bill-desk .message-container {
          padding: 0 1rem;
        }

        .bill-desk .message-container .message {
          background: linear-gradient(45deg, #67dcfa, transparent);
          border-radius: 5px;
        }

        .bill-desk .highcharts-credits {
          display: none;
        }
      `}</style>
    </div>
  );
}