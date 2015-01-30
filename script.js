/**
 * Created by Gil on 22/01/2015.
 */
function calculateTax(){

    var salaryInteger;
    var superAnnuation;
    var actualTax;
    var superAnnuationPayment;
    var loanRepayment;

    // Get User Salary Figure and store it as integer (pass it to methods)
    salaryInteger = parseInt(document.getElementById("grossSalary").value);

    //Calculate and Add Income Tax
    actualTax = calculateIncomeTax(salaryInteger);

    //Calculate and Add Student Loan
    var haveLoan = studentLoan();
    if(haveLoan){
        loanRepayment = loanRepaymentCalculator(salaryInteger);
    }

    //Get Super figure
    superAnnuation = parseInt(document.getElementById('superPercentage').value);
    if (superAnnuation > 0){
        superAnnuationPayment = superCalculator(superAnnuation, salaryInteger);
    } else {
        superAnnuationPayment = 0;
    }


    // Display mechanism
    //taxOutput = document.getElementById("incomeTax");
    //taxOutput.innerHTML += salaryInteger;

    var grossIncomeOutput = document.getElementById('grossIncome');
    var taxBreakdownOutput = document.getElementById('taxBreakdown');
    var incomeTaxOutput = document.getElementById('incomeTax');
    var loanRepaymentOutput = document.getElementById('loanRepayment');
    var superPayment = document.getElementById('superPayment');
    var expenses = document.getElementById('totalOut');
    var netDeposit = document.getElementById('netIncome');
    var actualExpenses = actualTax + loanRepayment + superAnnuationPayment;
    var totalDeposit = salaryInteger - actualExpenses;

    taxBreakdownOutput.innerHTML = "Tax Breakdown";
    grossIncomeOutput.innerHTML = "Gross Income: $" + salaryInteger;
    incomeTaxOutput.innerHTML = "Income Tax: $" + actualTax;
    loanRepaymentOutput.innerHTML = "Studylink Repayments: $" + loanRepayment;
    superPayment.innerHTML = "Super Payment: $" + superAnnuationPayment;
    expenses.innerHTML = "Total Taken Away: $" + actualExpenses;
    netDeposit.innerHTML = "Actual Money in Bank: $" + totalDeposit;

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
        incomeTax = grossIncome*0.1195;
    } else if(grsIncomeCat == 3){
        incomeTax = (14000*0.1195) + ((grossIncome - 14000)*0.1895);
    } else if(grsIncomeCat == 4){
        incomeTax = (14000*0.1195) + (34000*0.1895) + ((grossIncome - ((14000*0.1195) + (34000*0.1895)))*0.3145);
    } else if(grsIncomeCat == 5){
        incomeTax = (14000*0.1195) + (34000*0.1895) + (22000*0.3145) + ((grossIncome - ((14000*0.1195) + (34000*0.1895) + (22000*0.3145)))*0.3445);
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

function superCalculator(superRate, grossIncome){

    var returnRate = grossIncome * (superRate/100);
    return returnRate;

}













