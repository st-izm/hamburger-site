$(function() {
    // サイドバー開くとき
    $(".js-menu").on("click", function() {
            $(".l-sideMenu").addClass("is-open");
            $(".js-fade-layer").css("visibility","visible");
    });

    // サイドバー閉じるとき
    $(".js-close").on("click", function() {
        $(".l-sideMenu").removeClass("is-open");
        $(".js-fade-layer").css("visibility","hidden");
    });
});

// 次はtoggleClassなども使うこと。宿題。