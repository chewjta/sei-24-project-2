
var span = document.getElementById('span');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  if(s<10){
    s = '0'+s
  }
  var m = d.getMinutes();
  if(m<10){
    m = '0'+m
  }
  var h = d.getHours();
  if(h<10){
    h = '0'+h
  }
  span.innerText = h + ":" + m + ":" + s;
}

setInterval(time, 1000);


var topiclabel = topicsLabels.split(',');
var topicdata = topicsDatas.split(',');
var questionerdata = questionerDatas.split(',');
var questionerlabel = questionerLabels.split(',');


var ctx = document.getElementById('topicsChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: topiclabel,
        datasets: [{
            label: '#Questions by Topics',
            data: topicdata,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize:1
                }
            }]
        },
        maintainAspectRatio: false
    }
});




var ctx2 = document.getElementById('questionsChart').getContext('2d');
var myChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['answered','unanswered'],
        datasets: [{
            label: '#Questions by Topics',
            data: [answeredNum,unansweredNum],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false
    }
});


var ctx3 = document.getElementById('studentsChart').getContext('2d');
var myChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: questionerlabel,
        datasets: [{
            label: 'Who has the most questions',
            data: questionerdata,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize:1
                }
            }]
        },
        maintainAspectRatio: false
    }
});