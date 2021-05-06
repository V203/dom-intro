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
    var x = document.querySelector(".billItemTypeWithSettings:checked");
    // alert(x.value)
    totalSettings.classList.remove("warning");
    totalSettings.classList.remove("danger");

    bs.calc(x.value)

    callTotalSettings.innerHTML =bs.getCallTotal();
    smsTotalSettings.innerHTML = bs.getSmsTotal();
    totalSettings.innerHTML = bs.getCallSmsTotal();

    totalSettings.classList.add(bs.totalClassName())
    

})


updateSettingsbtn.addEventListener("click", function () {

   
    totalSettings.classList.remove("warning");
    totalSettings.classList.remove("danger");
  
     bs.setCall(parseFloat(callCostSetting.value));
     bs.setSms(parseFloat(smsCostSetting.value));
     bs.setWarn(parseFloat(warningLevelSetting.value))
     bs.setCrit(parseFloat(criticalLevelSetting.value))

     totalSettings.classList.add(bs.totalClassName())
})



