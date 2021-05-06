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


button_add.addEventListener("click", function () {
    
    // alert(x.value)
    totalSettings.classList.remove("warning");
    totalSettings.classList.remove("danger");

    var x = document.querySelector(".billItemTypeWithSettings:checked");

    bs.calc(x.value)

    callTotalSettings.innerHTML = bs.getCallTotal();
    smsTotalSettings.innerHTML = bs.getSmsTotal();
    totalSettings.innerHTML = bs.getCallSmsTotal();

    totalSettings.classList.add(bs.totalClassName())


})


updateSettingsbtn.addEventListener("click", function () {
    if(callCostSetting.value== ""){
        callCostSetting.value =0;
    }
    if(smsCostSetting.value==""){
        smsCostSetting.value=0;
    }
    

    totalSettings.classList.remove("warning");
    totalSettings.classList.remove("danger");

    alert(callCostSetting.value)

    bs.setCall(parseFloat(callCostSetting.value));
    bs.setSms(parseFloat(smsCostSetting.value));
    bs.setWarn(parseFloat(warningLevelSetting.value))
    bs.setCrit(parseFloat(criticalLevelSetting.value))
    
    
    bs.testNumSms(smsCostSetting.value);
  

    totalSettings.classList.add(bs.totalClassName())
})



