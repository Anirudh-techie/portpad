var firebase = require('firebase-admin');

module.exports.adduser = (req, res) => {
  firebase
    .firestore()
    .collection("users")
    .doc(req.body.userid)
    .set({ name: req.body.name })
    .then(() => {
      firebase
        .firestore()
        .collection("users")
        .doc(req.body.userid)
        .collection("notes")
        .add({ name:"Untitled", data: "" });
      res.json({});
    });
};
