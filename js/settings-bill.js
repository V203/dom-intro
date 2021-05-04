var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");

var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");
var button_add = document.querySelector(".button-primary.add");

var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var updateSettingsbtn = document.querySelector(".button-primary.updateSettings");

let bs = billWithSettings();





updateSettingsbtn.addEventListener("click", function () {

    
  


     bs.setCall(parseFloat(callCostSetting.value));
     bs.setSms(parseFloat(smsCostSetting.value));
     bs.setWarn(parseFloat(warningLevelSetting.value))
     bs.setCrit(parseFloat(criticalLevelSetting.value))

     
     totalSettings.classList.remove("warning");
     totalSettings.classList.remove("danger");
 
     totalSettings.classList.add(bs.totalClassName())


    // alert("call"+bs.getCall()+" sms "+bs.getSms()+" warn"+ bs.getWarn()+" crit "+bs.getCrit())



})

button_add.addEventListener("click", function () {
    totalSettings.classList.remove("warning");
    totalSettings.classList.remove("danger");
    

    var x = document.querySelector(".billItemTypeWithSettings:checked");

    bs.calc_bs(x.value)

    callTotalSettings.innerHTML = bs.makeCall();
    smsTotalSettings.innerHTML = bs.sendSms();
    totalSettings.innerHTML = bs.getCallSmsTotal();
    





})