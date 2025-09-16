document.getElementById("ano").textContent = new Date().getFullYear();

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Formulário enviado!");
});

