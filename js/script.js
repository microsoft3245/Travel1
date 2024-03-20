function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    const expression = `${num1} ${operator} ${num2}`;
    const answer = eval(expression);
    return { expression, answer };
  }
  
  
  function showCaptchaPopup() {
    const captcha = generateCaptcha();
    const userAnswer = prompt(`Solve the Captcha: ${captcha.expression}`);
    if (userAnswer !== null) {
      if (parseInt(userAnswer) === captcha.answer) {
        alert('Captcha solved successfully!');
      } else {
        alert('Incorrect answer. Please try again.');
        showCaptchaPopup();
      }
    }
  }
  
  
  window.onload = function() {
    showCaptchaPopup();
  };