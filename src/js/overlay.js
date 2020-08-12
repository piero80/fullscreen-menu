$(document).ready(function() {
  $(".menu-btn").click(function() {
    $(".overlay").fadeToggle(200);
  });
  $(".remove-icon-mobile").click(function() {
    $(this)
      .siblings()
      .find(".move")
      .removeClass("move");
    $(".overlay").fadeToggle(200);
  });

  $(".menu_mobile .item-level-1 a").on("click", function() {
    const servizi = $("#servizi");
    const soluzioni = $("#soluzioni");
    var value = $(this)
      .text()
      .toLowerCase();
    if (value === "servizi") {
      servizi.show();
      soluzioni.hide();
    }
    if (value === "soluzioni") {
      soluzioni.show();
      servizi.hide();
    }
    $(this)
      .parent()
      .parent()
      .toggleClass("move");
  });

  $(".menu_mobile .item-level-1 .sub .return-level-1 a").on(
    "click",
    function() {
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .removeClass("move");
    }
  );
});
