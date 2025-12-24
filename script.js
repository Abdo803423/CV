/*================= Scroll Section Active nav ============*/
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

/* ============== Sticky Navbar ===============*/
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
            });
            
            // Find and activate the corresponding nav link
            let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
    
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
};