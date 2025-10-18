function calc() {
  
  const od1 = parseFloat(document.getElementById('od1').value);
  const od2 = parseFloat(document.getElementById('od2').value);
  const od3 = parseFloat(document.getElementById('od3').value);
  const od4 = parseFloat(document.getElementById('od4').value);
  const od5 = parseFloat(document.getElementById('od5').value);
  
  const a = Math.round(((od1+od2+od3+od4+od5)/5-od1) * 10) / 10;
  const b = Math.round((od1/od5) * 10) / 10;
  
  document.getElementById('result1').textContent = a;
  document.getElementById('result2').textContent = b;

}
