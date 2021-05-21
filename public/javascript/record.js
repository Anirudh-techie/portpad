navigator.mediaDevices.getUserMedia({
   audio: true
})
   .then(function (stream) {
      var audioContext = new AudioContext();
      var inputNode = audioContext.createMediaStreamSource(stream);

      var outputNode = audioContext.createMediaStreamDestination();
      inputNode.connect(outputNode);
      recorder = new MediaRecorder(outputNode.stream);
      recorder.addEventListener('dataavailable', function (evt) {
         saveAudio(evt.data);
      });
   });




function startRecording() {
   recorder.start();
}

function stopRecording() {
   recorder.stop();
}

function saveAudio(blob) {
   var audio = new Audio(URL.createObjectURL(blob));
   audio.play();
   window.b = blob;
}