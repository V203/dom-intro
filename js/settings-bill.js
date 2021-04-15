// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

{

    var billItemTypeWithSetting = document.querySelector(".billItemTypeWithSettings:checked");

    var callCostSetting = document.querySelector(".callCostSetting");
    var smsCostSettings = document.querySelector(".smsCostSettings");

    var callTotalSettings = document.querySelector(".callTotalSettings");
    var smsTotalSettings = document.querySelector(".callTotalSettings");
    var totalSettings = document.querySelector(".totalSettings")
    var button_add = document.querySelector(".button-primary-add")

    var warningLevelSettings = document.querySelector(".warningLevelSettings")
    var criticalLevelSettings = document.querySelector(".criticalLevelSettings");
    var updateSettings = document.querySelector(".updateSettings")




    var sms = 0;
    var call = 0;
    var total = 0;
    

    button_add.addEventListener("click", function () {


        var pressed = document.querySelector("input name=['billItemTypeWithSettings']:checked");
        
        if(pressed){
            pressed == "call" ? call += 2.75 : sms += 0.75;
            

            callTotalSetting.innerHTML = call;
            smsTotalSettings.innerHTML = sms;
            totalSettings.innerHTML = total;
            total = call + sms;
        }

    })

}