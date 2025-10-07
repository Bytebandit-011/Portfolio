var typed = new Typed('#animated-text', {
  strings: ['Hello World', 'Ciao World', 'Hola World', 'Namaste World'],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1500,
  loop: true,
  showCursor: false 
});


// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})


function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_icqqvvb";
  const templateID = "template_9q1gs67";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      // Update the status message in the page (instead of alert)
      document.getElementById("status").innerText = "Thank you! Your message has been sent.";
      // Optional: show success with styled class
      document.getElementById("status").className = "success-message";
    })
    .catch(err => {
      document.getElementById("status").innerText = "Sorry, there was an error sending your message. Please try again.";
      document.getElementById("status").className = "error-message";
      console.log(err);
    });
}

