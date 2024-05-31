const inptEle=document.getElementsByClassName("age")
const h2Ele=document.getElementsByTagName("h2")
const btnEle=document.getElementById("btn")

btnEle.onclick=function(){
    
    let value=Number(inptEle[0].value)
    
    if(value>=18){
        h2Ele[0].innerHTML="you are a major"
    }

    else{
        h2Ele[0].innerHTML="you are a minor"
    }
}

console.log(inptEle[0],h2Ele[0],btnEle)