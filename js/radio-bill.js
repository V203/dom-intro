// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


let callTotalTwo = document.querySelector(".callTotalTwo");
let smsTotalTwo = document.querySelector(".smsTotalTwo");
let totalTwo = document.querySelector(".totalTwo");
let radioBillAdd_ = document.querySelector(".radioBillAddBtn");
let billItemTypeRadio_ = document.querySelector(".billItemTypeRadio:checked");


let call__ = 0;
let sms__ = 0;

let total__ = call__ + sms__;

let checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
totalTwo.classList.remove("warning");
totalTwo.classList.remove("danger");

radioBillAdd_.addEventListener("click", function () {
    

    let checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        let billItemType = checkedRadioBtn.value
        billItemType == "call" ? call__ += 2.75 : sms__ += 0.75
        callTotalTwo.innerHTML = call__.toFixed(2);
        smsTotalTwo.innerHTML = sms__.toFixed(2);
        totalTwo.innerHTML = (total__ = call__ + sms__);

    }
    if (total__ >= 50) {
        totalTwo.classList.add("danger");

    } else if (total__ >= 30) {
        totalTwo.classList.add("warning");
    }

  

});