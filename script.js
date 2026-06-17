document.addEventListener("DOMContentLoaded", () => {
    

    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const uniqueString = Date.now(); 
        
        heroSection.style.background = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), 
        url('https://picsum.photos/1920/1080?random=${uniqueString}') no-repeat center center/cover`;
    }

    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');

    if (galleryItems.length > 0 && lightbox) {
        
        galleryItems.forEach(item => {
            item.addEventListener('click', (e) => {
                lightbox.style.display = 'flex';
                lightboxImg.src = e.target.src;
                lightboxImg.alt = e.target.alt;
                document.body.style.overflow = 'hidden';
            });
        });

        closeLightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    const form = document.querySelector('.form-content form');
    const inputFields = form ? form.querySelectorAll('input, select, textarea') : [];
    const thanks= document.querySelector('.thanks');
    const submit = document.querySelector('.submit-btn');

    thanks.style.display = 'none';

    

  
  form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    form.style.display = 'none';
    thanks.style.display = 'flex';
    
  });




});  
