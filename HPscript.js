document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById("nav-toggle");
    const sidebar = document.getElementById("sidebar");

    navToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });

    // Close sidebar if clicking outside of it
    document.addEventListener("click", function(event) {
        if (!sidebar.contains(event.target) && !navToggle.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});
