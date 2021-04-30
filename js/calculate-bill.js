
var calculateBtn_ = document.querySelector(".button-primary");
var billString= document.querySelector(".billString");
var billTotal = document.querySelector(".billTotal");

calculateBtn_.addEventListener("click",function(){ 
    let calc = calculateBill()
    billTotal.classList.remove("warning")
    billTotal.classList.remove("danger")
    billTotal.innerHTML = calc.calculate(billString.value)
    billTotal.classList.add(calc.totalClassName())

    // calculateBill(billString.value);
        })  
        // function calculateBill(billString__){

        //     var total = 0;
        //     var billString_ = billString__.split(", ")

        //     for(var i = 0;i<billString_.length;i++){
        //         billString_[i] == "call" ? total+=2.75 : total+=0.65; 
        //     }           
        //     if(total > 20){                
        //         billTotal.classList.add("warning")

        //     }
        //     if(total > 30){
                
        //         billTotal.classList.add("danger")
        //     }
        //     return billTotal.innerHTML = total.toFixed(2);            
        //   }

          