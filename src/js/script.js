 const firstNumber = document.getElementById("number-box-1");
 const secondNumber = document.getElementById("number-box-2");
 const displayResult = document.getElementById("answer-box");
 const addBtn = document.querySelector(".operator-add");
 const minusBtn = document.querySelector(".operator-minus");
 const multiplyBtn = document.querySelector(".operator-multiply");
 const divideBtn = document.querySelector(".operator-divide");
 const backBtn = document.querySelector(".operator-back")

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
 function clear(){
    firstNumber.value ="";
    secondNumber.value ="";
    displayResult.textContent = "";
 }
 addBtn.addEventListener("click", () =>{
    const values = calculate();
    if (!values) return;
    displayResult.textContent = values.firstnumber + values.secondnumber;
 });
 minusBtn.addEventListener("click", () =>{
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

 backBtn.addEventListener("click" ,() => {
    if (secondNumber.value !==""){
        secondNumber.value =secondNumber.value.slice(0, -1);
        displayResult.textContent ="";
    }
        else if (firstNumber.value!== ""){
            firstNumber.value =firstNumber.value.slice(0, -1);;
        }
 });