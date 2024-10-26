function envioFormulario(event) {
    event.preventDefault();

    const form = document.querySelector('form');
    const task = document.querySelector('input[name="task"]').value;
    const date = document.querySelector('input[name="date"]').value;
    const tarefaItem = {task, date};

    console.log(tarefaItem);
    adicionarTarefa(tarefaItem);
    form.reset();
    renderTarefas();
}

function adicionarTarefa(tarefaItem) {
    const id = new Date().getTime();
    const tarefa = {id, ...tarefaItem};
    localStorage.setItem(id, JSON.stringify(tarefa));
}

function renderTarefas() {
    const tarefas = document.querySelector('#tasks-list');
    tarefas.innerHTML = '';
    const ids = Object.keys(localStorage);

    for (const id of ids) {
        const tarefa = JSON.parse(localStorage.getItem(id));
        const textoData = new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'full',
            timeStyle: 'long',
            timeZone: 'America/Bahia',
          }).format(new Date(tarefa.date));
        tarefas.innerHTML += `
        <div class="task-item">
            <div class="content">
                <strong>#${tarefa.id}</strong>
                <p>${tarefa.task}</p>
                <p>${textoData}</p>

            </div>
            <div class="actions">
                <button onclick="deletarTarefa(${tarefa.id})" class="delete">Deletar</button>
            </div>
        </div>
        `;
    }
}

function deletarTarefa(id) {
    localStorage.removeItem(id);
    renderTarefas();
}

window.addEventListener('load', renderTarefas);
