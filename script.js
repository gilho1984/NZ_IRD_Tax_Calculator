/**
 * Created by Gil on 22/01/2015.
 */
function calculateTax(){

    var salaryInteger;
    var superAnnuation;
    var loanRepayment;
    var accPayment;

    // Get User Salary Figure and store it as integer (pass it to methods)
    salaryInteger = parseInt(document.getElementById("grossSalary").value);

    // Display mechanism
    //taxOutput = document.getElementById("incomeTax");
    //taxOutput.innerHTML += salaryInteger;


    //Calculate and Add Income Tax
    alert(calculateIncomeTax(10000));


    //Calculate and Add Student Loan
    var haveLoan = studentLoan();
    if(haveLoan){
        loanRepayment = loanRepaymentCalculator(salaryInteger);
    }



}

function calculateIncomeTax(grossIncome){

    // Income Tax Rates
    // up to 14,000 -----------         10.05
    // 14,001 ~ 48,000 --------         17.05
    // 48,001 ~ 70,000 --------         30.00
    // 70,000 +   -------------         33.00

    // Categorisation of Salary
    var grsIncomeCat;
    var incomeTax;

    if(grossIncome < 0){
        grsIncomeCat = 1;
    } else if(grossIncome > 0 && grossIncome < 14,001){
        grsIncomeCat = 2;
    } else if(grossIncome > 14,000 && grossIncome < 48001){
        grsIncomeCat = 3;
    } else if(grossIncome > 48000 && grossIncome < 70001){
        grsIncomeCat = 4;
    } else if(grossIncome > 70000){
        grsIncomeCat = 5;
    }

    // Logic Calculator
    if(grsIncomeCat == 1){
        incomeTax = 0;
    } else if(grsIncomeCat == 2){
        incomeTax = grossIncome*0.1005;
    } else if(grsIncomeCat == 3){
        incomeTax = (14000*0.1005) + ((grossIncome - 14000)*17.05);
    } else if(grsIncomeCat == 4){
        incomeTax = (14000*0.1005) + (34000*0.1705) + (grossIncome - ((14000*0.1005) + (34000*0.1705)));
    } else if(grsIncomeCat == 5){
        incomeTax = (14000*0.1005) + (34000*0.1705) + (22000*0.3) + (grossIncome - ((14000*0.1005) + (34000*0.1705) + (22000*0.3)));
    } else {
        incomeTax = 0;
    }

    return  incomeTax;

}

function studentLoan(){
    // This function should be called by Calculate Tax to tell whether there is loan or not
    // 12% rate
    var hasLoan = false;

   if(document.getElementById('loanYes').checked){
        hasLoan = true;
   } else if(document.getElementById('loanNo').checked){
       hasLoan = false;
   }

    return hasLoan;
}

function loanRepaymentCalculator(grossIncome){
    // is called only if studentLoan returns TRUE
    // student loan tax rate is 12%

    var loanRepayment = grossIncome*0.12;
    return  loanRepayment;
}















