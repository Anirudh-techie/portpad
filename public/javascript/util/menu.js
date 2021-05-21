export var init = () => {

  document.getElementById('ham').onclick = function(){
    this.classList.toggle('is-active');
    var options = document.getElementById("options");
    options.style.width = (options.style.width == "0px"?"calc(100% - 64px)":"0px");
    options.style.padding = options.style.padding == "32px 0px"?"32px" : "32px 0px";
  }
    document.addEventListener("click", function (e) {
      
    });
};

export default {
  init: init,
};
