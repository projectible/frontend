var weeklyUsers;
var currentUserType;
var monthlyUsers;
var weeklyUserRatio;
var yearlyBrowserUse;

function loadCharts() 
{
    var weeklyUsersCtx = document.getElementById("weeklyUsers");
    weeklyUsers = new Chart(weeklyUsersCtx, {
        type: 'line',
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                label: '# of users this week',
                data: [121, 109, 34, 52, 29, 30, 43],
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
    monthlyUsers = new Chart(monthlyUsersCtx, {
        type: 'line',
        data: {
            labels: ["08/01", "08/08", "08/15", "08/22", "08/29"],
            datasets: [{
                label: '# of users this month',
                data: [121, 109, 234, 452, 329, 30, 143, 12, 62, 75, 39, 10, 102, 539],
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
                data: [36.8, 63.2],
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