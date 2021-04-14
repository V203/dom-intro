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

let call_ = 0;
let sms_ = 0;
let total_ = 0;

btn_.addEventListener("click", function () {

    calculate_(billTypeText.value)
    //total(call_,sms_)

});


calculate_ = (x) => {


     x = billTypeText.value.trim();
    if (x == "") {
        alert("Please enter 'call' or 'sms' in the billtype text field")
    }




    if (x === "call") {

        call_ += 2.75


    }

    else if (x === "sms") {

        sms_ += 0.75
    }
    else {
        alert("Please enter 'call' or 'sms' in the billtype text field")
        billTypeText.value ="";
    }
    callTotalOne.innerHTML = call_.toFixed(2);
    smsTotalOne.innerHTML = sms_.toFixed(2);
    totalOne.innerHTML = (total_ = call_ + sms_);

    if (total_ >= 50) {
        totalOne.classList.add("danger")
    } else if (total_ >= 30) {
        totalOne.classList.add("warning")
    }

}




















