const sidebarMobile = document.querySelector('.mobile-sidebar');
const sidebarNav = document.querySelector('.sidebar-section');
const overlaySidebar = document.querySelector('.mobile-overlay');

sidebarMobile.addEventListener('click',() => {
    sidebarNav.classList.add('show');
    overlaySidebar.classList.add('show');
});

overlaySidebar.addEventListener('click', () => {
    sidebarNav.classList.remove('show');
    overlaySidebar.classList.remove('show');
})