// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


var callTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo");
var totalTwo = document.querySelector(".totalTwo");
var radioBillAdd_ = document.querySelector(".radioBillAddBtn");
var billItemTypeRadio_ = document.querySelector(".billItemTypeRadio:checked");


// var call_ = 0;
// var sms_ = 0;
// var total_ = call_ + sms_;





radioBillAdd_.addEventListener("click", function () {
    // totalTwo.classList.remove("danger");
    // totalTwo.classList.remove("warning");
    totalTwo.classList.remove("warning");
    totalTwo.classList.remove("danger");
    

    
    
    
    
    let rb = radiobill();

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    rb.checked(checkedRadioBtn.value)
    

    callTotalTwo.innerHTML = rb.getCallTot();
    smsTotalTwo.innerHTML = rb.getSmsTot();
    totalTwo.innerHTML = rb.callSmsTot();
    
    totalTwo.classList.add(rb.totalClassName())


    // var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    // if (checkedRadioBtn) {
    //     var billItemType = checkedRadioBtn.value
    //     checkedRadioBtn.value == "call" ? call_ += 2.75 : sms_ += 0.75
    //     callTotalTwo.innerHTML = call_.toFixed(2);
    //     smsTotalTwo.innerHTML = sms_.toFixed(2);
    //     totalTwo.innerHTML = (total_ = call_ + sms_);

    // }
    // if (total_ >= 50) {
    //     totalTwo.classList.add("danger");

    // } else if (total_ >= 30) {
    //     totalTwo.classList.add("warning");
    // }



});