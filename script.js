
        document.addEventListener('DOMContentLoaded', function() {
           
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    document.querySelectorAll('.section').forEach(section => {
                        section.classList.remove('active');
                    });
                    
               
                    targetSection.classList.add('active');
                    
                    document.querySelectorAll('nav a').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                                    
                    window.scrollTo({
                        top: targetSection.offsetTop - 100,
                        behavior: 'smooth'
                    });
                });
            });
            
            document.querySelector('nav a').click();
            
            const observerOptions = {
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            }, observerOptions);
            
            document.querySelectorAll('.project-card, .certification-item, .blog-card, .document-item').forEach(card => {
                observer.observe(card);
            });
        });
    