const images = document.querySelectorAll(".image img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

const nextBtn = document.getElementById("next");

const prevBtn = document.getElementById("prev");

const themeBtn = document.getElementById("themeBtn");

const slideBtn = document.getElementById("slideBtn");

const likeButtons = document.querySelectorAll(".like-btn");

let currentImage = 0;

let slideshow;

let isPlaying = false;

/* OPEN LIGHTBOX */

images.forEach((img,index)=>{

  img.addEventListener("click",()=>{

    currentImage = index;

    showImage();

    lightbox.classList.add("active");

  });

});

/* SHOW IMAGE */

function showImage(){

  lightboxImg.src = images[currentImage].src;

}

/* NEXT IMAGE */

nextBtn.addEventListener("click",()=>{

  currentImage++;

  if(currentImage >= images.length){

    currentImage = 0;

  }

  showImage();

});

/* PREVIOUS IMAGE */

prevBtn.addEventListener("click",()=>{

  currentImage--;

  if(currentImage < 0){

    currentImage = images.length - 1;

  }

  showImage();

});

/* CLOSE LIGHTBOX */

closeBtn.addEventListener("click",()=>{

  lightbox.classList.remove("active");

});

/* DARK MODE */

themeBtn.addEventListener("click",()=>{

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){

    themeBtn.innerHTML = "🌞 Light Mode";

  }

  else{

    themeBtn.innerHTML = "🌙 Dark Mode";

  }

});

/* AUTO SLIDESHOW */


slideBtn.addEventListener("click",()=>{

  // START SLIDESHOW

  if(isPlaying === false){

    slideshow = setInterval(()=>{

      currentImage++;

      if(currentImage >= images.length){

        currentImage = 0;

      }

      showImage();

      lightbox.classList.add("active");

    },2000);

    slideBtn.innerHTML = "⏸ Stop Slideshow";

    isPlaying = true;

  }

  // STOP SLIDESHOW

  else{

    clearInterval(slideshow);

    slideshow = null;

    slideBtn.innerHTML = "▶ Start Slideshow";

    isPlaying = false;

  }

});

/* LIKE BUTTON */

likeButtons.forEach((button)=>{

  button.addEventListener("click",()=>{

    if(button.innerHTML === "🤍"){

      button.innerHTML = "❤️";

    }

    else{

      button.innerHTML = "🤍";

    }

  });

});
/* FILTER BUTTONS */

function filterSelection(category){

  const images = document.querySelectorAll(".image");

  const buttons = document.querySelectorAll(".buttons button");

  // REMOVE ACTIVE CLASS

  buttons.forEach((button)=>{

    button.classList.remove("active");

  });

  // ADD ACTIVE CLASS TO CLICKED BUTTON

  event.target.classList.add("active");

  // SHOW FILTERED IMAGES

  images.forEach((image)=>{

    if(category === "all"){

      image.style.display = "block";

    }

    else if(image.classList.contains(category)){

      image.style.display = "block";

    }

    else{

      image.style.display = "none";

    }

  });

};
/* STOP SLIDESHOW WHEN LIGHTBOX CLOSES */

closeBtn.addEventListener("click",()=>{

  clearInterval(slideshow);

  slideshow = null;

  isPlaying = false;

  slideBtn.innerHTML = "▶ Start Slideshow";

});