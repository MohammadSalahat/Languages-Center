document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname;

    // Get all navigation links
    const navLinks = document.querySelectorAll("#navbar a");

    // Loop through each link and check if it matches the current page
    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (currentPage === linkPath) {
            // Apply the styling for the current page
            link.style.backgroundColor = "#ba8f95ff"; // Background color
            link.style.color = "white"; // Text color
        }
    });
});