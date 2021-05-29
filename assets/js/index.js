$(function () {
  $(".icon").hover(
    function () {
      $(this).children("p").toggleClass("d-none");
      $(this).children("a").addClass("d-none");
    },
    function () {
      $(this).children("p").toggleClass("d-none");
      $(this).children("a").removeClass("d-none");
    }
  );
});
