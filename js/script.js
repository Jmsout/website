const projects = {
        websites: [
            { img: '../assets/E Button.jpg', alt: 'Website Project 1' },
            { img: '../assets/inventory.jpg', alt: 'Website Project 2' }
        ],
        applications: [
            { img: '../assets/Staysafe.jpg', alt: 'Application Project 1' },
            { img: '../assets/app2.jpg', alt: 'Application Project 2' }
        ],
        'web-design': [
            { img: '../assets/imrs.jpg', alt: 'Web Design Project 1' },
            { img: '../assets/webdesign2.jpg', alt: 'Web Design Project 2' }
        ]
    };

    
    function displayProjects(category) {
        const projectsGrid = document.querySelector('.projects-grid');
        
        // Hide the projects grid first (fade out)
        projectsGrid.classList.remove('visible');
        
        // Wait for fade-out to complete before changing content
        setTimeout(() => {
            // Clear the grid's content
            projectsGrid.innerHTML = '';
    
            // Add new content based on the selected category
            projects[category].forEach(project => {
                const projectDiv = document.createElement('div');
                projectDiv.classList.add('project');
    
                const projectImg = document.createElement('img');
                projectImg.src = project.img;
                projectImg.alt = project.alt;
    
                projectDiv.appendChild(projectImg);
                projectsGrid.appendChild(projectDiv);
            });
    
            // Fade the content back in
            projectsGrid.classList.add('visible');
        }, 300); // 300ms delay to match the transition effect
    }
    
    function setActiveTab(clickedTab) {
        // Remove active class from all tabs
        document.querySelectorAll('.project-categories a').forEach(tab => {
            tab.classList.remove('active');
        });
    
        // Add active class to the clicked tab
        clickedTab.classList.add('active');
    }
    
    // Event listeners for the category tabs
    document.querySelectorAll('.project-categories a').forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            
            // Set the active tab with yellow border
            setActiveTab(this);
    
            // Display the projects of the clicked category
            displayProjects(category);
        });
    });
    
    // Load default category (websites) when the page loads
    window.onload = () => {
        const defaultTab = document.querySelector('.project-categories a[data-category="websites"]');
        setActiveTab(defaultTab);
        displayProjects('websites');
         // Trigger slide-in effect
    document.querySelector('.portfolio-section').style.opacity = '1';
    };
    
    // Function to add 'in-view' class when elements are in the viewport
function handleScroll() {
    const elements = document.querySelectorAll('.aboutme p, .cards-wrapper');

    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight - 100) {
            element.classList.add('in-view'); // Add class when element is in view
        }
    });
}

// Listen for scroll event
window.addEventListener('scroll', handleScroll);

// Run the function initially to catch any elements already in view
handleScroll();


document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in, .slide-in-left");

    function handleScroll() {
        fadeInElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check for elements already in view
});


// Toggle the menu visibility and animate icon
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");

    // Add or remove the outside-click event listener based on menu state
    if (menu.classList.contains("show")) {
        document.addEventListener("click", closeMenuOnOutsideClick);
    } else {
        document.removeEventListener("click", closeMenuOnOutsideClick);
    }
}

// Close menu when clicking outside of it
function closeMenuOnOutsideClick(event) {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger-menu");

    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("show");
        document.removeEventListener("click", closeMenuOnOutsideClick);
    }
}


function toggleTooltip(element) {
    // Hide any other open tooltips
    document.querySelectorAll('.contacts div').forEach(div => {
        if (div !== element) {
            div.classList.remove('show-tooltip');
        }
    });

    // Toggle the tooltip visibility for the clicked element
    element.classList.toggle('show-tooltip');
}

// Close tooltip when clicking outside of it
document.addEventListener('click', function (event) {
    const isIconClick = event.target.closest('.icon');
    if (!isIconClick) {
        document.querySelectorAll('.contacts div').forEach(div => {
            div.classList.remove('show-tooltip');
        });
    }
});
