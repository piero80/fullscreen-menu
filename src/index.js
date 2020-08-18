import "./css/style.css";
import $ from "jquery";
import { getConfig } from "./js/api";

getConfig().then((json) => populateMenu(json.menu));

function populateMenu(menu) {
  const lista = document.getElementById("lista");
  for (let index = 0; index < menu.length; index++) {
    if (menu[index].sub) {
      const li_sub = document.createElement("li");
      const ul_sub = document.createElement("ul");
      const a_sub_title = document.createElement("a");
      const linkText_sub_title = document.createTextNode(menu[index].label);
      a_sub_title.appendChild(linkText_sub_title);
      a_sub_title.href = "#";
      $(li_sub).addClass("item-level-1");
      $(ul_sub).addClass("sub");
      ul_sub.id = menu[index].label.toLowerCase();

      //Title and Fontawesome Icon Append
      const span = document.createElement("span");
      const h3 = document.createElement("h3");
      const i = document.createElement("i");
      const titleSection = document.createTextNode(menu[index].label);

      h3.appendChild(titleSection);
      span.appendChild(i);

      $(span).addClass("return-level-1");
      $(i).addClass("fa fa-angle-left");

      ul_sub.appendChild(span);
      ul_sub.appendChild(h3);

      for (const obj of menu[index].sub) {
        const label_sub = obj.label;
        const label_sub_title = obj.sub_title;
        const url_sub = obj.url;
        const li_sub_sub = document.createElement("li");
        const a_sub = document.createElement("a");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        const linkText_sub_h4 = document.createTextNode(label_sub);
        const linkText_sub_p = document.createTextNode(label_sub_title);
        h4.appendChild(linkText_sub_h4);
        p.appendChild(linkText_sub_p);
        a_sub.appendChild(h4);
        a_sub.appendChild(p);

        a_sub.href = url_sub;
        li_sub_sub.appendChild(a_sub);

        ul_sub.appendChild(li_sub_sub);

        li_sub.appendChild(a_sub_title);
        li_sub.appendChild(ul_sub);
      }
      lista.appendChild(li_sub);
    } else {
      const label = menu[index].label;
      const url = menu[index].url;
      const li = document.createElement("li");
      const a = document.createElement("a");
      const linkText = document.createTextNode(label);
      a.appendChild(linkText);
      a.href = url;
      li.appendChild(a);
      lista.appendChild(li);
    }
  }
}
const btn_menu = document.querySelector(".menu-btn");
const remove_icon_mobile = document.querySelector(".remove-icon-mobile");

btn_menu.addEventListener("click", () => {
  $(".overlay").fadeToggle(200);
});

remove_icon_mobile.addEventListener("click", () => {
  $(this).siblings().find(".move").removeClass("move");
  $(".overlay").fadeToggle(200);
});

$("#lista").on("click", ".item-level-1 a", function () {
  const servizi = $("#servizi");
  const soluzioni = $("#soluzioni");
  var value = $(this).text().toLowerCase();
  if (value === "servizi") {
    servizi.show();
    soluzioni.hide();
  }
  if (value === "soluzioni") {
    soluzioni.show();
    servizi.hide();
  }
  $(this).parent().parent().toggleClass("move");
});

$("#lista").on("click", ".sub .return-level-1 i", function () {
  $(this).parent().parent().parent().parent().removeClass("move");
});
