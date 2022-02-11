function getRandomLower()
{
    return String.fromCharCode(Math.floor(Math.random()*26+97))
}

function getRandomUpper()
{
   return String.fromCharCode(Math.floor(Math.random()*26+65))
}

function getRandomNumber()
{
  return String.fromCharCode(Math.floor(Math.random()*10+48))

}

function getRandomSymbols()
{
   let symbol="!@#$%^&*<>/:;{}[]()"

   return symbol[Math.floor(Math.random()*(symbol.length))]

}

const RandomFunc={

    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbols:getRandomSymbols,
}

const resultEl=document.querySelector(".result")
const lengthEl=document.getElementById("length")
const upperEl=document.getElementById("uppercase")
const lowerEl=document.getElementById("lowercase")
const numberEl=document.getElementById("number")
const symbolEl=document.getElementById("symbols")
const btn=document.querySelector(".btn")


btn.addEventListener("click",function(){

    const rlength= +lengthEl.value
    
    const hasupper=upperEl.checked
    const haslower=lowerEl.checked
    const hasnumber=numberEl.checked
    const hassymbol=symbolEl.checked

   resultEl.value=generate(rlength,hasupper,haslower,hasnumber,hassymbol)
})

function generate(len,upper,lower,number,symbols)

{

    const count=upper+lower+number+symbols
    

    const arr=[{lower},{upper},{number},{symbols}].filter(x=>Object.values(x)[0])

    let password=""

    if(count==0)
    return " "
    
    else{
    for(let i=0;i<len;i+=count)
    {
        arr.forEach(items=>{
            password+=RandomFunc[Object.keys(items)[0]]()
        })
    }
    }
    
     return password.slice(0,len)

}