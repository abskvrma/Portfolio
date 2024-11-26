document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  });
  
  const form = document.querySelector('form');
  const nameField = form.querySelector('input[type="text"]');
  const emailField = form.querySelector('input[type="email"]');
  const messageField = form.querySelector('textarea');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    let isValid = true;
  
    if (nameField.value.trim() === '') {
      isValid = false;
      alert('Please enter your name.');
    }
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailField.value.trim())) {
      isValid = false;
      alert('Please enter a valid email address.');
    }
  
    if (messageField.value.trim() === '') {
      isValid = false;
      alert('Please enter a message.');
    }
  
    if (isValid) {
      alert('Thank you for your message!');
      form.reset();
    }
  });
  