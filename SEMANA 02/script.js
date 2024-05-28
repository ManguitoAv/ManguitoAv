const toggleSwitch = document.getElementById('toggleSwitch');
const body = document.body;
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');

toggleSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode', toggleSwitch.checked);
    sidebar.classList.toggle('dark-mode', toggleSwitch.checked);
    toggleSidebarBtn.classList.toggle('dark-mode', toggleSwitch.checked);
});

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hide');
    if (sidebar.classList.contains('hide')) {
        content.style.marginLeft = '0';
    } else {
        content.style.marginLeft = '250px';
    }
});
