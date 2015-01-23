/**
 * Created by Gil on 22/01/2015.
 */
function calculateTax(){
    var salaryString = document.getElementById("grossSalary").value;
    var salaryInteger = parseInt(salaryString);
    alert(salaryInteger + 1);

    taxOutput = document.getElementById("incomeTax");
    taxOutput.innerHTML += salaryInteger;
}