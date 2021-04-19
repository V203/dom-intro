
{
        let calculateBtn_ = document.querySelector(".button-primary");
        let billString___= document.querySelector(".billString");
        let billTotal = document.querySelector(".billTotal");

        calculateBtn_.addEventListener("click",function(){ 
            billTotal.classList.remove("warning")
            billTotal.classList.remove("danger")
           
            calc(billString___.value);
            
                })  


                var calc = () =>{
                    var billString__ = billString___.value;
                    var billString_ = billString__.split(",");
                   // alert(typeof billString)
                    var total =0;

                    for(var i = 0;i<billString_.length;i++){
                        var billString = billString_[i].trim();
                        if(billString === "call"){
                            total += 2.75;

                        }
                        else if(billString === "sms"){
                            total += 0.75;
                        }
                        if(total >= 30){
                            billTotal.classList.add("warning");

                        }
                        if(total > 50){
                            billTotal.classList.add("danger");
                        }

                    }
                    var roundedBillTotal = total.toFixed(2);
                     billTotal.innerHTML = roundedBillTotal;



                }



                
                
 }