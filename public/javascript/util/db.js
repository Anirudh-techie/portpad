import * as auth from "./auth.js";
import { showOpenFile } from "./popup.js";
var c_file = {};

export var init = () => {
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
        document.getElementById("editor").oninput = () => {
          save(c_file.id);
        };
        document.getElementById("name").oninput = () => {
          save(c_file.id);
        };
      });
    });
};

export var save = (id) => {
  var name = document.getElementById("name").value;
  var data = document.getElementById("editor").value;
  fetch("/saveNote", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uid: auth.user.uid,
      name: name,
      data: data,
      id: id,
    }),
  });
};

export var open = (data) => {
  document.getElementById("editor").value = data.data;
  document.getElementById("name").value = data.name;
  c_file = data;
};

export var data;

export var newNote = async (name) => {
  var data = await (
    await fetch("/newNote", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: auth.user.uid,
        name: name,
      }),
    })
  ).json();
  return data;
};
export default {
  data: data,
  init: init,
  open: open,
  new: newNote,
};
