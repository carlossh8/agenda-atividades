document.getElementById("form-cadastro").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const atividade = {
      id: Date.now(),
      titulo: document.getElementById("titulo").value,
      data: document.getElementById("data").value,
      tipo: document.getElementById("tipo").value,
      local: document.getElementById("local").value,
    };
  
    const atividades = JSON.parse(localStorage.getItem("atividades")) || [];
    atividades.push(atividade);
    localStorage.setItem("atividades", JSON.stringify(atividades));
  
    alert("Atividade cadastrada com sucesso!");
    this.reset();
  });
  