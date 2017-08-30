$("#chartsRow").css('background','#47525D')
var selectedRow = "#chartsRow";
loadCharts();

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$("#charts").click(function(e) {
    e.preventDefault();
    checkForCharts();
    $(selectedRow).css('background','')
    $(selectedRow + "Body").hide();
    $("#chartsRowBody").show();
    $("#chartsRow").css('background','#47525D')
    selectedRow = "#chartsRow";
    // loadCharts();
});
$("#heatmap").click(function(e) {
    e.preventDefault();
    checkForCharts();
    $(selectedRow).css('background','')
    $(selectedRow + "Body").hide();
    $("#heatmapRowBody").show();
    $("#heatmapRow").css('background','#47525D')
    selectedRow = "#heatmapRow";
});
$("#settings").click(function(e) {
    e.preventDefault();
    checkForCharts();
    $(selectedRow).css('background','')
    $(selectedRow + "Body").hide();
    $("#settingsRowBody").show();
    $("#settingsRow").css('background','#47525D')
    selectedRow = "#settingsRow";
});

if ($(window).width() < 768) {
    adjustForMobile();
}
else {
    adjustForDesktop();
}
function adjustForMobile() {
    $("#wrapper").removeClass("toggled");
}
function adjustForDesktop() {
    $("#wrapper").addClass("toggled");
}
function checkForCharts() {
    if (selectedRow == "#chartsRow") {
        // destroyCharts();
    }
}