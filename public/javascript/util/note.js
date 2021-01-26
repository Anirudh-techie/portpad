import {files} from './db.js'

export class Note{
   constructor(name, data, index){
      this.data  =data;
      this.name = name;
      this.index = index;
   }
   name="";
   data="";
   save(){
      files[this.index].data = this.data;
      localStorage.setItem("files",JSON.stringify(files))
   }
}