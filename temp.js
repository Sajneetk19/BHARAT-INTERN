let CelciusInput=document.querySelector('#Celcius >input')
let FahrenheitInput=document.querySelector('#Fahrenheit >  input')
let KelvinInput=document.querySelector('#Kelvin > input')

let Button= document.querySelector('.btn button')

function roundNumber(number){
    return Math.round(number*100)/100
}
CelciusInput.addEventListener('input', function(){
    let cTemp=parseFloat(CelciusInput.value)
    let fTemp=(cTemp*(9/5)) + 32
    let kTemp= cTemp + 273.15
    FahrenheitInput.value=roundNumber(fTemp)
    KelvinInput.value=roundNumber(kTemp)
})


/* Fahrenheit to Celcius and Kelvin */
FahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(FahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp -32) * (5/9) + 273.15

    CelciusInput.value = roundNumber(cTemp)
    KelvinInput.value = roundNumber(kTemp)
})

/* Kelvin to Celcius and Fahrenheit */
KelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(KelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    CelciusInput.value = roundNumber(cTemp)
    FahrenheitInput.value = roundNumber(fTemp)
})

Button.addEventListener('click', ()=>{
    CelciusInput.value=""
    FahrenheitInput.value=""
    KelvinInput.value=""
})