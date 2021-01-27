export var init = () => {
  document.getElementById('ham').onclick = ()=>{
    var options = document.getElementById("options");
    options.style.height = options.style.height == "0px"?"150px":"0px";
    options.style.width = options.style.width == "0px"?"500px":"0px";
    options.style.padding = options.style.padding == "0px" ? "16px" : "0px";;
  }
    document.addEventListener("click", function (e) {
      options.style.height = options.style.height == "0px";
    options.style.width = options.style.width == "0px";
    options.style.padding = options.style.padding == "0px";
    });
};

export default {
  init: init,
};
