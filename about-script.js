// About page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation completion
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Skills list hover effects
    const skillItems = document.querySelectorAll('.skills-list li');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Navbar scroll effect (optional)
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add subtle shadow when scrolling
        if (scrollTop > 10) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add fade-in animation for content sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe content sections for fade-in effect
    const contentSections = document.querySelectorAll('.about-description, .skills-section, .passion-note');
    contentSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Live Footer Date
    const liveDate = document.getElementById('live-date');
    if (liveDate) {
        const today = new Date();

        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };

        const formattedDate = today.toLocaleDateString('en-GB', options);

        liveDate.innerHTML = "© " + formattedDate + " Bishwajeet Dutta";
    }

});

// Utility function for smooth page transitions
function navigateToPage(url) {
    // Add fade out effect
    document.body.style.opacity = '0.8';
    
    setTimeout(() => {
        window.location.href = url;
    }, 150);
}

// Add click handlers for navigation links with smooth transitions
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link:not([href^="#"])');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply transition for internal links
            if (href && !href.startsWith('http') && !href.startsWith('//')) {
                e.preventDefault();
                navigateToPage(href);
            }
        });
    });
});