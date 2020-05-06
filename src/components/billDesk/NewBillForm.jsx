import React, { useState } from 'react'

export default ({data, onSubmit, resetForm}) => {
  // const [state, setstate] = useState(initialState)
  function submit(ev) {
    ev.preventDefault();
    let formData = new FormData(ev.target);
    console.log("form data: ", formData.get("amount"));
    let date = new Date();
    onSubmit({
      "id": data.id,
      "description": formData.get("description"),
      "category": data.category || formData.get("category"),
      "amount": formData.get("amount"),
      "date": (date.getMonth()+1) + "-" + date.getDate() + "-" + date.getFullYear()
    });
  }

  return (
    <div className="new-bill-form">
      <form onSubmit={submit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="description">Description:&nbsp;&nbsp;</label>
          <input type="text" name="description" defaultValue={data.description} />
        </div>
        {
          !data.category ?
          <div className="form-group">
            <label htmlFor="category">Category:&nbsp;&nbsp;</label>
            <input type="text" name="category" defaultValue={data.category} />
          </div> : <></>
        }
        <div className="form-group">
          <label htmlFor="amount">Amount:&nbsp;&nbsp;</label>
          <input type="number" name="amount" defaultValue={data.amount} />
        </div>
        <div className="form-group">
          <button>Submit</button>
          <button style={{marginLeft: ".5rem"}}
            onClick={resetForm}>Reset</button>
        </div>
      </form>
      <style jsx>{`
        form {
          padding: 1rem;
          text-align: left;
        }

        form .form-group {
          padding-bottom: .5rem;
        }

        form .form-group input {
          border-radius: 5px;
          padding: .25rem
          background: white;
        }
      `}</style>
    </div>
  )
}