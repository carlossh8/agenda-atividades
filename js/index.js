function carregarAtividades() {
    const atividades = JSON.parse(localStorage.getItem("atividades")) || [];
    const container = document.getElementById("calendar-container");
  
    atividades.forEach((atividade) => {
      const div = document.createElement("div");
      div.classList.add("atividade");
      div.innerHTML = `
        <h3>${atividade.titulo}</h3>
        <p><strong>Data:</strong> ${atividade.data}</p>
        <p><strong>Tipo:</strong> ${atividade.tipo}</p>
        <p><strong>Local:</strong> ${atividade.local}</p>
      `;
      container.appendChild(div);
    });
  }
  
  carregarAtividades();
  