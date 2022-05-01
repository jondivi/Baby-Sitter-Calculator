

// let hourlyRateOneChild=17
document.querySelector('button').addEventListener('click',howMuch)

function howMuch(){
       let hourlyRateOneChild=17
       let hourlyRateTwoChildren=24

       let hoursforOne=document.querySelector('#hoursOne').value
       let hoursForTwo=document.querySelector('#hoursTwo').value

       let subtotalForOne=hourlyRateOneChild*hoursforOne;
       let subtotalForTwo=hourlyRateTwoChildren*hoursForTwo;
       let total=subtotalForOne+subtotalForTwo;

       console.log("$"+subtotalForOne);
       console.log("$"+subtotalForTwo);
    //    console.log("$"+total);

    //    alert("Take $"+total+" out of the bank for Anna")

       document.querySelector('h1').innerText="Take $"+total+" out of the bank for Anna"


}
// howMuch(22,1.5)



















