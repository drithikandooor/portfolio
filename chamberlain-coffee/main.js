const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;
    const totalImages = images.length;
    let autoSlideInterval;
  
    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
          img.classList.add('active');
        }
      });
    }
  
    function showNextImage() {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    }
  
    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(showNextImage, 1500);
    }
  
    // Initial auto slide setup
    autoSlideInterval = setInterval(showNextImage, 1500);
  
    carousel.addEventListener('click', function(event) {
      const carouselWidth = this.offsetWidth;
      const clickX = event.clientX;
  
      if (clickX < carouselWidth / 2) {
        // Left side clicked
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
      } else {
        // Right side clicked
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
      }
  
      showImage(currentIndex);
      resetAutoSlide(); // Reset auto slide timer on user interaction
    });

