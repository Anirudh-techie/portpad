export var init = () => {

  document.getElementById('ham').onclick = function(){
    this.classList.toggle('is-active');
    var options = document.getElementById("options");
    options.classList.toggle("is-active")
  }
    
};

export default {
  init: init,
};
