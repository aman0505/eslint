import finq from "./test"
const fun=(x)=>{
    if(x>30){
        console.log(window.location.href)
        
        return true;

    }
    finq();
    return false;
}
const x=50;
console.log(fun(x))