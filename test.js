// import a from "./customeRule/"
// test file comments 
const fun1=()=>{
    return true;
}
console.log("hyyy")

let getbooks=new Promise((resolve)=>{
    resolve("this is resolve message ");
})

getbooks().then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
})


export default fun1 