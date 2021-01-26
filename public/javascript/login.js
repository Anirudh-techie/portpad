import * as auth from "./util/auth.js"

export var init = ()=>{
   document.getElementById('login').onsubmit = (e)=>{
      e.preventDefault();
      var email = document.getElementById('email').value;
      var pwd = document.getElementById("password").value;
      auth.signIn(email,pwd).then(() => {
         location.href = "/";
      });
   }
}