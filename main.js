// Arquivo para código javascript

const API_URL= "https://6a29e976f59cb8f65f1dc461.mockapi.io/:endpoint"

function setFeedback(msg, type = "info") {
    const el = document.getElementById("feedback");
    el.textContent = msg;
    el.classname = `feedback ${type}`;
}

function renderMateriais(materiais) {
    const tbody = document.getElementById("lista-materiais");
    tbody.innerHTML = "";
    
    if (!materiais || materiais.length ===0) {
        tbody.innerHTML = `<tr class="empty-row"><td colspan="3"> nenhum material cadastrado.</td></tr>`;
        return;
    }

    materiais.forEach((m, i) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td> ${i + 1}</td>
            <td>${m.nome ?? m.name ?? "-"}</td>
            <td>${m.quantidade ?? m.quantity ?? "-"}</td>
            `;
            tbody.appendChild(tr);
    });
}
