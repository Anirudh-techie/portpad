import * as auth from "./util/auth.js";

export var init = () => {
  document.getElementById("register").onsubmit = (e) => {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    auth.signUp(email,pwd,name).then(() => {
      location.href = "/";
    });
  };
};
