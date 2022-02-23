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
        },
        scales: {
            r: {
                angleLines: {
                    color: 'black',
                },
                grid: {
                    color: 'pink',
                },
                pointLabels: {
                    color:'red',
                    font: {
                        size: 16
                    }
                },
                ticks :{
                    color: 'green',
                },
                min: 0,
                max: 100
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

const canvas5= document.getElementById('chart5');
var ctx5 = canvas5.getContext('2d');
const data5 = {
    datasets: [{
        label: 'Scatter Dataset',
        data: [{
            x: -10,
            y: 0
        }, {
            x: 0,
            y: 10
        }, {
            x: 10,
            y: 5
        }, {
            x: 0.5,
            y: 5.5
        }],
        backgroundColor:'rgb(255, 99, 132)',
    }]
};
const config5= {
    type: 'scatter',
    data: data5,
    options: {
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
            }
        }
    },
};
const chart5 = new Chart(ctx5,config5);

const canvas6= document.getElementById('chart6');
var ctx6 = canvas6.getContext('2d');
const data6 = {
    datasets: [{
        label: 'First Dataset',
        data: [{
            x: 20,
            y: 30,
            r: 15
        }, {
            x: 40,
            y: 10,
            r: 10
        },{
            x: 30,
            y: 15,
            r: 6
        }],
        backgroundColor:'rgb(255, 99, 132)',
    }]
};
const config6= {
    type: 'bubble',
    data: data6,
    options: {
        maintainAspectRatio: false,
    },
};
const chart6 = new Chart(ctx6,config6);

const canvas7= document.getElementById('chart7');
var ctx7 = canvas7.getContext('2d');
const data7 = {
    labels: [
        'January',
        'February',
        'March',
        'April'
    ],
    datasets: [{
        type: 'bar',
        label: 'Bar Dataset',
        data: [10, 20, 30, 40],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)'
    }, {
        type: 'line',
        label: 'Line Dataset',
        data: [23, 12, 31, 50],
        fill: false,
        borderColor: 'rgb(54, 162, 235)'
    }]
};

const config7= {
    type: 'scatter',
    data: data7,
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};
const chart7 = new Chart(ctx7,config7);

const canvas8= document.getElementById('chart8');
var ctx8 = canvas8.getContext('2d');
const data8 = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
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

const image = new Image();
image.src = 'https://www.chartjs.org/img/chartjs-logo.svg';

const plugin = {
    id: 'custom_canvas_background_image',
    beforeDraw: (chart) => {
        if (image.complete) {
            const ctx = chart.ctx;
            const {top, left, width, height} = chart.chartArea;
            const x = left + width / 2 - image.width / 2;
            const y = top + height / 2 - image.height / 2;
            ctx.drawImage(image, x, y);
        } else {
            image.onload = () => chart.draw();
        }
    }
};
const config8 = {
    type: 'doughnut',
    data: data8,
    plugins: [plugin],
};
const chart8 = new Chart(ctx8,config8);