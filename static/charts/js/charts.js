var weeklyUsers;
var currentUserType;
var monthlyUsers;
var weeklyUserRatio;
var yearlyBrowserUse;

function loadCharts() 
{
    var date = new Date();    

    var weeklyUsersCtx = document.getElementById("weeklyUsers");
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    todaysDay = date.getDay();
    var dataOfWeek = [];
    for (var index = 0; index <= todaysDay; index++) {
        dataOfWeek.push(Math.floor(Math.random() * 120));
    }
    weeklyUsers = new Chart(weeklyUsersCtx, {
        type: 'line',
        data: {
            labels: days,
            datasets: [{
                label: '# of users this week',
                data: dataOfWeek,
                borderColor: 'rgba(255,99,132,1)',
                fill: false,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var currentUserTypeCtx = document.getElementById("currentUserType").getContext("2d");
    currentUserType = new Chart(currentUserTypeCtx, {
        type: 'horizontalBar',
        data: {
            labels: [""],
            datasets: [{
                label: 'New %',
                backgroundColor: "#048DC7",
                data: [
                    42,
                ]
            }, {
                label: 'Returning %',
                backgroundColor: "#50B431",
                data: [
                    58,
                ]
            }]
        },
        options: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                    min: 0,
                    max: 100,
                    },  
                    scaleLabel: {
                    display: true,
                    labelString: "Percentage"
                    }
                }]
            }
        }
    });

    var monthlyUsersCtx = document.getElementById("monthlyUsers");
    var todaysMonth = date.getMonth() + 1;
    var todaysDay = date.getDate();
    var daysOfMonth = [];
    var dataOfMonth = [];
    for (var index = 1; index <= daysInThisMonth(); index++) {
        daysOfMonth.push(todaysMonth + "/" + index.toString());
        if (index <= todaysDay) {
            dataOfMonth.push(Math.floor(Math.random() * 80));
        }
    }
    monthlyUsers = new Chart(monthlyUsersCtx, {
        type: 'line',
        data: {
            labels: daysOfMonth,
            datasets: [{
                label: "# of users this day of today's month",
                data: dataOfMonth,
                borderColor: 'rgb(0, 0, 255)',
                fill: false,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var weeklyUserRatioCtx = document.getElementById("weeklyUserRatio");
    weeklyUserRatio = new Chart(weeklyUserRatioCtx, {
        type: 'doughnut',
        data: {
            labels: ["New Visitor %", "Returning Visitor %"],
            datasets: [{
                label: "Percentage",
                data: [37, 63],
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",                
                ]
            }]
        },
        options: {
            title:{
                display:true,
                text:"Weekly User Ratio"
            }
        }
    });

    var yearlyBrowserUseCtx = document.getElementById("yearlyBrowserUse");
    yearlyBrowserUse = new Chart(yearlyBrowserUseCtx, {
        type: 'doughnut',
        data: {
            labels: ["Chrome", "Safari", "Firefox", "Internet Explorer", "Opera", "Microsoft Edge"],
            datasets: [{
                label: "Yearly Browser Use",
                data: [46, 86, 30, 12, 4, 3],
                backgroundColor: [
                    "rgb(62, 239, 31)",
                    "rgb(226, 36, 201)",
                    "rgb(36, 226, 175)",
                    "rgb(255, 108, 22)",
                    "rgb(0, 216, 255)",
                    "rgb(238, 183, 255)"
                ]
            }]
        },
        options: {
            title:{
                display:true,
                text:"Yearly Browser Use"
            }
        }
    });
}

function destroyCharts() 
{
    weeklyUsers.destroy();
    currentUserType.destroy();
    monthlyUsers.destroy();
    weeklyUserRatio.destroy();
    yearlyBrowserUse.destroy();
}

function addData(chart, label, data) {
    chart.data.labels.push(label);  // add label at end
    chart.data.labels.splice(0, 1); // remove first label
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);    // add data at end
        dataset.data.splice(0, 1);  // remove first data point
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function daysInThisMonth() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
}

setInterval(function(){
    // updating monthly users chart
    var lastValue = monthlyUsers.data.datasets[0].data.pop();
    lastValue += 2;
    monthlyUsers.data.datasets[0].data.push(lastValue);
    monthlyUsers.update();

    // updating current users count
    var currentVisitorCount = Math.floor(Math.random() * 12) + 1;
    $("#currentVisitors").text(currentVisitorCount.toString());

    // updating the yearly visitors
    var yearlyVisitorCount = Number($("#yearlyVisitors").text()) + currentVisitorCount % 2;
    $("#yearlyVisitors").text(yearlyVisitorCount.toString());

    // updating the weekly users
    var lastValue2 = weeklyUsers.data.datasets[0].data.pop();
    lastValue2 += 1;
    weeklyUsers.data.datasets[0].data.push(lastValue2);
    weeklyUsers.update();

    // updating current user ratio
    var percentOfNew = Math.floor(Math.random() * 100);
    var percentOfReturn = 100 - percentOfNew;
    currentUserType.data.datasets[0].data[0] = percentOfNew;
    currentUserType.data.datasets[1].data[0] = percentOfReturn;
    currentUserType.update();

    // updating weekly user ratio
    var previousNewRatio = weeklyUserRatio.data.datasets[0].data[0]
    var previousReturnRatio = weeklyUserRatio.data.datasets[0].data[1]
    weeklyUserRatio.data.datasets[0].data[0] = Math.floor((previousNewRatio + percentOfNew) / 2);
    weeklyUserRatio.data.datasets[0].data[1] = Math.floor((previousReturnRatio + percentOfReturn) / 2);
    weeklyUserRatio.update();

    // updating yearly browser use
    yearlyBrowserUse.data.datasets[0].data[1] = yearlyBrowserUse.data.datasets[0].data[1] + Math.floor(Math.random() * 6);
    yearlyBrowserUse.data.datasets[0].data[0] = yearlyBrowserUse.data.datasets[0].data[1] + Math.floor(Math.random() * 3);
    yearlyBrowserUse.update();

}, 3000);
