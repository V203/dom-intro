
let calculateBtn_ = document.querySelector(".button-primary");
let billString= document.querySelector(".billString");
let billTotal = document.querySelector(".billTotal");

calculateBtn_.addEventListener("click",function(){ 
    billTotal.classList.remove("warning")
    billTotal.classList.remove("danger")

    calculateBill(billString.value);
        })  
        function calculateBill(billString__){

            let total = 0;
            let billString_ = billString__.split(", ")

            for(let i = 0;i<billString_.length;i++){
            //     billString_[i] == "call" ? total+=2.75 : total+=0.65; 
                 if(billString_ == ""){
                     alert("Please type 'call' or or sms in the -->Enter Bill (Text area).");
                 }
            //
                if(billString_[i] == "call"){
                    total += 2.75;
                }
                if(billString_[i] == "sms"){
                    total+=0.65;
                }
             
            }
            

            
            if(total > 20){                
                billTotal.classList.add("warning")

            }
            if(total > 30){
                
                billTotal.classList.add("danger")
            }
            return billTotal.innerHTML = total.toFixed(2);            
          }

       