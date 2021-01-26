import * as auth from "./util/auth.js";
import { open, save, newNote } from "./util/db.js";
import { showOpenFile } from "./util/popup.js";

var data;

export var init = () => {
  document.getElementById("accName").innerHTML = auth.user.displayName;
  document.getElementById("signout").onclick = auth.signOut;
  document.getElementById("open").onclick = () => {
    fetch("/getdata", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: auth.user.uid,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        data = d;
        showOpenFile(data).then((data) => {
          open(data);
        });
      });
  };
  document.getElementById("file_new").onclick = () => {
    var name = prompt("Name of file: ");
    newNote(name).then((d) => {
      open(d);
    });
  };
};
