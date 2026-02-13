 const firstNumber = document.getElementsById("number-box-1");
 const secondNumber = document.getElementsById("number-box-2");
 const displayResult = document.getElementById("answer-box");
 const addBtn = document.querySelector(".operator-add");
 const minusBtn = document.querySelector(".operator-minus");
 const multiplyBtn = document.querySelector(".operator-multiply");
 const divideBtn = document.querySelector(".operator-divide");

 function calculate(){
    const firstnumber = parseFloat(firstNumber.value);
    const secondnumber = parseFloat(secondNumber.value);

    if(isNaN(firstnumber) || isNaN(secondnumber)){
      displayResult.textContent = "Enter valid numbers"  
      return null;
    }
    return{
        firstnumber, secondnumber
    };
 }
 addBtn.addEventListener("click", () =>{
    const values = calculate();
    if (!values) return;
    displayResult.textContent = values.firstnumber + values.secondnumber;
 });
 minusBtnBtn.addEventListener("click", () =>{
    const values = calculate();
    if (!values) return;
    displayResult.textContent = values.firstnumber - values.secondnumber;
 });
multiplyBtn.addEventListener("click", () =>{
    const values = calculate();
    if (!values) return;
    displayResult.textContent = values.firstnumber * values.secondnumber;
 });
 divideBtn.addEventListener("click", () =>{
    const values = calculate();
    if (!values) return;
    displayResult.textContent = values.firstnumber / values.secondnumber;
 });