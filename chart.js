const canvas1= document.getElementById('chart1');
var ctx1 = canvas1.getContext('2d');
const label1 = ['Red','Blue','Yellow'];
const data1 = {
    labels: label1,
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};
const config1= {
    type: 'pie',
    data: data1,
    options: {
        maintainAspectRatio: false
    },
};
const chart1 = new Chart(ctx1,config1);

const canvas2= document.getElementById('chart2');
var ctx2 = canvas2.getContext('2d');
const label2 = ['Red','Blue','Yellow'];
const data2 = {
    labels: label2,
    datasets: [{
        label: 'My First Dataset',
        data: [200, 40, 500],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};
const config2= {
    type: 'doughnut',
    data: data2,
    options: {
        maintainAspectRatio: false
    },
};
const chart2 = new Chart(ctx2,config2);

const canvas3= document.getElementById('chart3');
var ctx3 = canvas3.getContext('2d');
const label3 = ['Eating','Drinking','Sleeping','Designing','Coding','Cycling','Running'];
const data3 = {
    labels: label3,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
    },{
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};
const config3= {
    type: 'radar',
    data: data3,
    options: {
        maintainAspectRatio: false,
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
};
const chart3 = new Chart(ctx3,config3);

const canvas4= document.getElementById('chart4');
var ctx4 = canvas4.getContext('2d');
const label4 = ['Red','Green','Yellow','Grey','Blue'];
const data4 = {
    labels: label4,
    datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        fill: true,
        backgroundColor:['rgb(255, 99, 132)','rgb(75, 192, 192)','rgb(255, 205, 86)','rgb(201, 203, 207)','rgb(54, 162, 235)'],
    },{
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};
const config4= {
    type: 'polarArea',
    data: data4,
    options: {
        maintainAspectRatio: false,
    },
};
const chart4 = new Chart(ctx4,config4);