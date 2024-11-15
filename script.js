
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
    // Create ripple element
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    
    // Set position of ripple to match the click coordinates
    ripple.style.left = `${e.pageX}px`;
    ripple.style.top = `${e.pageY}px`;
  
    // Add ripple to the document
    document.body.appendChild(ripple);
  
    // Remove ripple after animation completes
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  });

  // Function to check if the element is in view
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add 'active' class to milestones in view
function checkMilestones() {
    const milestones = document.querySelectorAll('.container ul li');
    const cards = document.querySelectorAll(".card");
  const triggerPoint = window.innerHeight * 0.8;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerPoint) {
      card.classList.add("visible");
    }else{
      
      card.classList.remove("visible");
    }
  });
    milestones.forEach(milestone => {
        if (isInViewport(milestone)) {
            milestone.classList.add('active');
        }else{
            
            milestone.classList.remove('active');
        }
    });
}

// Listen to scroll event
window.addEventListener('scroll', checkMilestones);

// Initial check in case elements are already in view on page load
document.addEventListener('DOMContentLoaded', checkMilestones);



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
  form.addEventListener("submit", handleSubmit)


