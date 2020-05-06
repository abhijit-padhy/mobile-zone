import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default ({ bills }) => {
  const [options, setOptions] = useState({
    title: {
      text: ''
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45
      }
    },
    series: [{
      data: []
    }],
    responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal'
              },
              yAxis: {
                  labels: {
                      align: 'left',
                      x: 0,
                      y: -5
                  },
                  title: {
                      text: null
                  }
              },
              subtitle: {
                  text: null
              },
              credits: {
                  enabled: false
              }
          }
      }]
  }
  });

  useEffect(() => {
    let data = bills.map(bill => [bill.date, Number(bill.amount)]);
    let tmpOptions = { ...options };
    tmpOptions.series[0].data = [...data];
    console.log("options: ", data, bills)
    setOptions({ ...tmpOptions });
  }, [bills]);

  return (
    <div className="tseries-chart">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
      <style jsx="true">{`
        .tseries-chart {
          display: flex;
          justify-content: center;
          max-width: 100%;
        }
      `}</style>
    </div>
  )
}