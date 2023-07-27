function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculateResult() {
    const displayValue = document.getElementById('display').value;
    const result = eval(displayValue); // Note: Using eval can be a security risk in some cases, so use with caution or consider alternative approaches for expression evaluation.
    document.getElementById('display').value = result;
  }
