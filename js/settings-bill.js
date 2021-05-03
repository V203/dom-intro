





    var callCostSetting = document.querySelector(".callCostSetting");
    var smsCostSetting = document.querySelector(".smsCostSetting");

    var callTotalSettings = document.querySelector(".callTotalSettings");
    var smsTotalSettings = document.querySelector(".smsTotalSettings");
    var totalSettings = document.querySelector(".totalSettings");
    var button_add = document.querySelector(".button-primary-add");

    var warningLevelSetting = document.querySelector(".warningLevelSetting");
    var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
    var updateSettingsbtn = document.querySelector(".button-primary-updateSettings");



    button_add.addEventListener("click", function () {
        let bs = billWithSettings();
        var x = document.querySelector(".billItemTypeWithSettings:checked");
         bs.calc_bs(x.value)
        
        callTotalSettings.innerHTML = bs.getCall();
        smsTotalSettings.innerHTML = bs.getSms();
        
        
        })

   

    updateSettingsbtn.addEventListener("click", function () {
        let bs = billWithSettings();
        

        
        bs.setCall(parseFloat(callCostSetting.value ));
        bs.setSms(parseFloat(smsCostSetting.value));
        bs.setWarn(parseFloat(warningLevelSetting.value))
        bs.setCrit(parseFloat(criticalLevelSetting.value))

        // alert("call"+bs.getCall()+" sms "+bs.getSms()+" warn"+ bs.getWarn()+" crit "+bs.getCrit())
    
       
        
    })

  




   











