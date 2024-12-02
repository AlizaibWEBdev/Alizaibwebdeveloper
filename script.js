
const modal = document.getElementById("certificateModal");
const certificates = document.querySelectorAll(".certificate");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");




certificates.forEach(function (cert) {
  cert.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImage.src = cert.src;
  });
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function toggleMenu() {
  const sideMenu = document.getElementById('sideMenu');
  sideMenu.classList.toggle('menu-active');
}




document.addEventListener('click', (e) => {
  
  const ripple = document.createElement('div');
  ripple.classList.add('ripple');

  
  ripple.style.left = `${e.pageX}px`;
  ripple.style.top = `${e.pageY}px`;

  
  document.body.appendChild(ripple);

  
  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
});


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function checkMilestones() {
  const milestones = document.querySelectorAll('.container ul li');
  let profile = document.getElementById("profile-scroll")

  profile.style.top = window.scrollY + (window.innerHeight / 2 - 200) + "px"

  const cards = document.querySelectorAll(".card");
  const triggerPoint = window.innerHeight * 0.8;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerPoint) {
      card.classList.add("visible");
    } else {

      card.classList.remove("visible");
    }
  });
  milestones.forEach(milestone => {
    if (isInViewport(milestone)) {
      milestone.classList.add('active');
    } else {

      milestone.classList.remove('active');
    }
  });
}


window.addEventListener('scroll', checkMilestones);





var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit);






const msgdiv = document.getElementById("msg");
const messages = [
  
  ,
  "Let's collaborate on your next big project—hire me now!",
  "Need a custom website? I'm here to help you grow your business.",
  "I'm passionate about crafting seamless user experiences.",
  "I transform complex ideas into clean, functional websites.",
  "I craft innovative, performance-driven websites to boost your brand.",
  "Your next project deserves the best—let’s make it happen!",
  "Need a stunning UI? I’ll create the perfect design for you.",
  "I transform code into seamless, dynamic web experiences.",
  "I bring clean, modern, and responsive websites to life.",
  "I’m passionate about turning your business goals into code. Let’s chat!"
];

let start = 0; 

function showmsg(msg) {
  msgdiv.style.visibility = "visible"; 
  msgdiv.style.opacity = 1; 
  msgdiv.innerHTML = `<p>${msg}</p>`;
  
  
  setTimeout(() => {
    msgdiv.style.opacity = 0; 
    setTimeout(() => {
      msgdiv.style.visibility = "hidden"; 
    }, 300); 
  }, 5000); 
}


function cycleMessages() {
  showmsg(messages[start]);
  start = (start + 1) % messages.length; 
}





document.body.style.overflow = "hidden";
window.addEventListener("DOMContentLoaded", () => {
  checkMilestones()
  setTimeout(() => {
    cycleMessages(); 
    setInterval(cycleMessages, 10000); 
    showmsg("I’m a problem-solver, creating  solutions for your business.");
    
  }, 1500); 
  
  const lineElement = document.getElementById("line-");
  lineElement.style.height = document.documentElement.offsetHeight - 95 + "px"; 
  document.body.style.overflowY = "auto";  
  document.getElementById("loader").style.transform = "translateX(200vw)";
})

