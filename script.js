print = console.log;

// HAMBURGER TOGGLE
function toggleNav() {
  const hamburger = document.querySelector(".nav-items");
  hamburger.classList.toggle("active");
}

const hamburgerIcon = document.getElementById("hamburger");
hamburgerIcon.onclick = function () {
  toggleNav();
  hamburgerIcon.classList.toggle("active");
};

function gallery() {
  const imgs = document.querySelectorAll(".background > div:not(:last-child)");
  // print(imgs);

  imgs.forEach(function (div) {
    div.onclick = function () {
      swapClasses(div);
    };
  });
}
gallery();

function swapClasses(clickedDiv) {
  var centerDiv = document.querySelector(".gal-3");

  // Swap classes
  var tempClass = centerDiv.className;
  centerDiv.className = clickedDiv.className;
  clickedDiv.className = tempClass;
  const audio = document.getElementById("audioPlayer");
  audio.play();
  clickedDiv.style.transition = "all 0.5s cubic-bezier(0.38,-0.25, 0, 1.7)";
}

// ON 320PX OR LESS DEVICES
var media320px = window.matchMedia("(max-width:320px)");

// On Mobile Device
function viewSingle(media320px) {
  const singleImg = document.querySelectorAll(".background .galls");

  if (media320px.matches) {
    function showImages(index) {
      const currentIndex = index % singleImg.length;
      const img = singleImg[currentIndex];

      // HIDE ALL
      singleImg.forEach((img) => {
        img.style.opacity = "0";
        img.classList = [];
        img.classList.add("responsiveWidth");
      });

      const centerClasses = ["relativeWidth20", "gal-3"];
      img.classList.add(...centerClasses);
      img.style.opacity = "1";

      setTimeout(() => {
        // Remove centerClasses from current img
        img.classList.remove(...centerClasses);
        img.style.opacity = "0";

        // Call showImages with the next index
        showImages(currentIndex + 1);
      }, 3000);
    }

    // Start the infinite loop
    showImages(0);
  } else {
    // SHOW ALL singleImg
    singleImg.forEach(function (img) {
      img.style.opacity = "1";
    });
  }
}
viewSingle(media320px);
media320px.onchange = function () {
  viewSingle(media320px);
};

// TESTIMONIAL START
function testimonial() {
  const testimonials = document.querySelectorAll(".testimonial");
  let currentIndex = 0;

  function eachTestimonial() {
    testimonials.forEach((x) => {
      x.style.display = "none";
    });
    testimonials[currentIndex].style.display = "block";
    currentIndex = (currentIndex + 1) % testimonials.length;
  }
  eachTestimonial();

  function interval() {
    intervalFunction = setInterval(eachTestimonial, 5000);
  }

  interval();

  testimonials.forEach(function (x) {
    x.onmouseenter = function () {
      clearInterval(intervalFunction);
    };
    x.onmouseleave = function () {
      interval();
    };
  });

  //CSS ANIMATION PAUSE AND RESUME
  const progressBar = document.getElementById('progressRunner');
    
  
  function pauseAnimation() {
    progressBar.style.animationPlayState = 'paused';
  }
  
  function resumeAnimation() {
    progressBar.style.animationPlayState = 'running';
  }

  testimonials.forEach(function(x) {
    x.onmouseenter = function() {
      pauseAnimation();
      console.log(x);
    }
    x.onmouseleave = function() {
      resumeAnimation();
      console.log(x, true);
    }
  });
}

// Call the testimonial function
testimonial();
// TESTIMONIAL END

// ENVELOP START
function open() {
  const button = document.querySelector(".top-envelop button");
  const buttonParagraph = document.querySelector(".top-envelop button p");
  // print(button);
  const envelopForm = document.querySelector(".envelop .inner-envelop form");
  // print(envelopHeight)

  button.addEventListener("click", () => {
    const envelopIcon = document.querySelector(".top-envelop span");

    envelopIcon.style.opacity = 0;
    envelopIcon.style.transition = "opacity 0.2s ease";

    button.style.width = "15rem";

    envelopForm.style.height = "450px";
    envelopForm.style.bottom = "30%";
    envelopForm.style.transition = "all 0.5s ease";

    buttonParagraph.innerHTML = "COMPOSING";

    startAnimation();
  });

  const sendButton = document.querySelector(
    '.inner-envelop form input[type="submit"]'
  );
  console.log(sendButton);

  // sendButton.onclick = function () {
  //   const formInputs = document.querySelectorAll("#allInputs > *");

  //   sendButton.value = "MAIL SENT";
  //   print(sendButton);

  //   if (
  //     formInputs[0].value.trim() == "" ||
  //     formInputs[1].value.trim() == "" ||
  //     formInputs[2].value.trim() == ""
  //   ) {
  //     envelopForm.style.opacity = "1";
  //   } else {
  //     envelopForm.style.opacity = "0";
  //   }
  // };

  function startAnimation(x) {
    let i = 0;
    let intervalId;
    const p = ".";
    const k = "";

    intervalId = setInterval(function () {
      switch (i % 4) {
        case 0:
          buttonParagraph.innerHTML = "COMPOSING";
          break;
        case 1:
          buttonParagraph.innerHTML = "COMPOSING.";
          buttonParagraph.style.transition = "all 0.5s ease";
          buttonParagraph.style.color = "#ff2600";
          break;
        case 2:
          buttonParagraph.innerHTML = "COMPOSING..";
          buttonParagraph.style.transition = "all 0.5s ease";
          buttonParagraph.style.color = "#ff2cc6";
          break;
        case 3:
          buttonParagraph.innerHTML = "COMPOSING...";
          buttonParagraph.style.transition = "all 0.5s ease";
          buttonParagraph.style.color = "#ef211d";
          break;
      }
      i++;
    }, 500);
  }
}
open();

// ENVELOP CLOSE
