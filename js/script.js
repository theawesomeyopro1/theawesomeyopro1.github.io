
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

fetch("https://raw.githubusercontent.com/theawesomeyopro1/theawesomeyopro1/main/README.md")
  .then(response => response.text())
  .then(data => {
    document.getElementById("bio").textContent = data;
  })
  .catch(err => {
    console.error("Failed to fetch README bio:", err);
    document.getElementById("bio").textContent = "Could not load bio.";
  });
