export var init = () => {
   var canvas = document.createElement("canvas");
   var div = document.getElementById("editor");
   canvas.id = "cnv";
   var main = document.getElementById("main");
   var mainStyles = getComputedStyle(main);
   canvas.width = mainStyles.width.substring(0, mainStyles.width.length - 2) - 38;
   canvas.height = mainStyles.height.substring(0, mainStyles.height.length - 2) - 90;
   var ctx = canvas.getContext("2d");
   var isDrawing = false;
   var x, y = 0;
   div.onmousedown = () => {
      isDrawing = true;
   }
   div.onmouseup = () => {
      isDrawing = false;
      y = 0;
      x= 0;
   }
   div.onmousemove = (ev) => {
      if (isDrawing) {
         var pos = getMousePos(canvas, ev);
         ctx.beginPath();
         ctx.moveTo((x==0?pos.x:x),(y==0?pos.y:y));
         ctx.lineTo(pos.x, pos.y);
         ctx.stroke();
         x = pos.x;
         y = pos.y;

      }
   }
   function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
         x: evt.clientX - rect.left,
         y: evt.clientY - rect.top
      };
   }

   div.append(canvas)
}


export default {
   init
}