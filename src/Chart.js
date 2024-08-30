import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = ({ cardData, timing  }) => {

  const frequency = [
    "day ",   // 0
    "week ",  // 1
    "month ", // 2
    "year "// 3
  ];

    
  // timing = [1, 200]
  
  const data = {
    labels: [],
    datasets: [

    ],
  };



  for(let i = 0; i <= timing[1]; i++){
    data.labels.push(frequency[timing[0]]+ i)
  }

  let minFreq = 365;
  for (let i = 0; i < cardData.length; i++) {
    let daysFreq;
    switch(cardData[i].frequency){
        case 'daily':
            daysFreq = 365;
            break;
        case 'weekly':
            daysFreq = 52;
            break;
        case 'biweekly':
            daysFreq = 26;
            break;
        case 'monthly':
            daysFreq = 12;
            break;
        case 'quarterly':
            daysFreq = 4;
            break;
        case 'triannually':
            daysFreq = 3;
            break;
        case 'semiannually':
            daysFreq = 2;
            break;
        case 'annually':
            daysFreq = 1;
            break          
     }

     minFreq = Math.min(minFreq, daysFreq)

  }


  for (let i = 0; i < cardData.length; i++) {
    let initial = cardData[i].initial
    let interest = cardData[i].interest

    let daysFreq;
     switch(cardData[i].frequency){
        case 'daily':
            daysFreq = 365;
            break;
        case 'weekly':
            daysFreq = 52;
            break;
        case 'biweekly':
            daysFreq = 26;
            break;
        case 'monthly':
            daysFreq = 12;
            break;
        case 'quarterly':
            daysFreq = 4;
            break;
        case 'triannually':
            daysFreq = 3;
            break;
        case 'semiannually':
            daysFreq = 2;
            break;
        case 'annually':
            daysFreq = 1;
            break          
     }
    data.datasets.push({
      label: 'Interest ' + i,
      data: [],
      fill: false
    });

    for(let j = 0; j <= timing[1] / minFreq; j++){
        data.datasets[i].data.push(initial * Math.pow( (1 + (interest / 100) /daysFreq ), daysFreq * (j/365) ) )
      }
  }

  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };



  return (
    <div>
      <h2> </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;  