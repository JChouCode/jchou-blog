import $ from "jquery"

$(".card").each(function (i) {
  $(this).delay(100 * i).fadeIn(500);
});