import menu from "./util/menu.js";
import db from "./util/db.js";
import * as home from './home.js'
import * as login from './login.js'
import * as register from "./register.js";
import * as auth from "./util/auth.js";
import * as drawing from "./drawing.js"
window.init = async (page)=>{
    var firebaseConfig = {
    apiKey: "AIzaSyBIfjqTWTfe1X6fJ5gEmx411RAxCcc6gcM",
    authDomain: "portpad-e19ad.firebaseapp.com",
    projectId: "portpad-e19ad",
    storageBucket: "portpad-e19ad.appspot.com",
    messagingSenderId: "394423088787",
    appId: "1:394423088787:web:4d24db507eee75faaa7f66"
  };
  firebase.initializeApp(firebaseConfig);
  await auth.init();
  if (page == "home") {
    if (!auth.signed_in) {
      location.href = "/login";
    }
    menu.init();
    home.init();
    db.init();
  }
  if (page == "drawing") {
    if (!auth.signed_in) {
      location.href = "/login";
    }
    menu.init();
    drawing.init();
    db.init();
  }
  if (page == "login") {
    if (auth.signed_in) {
      location.href = "/";
    }
    login.init();
  }
  if (page == "register") {
    if (auth.signed_in) {
      location.href = "/";
    }
    register.init();
  }
}