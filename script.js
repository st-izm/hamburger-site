$(function() {
    // サイドバー開くとき
    $("#menu").on("click", function() {
            $(".l-sideMenu").addClass("is-open");
            $("#l-main__fadeLayer").css("visibility","visible");
    });

    // サイドバー閉じるとき
    $("#close").on("click", function() {
        $(".l-sideMenu").removeClass("is-open");
        $("#l-main__fadeLayer").css("visibility","hidden");
    });
    
    //js効いてるか試すコード 後で消すこと
    $(".p-headWrapper").on("click", function() {
        $(this).find("a").text("×");
    });
});

// 次はtoggleClassなども使うこと。宿題。