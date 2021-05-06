// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var billTypeText = document.querySelector(".billTypeText");
var totalOne = document.querySelector(".totalOne");

let tb = textbill()


var btn_ = document.querySelector(".button-primary.addToBillBtn")



btn_.addEventListener("click", function () {
    // calculate_(billTypeText.value)
    //total(call_,sms_)
    tb.add(billTypeText.value)

    callTotalOne.innerHTML = tb.getCall()
    smsTotalOne.innerHTML = tb.getSms();
    totalOne.innerHTML = tb.smsCallTotal()
    totalOne.classList.add(tb.totalClassName())


});




// calculate_ = (x) =>{


//     var x =billTypeText.value.trim();

//     if(x === "call" ){

//         call_+=2.75


//     }

//     else if(x ==="sms"){

//     sms_+=0.75
//                  }
//     callTotalOne.innerHTML = call_.toFixed(2);
//     smsTotalOne.innerHTML  = sms_.toFixed(2);
//     totalOne.innerHTML = (total_ = call_ + sms_);

//     if(total_ >= 50){
//         totalOne.classList.add("danger")
//     }else if(total_ >= 30){
//         totalOne.classList.add("warning")
//     }

//             }




















