import { newNote } from "./db.js";


export var showOpenFile = (data) => {
  return new Promise((resolve, reject) => {
    document.getElementById("openfile").style.height = "525px";
    document.getElementById("openfile").style.width = "500px";
    document.getElementById("openfile").style.padding = "16px";
    let j = 0;
    let slides = []
    for (let i = 0; i < data.length; i++) {
      if (j == i) {
        if (data[i + 4]) {
          slides.push(data.slice(i, i + 4))
        } else {
          slides.push(data.slice(i, data.length));
        }
        j += 4;
      }
    }

    document.getElementById("files").innerHTML = `
      ${slides
        .map(
          (d, i) => `
        <div class="slide" id="slide_${i}">
      ${d
              .map(
                (f, dataI) => {
                  return `<div class="file" index="${(i * 4) + dataI}"><h3>${f.name}</h3><div>${f.data.length <= 100 ? f.data : f.data.substring(0, 99) + "..."
                    }</div></div>`
                }
              )
              .join("")}
        </div>
      `
        )
        .join("")}
      </div>
      `;
    document.getElementById('file_btns').innerHTML = `
            ${slides
        .map(
          (d, i) => `
            <button onclick="document.getElementById('slide_${i}').scrollIntoView({behavior:'smooth'})"></button>
        `
        )
        .join("")}`
    var files = document.querySelectorAll(".file");

    for (let file of files) {
      file.onclick = (e) => {
        var index = e.target.getAttribute("index");
        if (index) {
          resolve(data[index]);
          document.getElementById("files").innerHTML = "";
          document.getElementById("openfile").style.height = "0px";
          document.getElementById("openfile").style.width = "0px";
          document.getElementById("openfile").style.padding = "0";
        }
      };
    }
    document.getElementById('open_new').onclick = () => {
      var name = prompt('Name of file: ');
      if (!name) {
        return;
      }
      newNote(name).then(
        (d) => {
          resolve(d);
          document.getElementById("files").innerHTML = "";
          document.getElementById("openfile").style.height = "0px";
          document.getElementById("openfile").style.width = "0px";
          document.getElementById("openfile").style.padding = "0";
        }
      )

    }
  });
};
