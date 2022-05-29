const fs= require("fs");
const Bio={
  name:"Ishita",
  profession:"developer",
  Age:"19"
};
const data= JSON.stringify(Bio);
console.log(data);
fs.writeFile("biodata.json",data,(err)=>{
    console.log("done");
});
fs.readFile("biodata.json","utf-8",(err,data)=>{
//   const d=console.log(data);
  const org= JSON.parse(data);
  console.log(org);

})