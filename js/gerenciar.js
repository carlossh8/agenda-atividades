function carregarAtividades() {
    const atividades = JSON.parse(localStorage.getItem("atividades")) || [];
    const container = document.getElementById("lista-atividades");
    container.innerHTML = "";
  
    atividades.forEach((atividade, index) => {
      const div = document.createElement("div");
      div.classList.add("atividade");
      div.innerHTML = `
        <h3>${atividade.titulo}</h3>
        <p><strong>Data:</strong> ${atividade.data}</p>
        <p><strong>Tipo:</strong> ${atividade.tipo}</p>
        <p><strong>Local:</strong> ${atividade.local}</p>
        <button onclick="editarAtividade(${atividade.id})">Editar</button>
        <button onclick="excluirAtividade(${atividade.id})">Excluir</button>
      `;
      container.appendChild(div);
    });
  }
  
  function excluirAtividade(id) {
    let atividades = JSON.parse(localStorage.getItem("atividades")) || [];
    atividades = atividades.filter((a) => a.id !== id);
    localStorage.setItem("atividades", JSON.stringify(atividades));
    carregarAtividades();
  }
  
  function editarAtividade(id) {
    const atividades = JSON.parse(localStorage.getItem("atividades")) || [];
    const atividade = atividades.find((a) => a.id === id);
    const novoTitulo = prompt("Novo título:", atividade.titulo);
    if (novoTitulo !== null) {
      atividade.titulo = novoTitulo;
      localStorage.setItem("atividades", JSON.stringify(atividades));
      carregarAtividades();
    }
  }
  
  carregarAtividades();
  