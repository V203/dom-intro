

let callTotalOne = document.querySelector(".callTotalOne");
let smsTotalOne = document.querySelector(".smsTotalOne");
let billTypeText = document.querySelector(".billTypeText");
let totalOne = document.querySelector(".totalOne");



let btn_ = document.querySelector(".button-primary.addToBillBtn")

let tb = textbill()

btn_.addEventListener("click",function(){
    

    tb.add(billTypeText.value)

    callTotalOne.innerHTML = tb.getCall()
    smsTotalOne.innerHTML  = tb.getSms();
    totalOne.innerHTML = tb.smsCallTotal()
    totalOne.classList.add(tb.totalClassName())

})





