$(function () {
  $(".icon").hover(
    function () {
      $(this).children("p").toggleClass("d-none");
    },
    function () {
      $(this).children("p").toggleClass("d-none");
    }
  );
});
