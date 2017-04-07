$(document).ready(function () {

    function updateOutput() {
        $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
        
        var jPanel = $("#jsPanel").val();
        document.getElementById("outputPanel").contentWindow.eval(jPanel);



    }


    var altFinestra = $(window).height();
    var larghFinestra = $(window).width();
    var altHeader = $("#header").height();

    $(".toggleButton").hover(function () {
        $(this).addClass("highLightedButton");
    }, function () {
        $(this).removeClass("highLightedButton");
    });

    $(".toggleButton").click(function () {
        $(this).toggleClass("active");
        $(this).removeClass("highLightedButton");

        var panelId = $(this).attr("id") + "Panel";
        $("#" + panelId).toggleClass("hidden");

        var activePanels = 4 - $(".hidden").length;
        $(".panel").width((larghFinestra / activePanels) - 20);
    });

    $(".panel").height(altFinestra - altHeader - 15);
    $(".panel").width((larghFinestra / 2) - 20);

    updateOutput();

    $("textarea").on("change keyup paste", function () {
        updateOutput();
    });

    //$(this).removeClass("active");
    //        
    //       
    //        






    //    $(".panel").height(altFinestra - altNavbar);
    //
    //    $(".panel").width((larghFinestra / 2) - 10);
    //

    //

})
