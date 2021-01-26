var firebase= require('firebase-admin')

module.exports.new = (req,res)=>{
   var {name, uid} = req.body;
   firebase.firestore().collection('users').doc(uid).collection('notes').add({name,data:""}).then(
      (doc)=>{
         res.json({name,data:"",id:doc.id});
      }
   );
   
}

module.exports.get = (req,res)=>{
   var {  uid } = req.body;
   firebase.firestore().collection('users').doc(uid).collection('notes').get().then(
      (notes)=>{
         var arr = [];
         notes.docs.forEach(
            (note)=>{
               arr.push({...note.data(),id:note.id});
            }
         )
         res.json(arr);
      }
   )
}

module.exports.set = (req,res)=>{
   var { uid, id,name,data } = req.body;
   firebase.firestore().collection('users').doc(uid).collection('notes').doc(id).set({name,data});
   res.json({})
}