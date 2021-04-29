
{
        let calculateBtn_ = document.querySelector(".button-primary");
        let billString___= document.querySelector(".billString");
        let billTotal = document.querySelector(".billTotal");

        calculateBtn_.addEventListener("click",function(){ 
            let calc_ = calculateBill();
            billTotal.classList.remove("warning")
            billTotal.classList.remove("danger")
         
            billTotal.innerHTML = calc_.calculate(billString___.value);
            billTotal.classList.add(calc_.totalClassName());

                })  
              
                
 }