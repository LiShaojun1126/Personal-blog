const btn = document.getElementById("modelToggle");
const body = document.body;

//saved theme

const saveTheme = localStorage.getItem("theme");
if(saveTheme === "dark") {
    body.classList.add("dark-mode")
}

btn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});