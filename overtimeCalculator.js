//Overtime Calculator

    //Get Hours worked from input field

function calculatePaycheck(hours,rate){
    if(hours <= 40){
        const paycheck = hours * rate;
        return paycheck;
    } else {
        const paycheck = 40 * rate;
        return paycheck;
    }
}
    

function calculateOvertime(hours, rate) {
   
        const overtime =  (hours - 40) * (rate * 1.5);
        //print in DOM HTML 
      return overtime;
}

function onClickOvertime(){
    
    const inputHours = Number(document.getElementById('hoursInput').value);
    //Get Rate from input field
    const inputRate = Number(document.getElementById('rateInput').value);

    const totalOvertime = calculateOvertime(inputHours, inputRate);
    const totalPaycheck = calculatePaycheck(inputHours, inputRate);
    

    if (inputHours > 40){
       
        const resultHours = document.getElementById('resultText');
     
        resultHours.innerHTML = `Weekly pay:$ ${totalPaycheck} <br>Overtime pay: $ ${totalOvertime} <br> Total Earned: $${totalOvertime + totalPaycheck}`;
        
    } else {
        const resultHours = document.getElementById('resultText');
       
        resultHours.innerHTML = ` Weekly pay:$ ${totalPaycheck} <br>Overtime: $ 0 <br> Total Earned: $${totalOvertime + totalPaycheck}`;
        
    }

}

