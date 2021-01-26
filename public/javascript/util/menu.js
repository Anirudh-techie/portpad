export var init = () => {
  ["file", "help", "acc"].forEach((menuId) => {
    var contentid = menuId + "content";
    document.getElementById(menuId).onclick = function (e) {
      var hidden = document.getElementById(contentid).hidden;
      document.getElementById(contentid).hidden = !hidden;
      document.documentElement.style.setProperty(
        "--x",
        e.target.getBoundingClientRect().x + "px"
      );
    };
    document.getElementById(menuId).onmouseover = function (e) {
      var arr = ["file", "help", "acc"].filter((id) => {
        var hidden = document.getElementById(id + "content").hidden;
        document.getElementById(id + "content").hidden = true;
        return !hidden;
      });

      if (arr.length > 0) {
        document.documentElement.style.setProperty(
          "--x",
          e.target.getBoundingClientRect().x + "px"
        );
        document.getElementById(contentid).hidden = false;
      }
    };
    document.addEventListener("click", function (e) {
      if (
        e.target.id != menuId &&
        e.target.id != contentid &&
        document.getElementById(contentid).hidden == false
      ) {
        document.getElementById(contentid).hidden = true;
      }
    });
  });
};

export default {
  init: init,
};
