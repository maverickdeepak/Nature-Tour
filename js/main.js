(function ($) {
  $(function () {
    $("#nav-toggle").on("click", function () {
      $("body").toggleClass("open");
    });
  });
})(jQuery);

$(".bookButton").click(function () {
  $(".popup").css("display", "block");
});

$(".popup__close").click(function () {
  $(".popup").css("display", "none");
});
