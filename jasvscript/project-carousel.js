

const slider = document.querySelector('.page2 .slider');
const navDots = document.querySelectorAll('.page2 .slider-nav a');
let currentIndex = 0;

// Function to update the active indicator
const updateNavDots = () => {
  navDots.forEach((dot, index) => {
    dot.style.opacity = index === currentIndex ? '1' : '0.5';
  });
};

// Function to scroll the slider
const scrollToSlide = (index) => {
  const slideWidth = slider.querySelector('img').clientWidth;
  slider.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth',
  });
  currentIndex = index;
  updateNavDots();
};

// Event listeners for navigation dots
navDots.forEach((dot, index) => {
  dot.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSlide(index);
  });
});

// Auto-slide feature
setInterval(() => {
  currentIndex = (currentIndex + 1) % navDots.length;
  scrollToSlide(currentIndex);
}, 3000);




//book

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;

function openBook() {
  const screenWidth = window.innerWidth;
  
  if (screenWidth <= 768) { // Mobile screen breakpoint
    book.style.transform = "translateX(67px)";
    prevBtn.style.transform = "translateX(-67px)";
    nextBtn.style.transform = "translateX(67px)";
  } else {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
  }
}


function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }

  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        break;
      case 4:
        paper4.classList.add("flipped");
        paper4.style.zIndex = 4;
        closeBook(false);
        break;
      default:
        throw new Error("unknown state");
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 4;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 3;
        break;
      case 4:
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 2;
        break;
      case 5:
        openBook();
        paper4.classList.remove("flipped");
        paper4.style.zIndex = 1;
        break;
      default:
        throw new Error("unknown state");
    }

    currentLocation--;
  }
}
