$("#chartsRow").css('background','#47525D')
var selectedRow = "#chartsRow";

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$("#charts").click(function(e) {
    e.preventDefault();
    $(selectedRow).css('background','')
    $(selectedRow + "Body").hide();
    $("#chartsRowBody").show();
    $("#chartsRow").css('background','#47525D')
    selectedRow = "#chartsRow";
});
$("#heatmap").click(function(e) {
    e.preventDefault();
    $(selectedRow).css('background','')
    $(selectedRow + "Body").hide();
    $("#heatmapRowBody").show();
    $("#heatmapRow").css('background','#47525D')
    selectedRow = "#heatmapRow";
});
$("#settings").click(function(e) {
    e.preventDefault();
    $(selectedRow).css('background','')
    $(selectedRow + "Body").hide();
    $("#settingsRowBody").show();
    $("#settingsRow").css('background','#47525D')
    selectedRow = "#settingsRow";
});

if ($(window).width() < 768) {
    adjustForMobile();
}
$(window).resize(function() {
    if ($(window).width() < 768) {
        adjustForMobile();
    }
    if ($(window).width() >= 768) {
        adjustForDesktop();
    }
});
function adjustForMobile() {
    $("#wrapper").removeClass("toggled");
}
function adjustForDesktop() {
    $("#wrapper").addClass("toggled");
}