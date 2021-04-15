// get a reference to the _sms_ or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / _sms_ total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or '_sms_'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

{



    var callCostSetting = document.querySelector(".callCostSetting");
    var smsCostSetting = document.querySelector(".smsCostSetting");

    var callTotalSettings = document.querySelector(".callTotalSettings");
    var smsTotalSettings = document.querySelector(".smsTotalSettings");
    var totalSettings = document.querySelector(".totalSettings")
    var button_add = document.querySelector(".button-primary-add")

    var warningLevelSettings = document.querySelector(".warningLevelSettings")
    var criticalLevelSettings = document.querySelector(".criticalLevelSettings");
    var updateSettingsbtn = document.querySelector(".button-primary-updateSettings")






    button_add.addEventListener("click", function () {

        


        var x = document.querySelector(".billItemTypeWithSettings:checked");
        if (x) {
            let y = x.value
            y == "call" ? call++ : undefined;
            y == "sms" ? sms++ : undefined;

            smsTotalSettings.innerHTML = sms.toFixed(2);
        callTotalSettings.innerHTML = call.toFixed(2);

        totalSettings.innerHTML = (total = call + sms);

        }
        
        

        if (total >= 20) {
            totalSettings.classList.add("danger");

        } else if (total >= 10) {
            totalSettings.classList.add("warning");
        }
       


    })

   var call=0.0;
    var sms=0.0;
    var total = 0.0;

    updateSettingsbtn.addEventListener("click",function(){
      var callSet =  parseFloat(callCostSetting.value);
      var   smsSet = parseFloat(smsCostSetting.value);
        
        call = callSet ;
         sms = smsSet;
         total = call + sms;

        alert('call-->'+call+" sms--> "+sms+" total-->"+total)
    })
    


   



// var calc = (x)=>{
//     if (x) {
//             let y = x.value
//             y == "call" ? call += 2.75 : undefined;
//             y == "sms" ? sms += 0.75 : undefined;

//         }
//         smsTotalSettings.innerHTML = sms.toFixed(2);
//         callTotalSettings.innerHTML = call.toFixed(2);

//         totalSettings.innerHTML = (total = call + sms);
        

//         if (total >= 20) {
//             totalSettings.classList.add("danger");

//         } else if (total >= 10) {
//             totalSettings.classList.add("warning");
//         }
// }



}