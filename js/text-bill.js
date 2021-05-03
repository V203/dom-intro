// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


let callTotalOne = document.querySelector(".callTotalOne");
let smsTotalOne = document.querySelector(".smsTotalOne");
let billTypeText = document.querySelector(".billTypeText");
let totalOne = document.querySelector(".totalOne");



let btn_ = document.querySelector(".button-primary.addToBillBtn")



btn_.addEventListener("click",function(){
    let tb = textbill()
    // calculate_(billTypeText.value)
    //total(call_,sms_)
    tb._add(billTypeText.value)

    callTotalOne.innerHTML = tb.getCall()
    smsTotalOne.innerHTML  = tb.getSms();
    totalOne.innerHTML = tb.smsCallTotal()
    totalOne.classList.add(tb.totalClassName())

// btn_.addEventListener("click", function () {
//     let tbill = textbill();
    
//     alert(tbill.add(billTypeText.value))
// });


// add = (x) => {


//      x = billTypeText.value.trim();
//     if (x == "") {
//         alert("Please enter 'call' or 'sms' in the billtype text field")
//     }

//     if (x === "call") {
//         call_ += 2.75

//     }

//     else if (x === "sms") {

//         sms_ += 0.75
//     }
   
//     callTotalOne.innerHTML = call_.toFixed(2);
//     smsTotalOne.innerHTML = sms_.toFixed(2);
//     total_ = call_ + sms_
//     totalOne.innerHTML = total_.toFixed(2) ;

//     if (total_ >= 50) {
//         totalOne.classList.add("danger")
//     } else if (total_ >= 30) {
//         totalOne.classList.add("warning")
//     }

// }














})





