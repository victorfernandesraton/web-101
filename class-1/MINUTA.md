# Desenvolvimento de uma aplicação web

## Objetivo

Apresentar os conceitos básicos de desenvolvimento web usando HTML, CSS e
JavaScript, culminando na criação de uma aplicação simples de agenda.

## Minuta

### Introdução

**Duração**: 7 minutos

Apresentação de slides introduzindo o que é web e internet, e seus componentes

1. ARPANET

- Apresentar os fundamentos da ARPANET
- TCP e UDP

2. Internet

- Apresentar o conceito da internet como infraestrutura

3. World Wide Web

- Quem criou
- Apresentar o conceito da Web como um serviço sobre a internet

4. Cliente

- Definir quem é o cliente quando se fala de web

5. Servidor

- Definir quem é o servidor quando se fala de web

6. HTTP

- O que é o protocolo HTTP
- Versões do HTTP

7. HTML

- O que é HTML
- Versões do HTML

8. CSS

- O que é CSS
- Versões do CSS

9. JavaScript

- O que é JavaScript
- Versões do JavaScript

### Desenvolvimento de um webapp

**Duração**: 7 minutos

Criar uma aplicação web para armazenar eventos na agenda

#### Criando um servidor

- Usando golang para criar um servidor http simples que apenas irá servir nossa
  página.
- Possuirá duas rotas:
  - index.html onde teremos a nossa agenda de eventos
  - about.html onde teremos informações sobre o projeto
  - arquivos de asset podem ser incluídos na página desde que estes existam na
    pasta `/assets`

O servidor já foi compilado previamente, mas para os curiosos, eis aqui nossa
implementação em golang , que se encontra no arquivo
[agenda/main.go](./agenda/main.go)

```go
package main

import (
	"flag"
	"log"
	"net/http"
)

func main() {
	// Define um argumento de linha de comando para a porta
	port := flag.String("port", "8080", "porta em que o servidor irá rodar")
	flag.Parse()

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "index.html")
	})

	http.HandleFunc("/about", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./about.html")
	})
	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("OK"))

	})

	// Serve static files (CSS, JS)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

	log.Printf("Servidor rodando em http://localhost:%s\n", *port)
	log.Fatal(http.ListenAndServe(":"+*port, nil))
}
```

#### Criando nossas primeiras páginas

Vamos adicionar o template básico de uma página HTML5, mas adicionando o idioma
como `pt-BR`

```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Agenda</title>
        <link href="css/style.css" rel="stylesheet" />
    </head>

    <body></body>
</html>
```

- O html é estruturado por meio de tags.
- é obrigatório incluir o `<!DOCTYPE html>` para que o navegador possa entender
  o html.
- a tag `html` é obrigatória para que o navegador consiga entender o html, bem
  como definir propriedades como idioma
- a tag `head` é onde ficam os metadados (em tags `meta`) da nossa página, como
  o charset e o viewport , que são usados para definir respectivamente o tipo de
  caracteres que a página possui (UTF-8 suporta coisas como: `ã`, `ç` e afins)
- O título e coisas como link preview são adicionados como metadados tanbém,
  sendo o `title` o que aparece na barra de tarefas do navegador
- o `link` é usado para adicionar links de arquivos CSS, arquivos JS e arquivos
  de imagem no pré-carregamento da página
- A tag `body` é onde ficam os conteúdos da página.

Agora vamos adicionar algumas coisas nessa página, primeiro uma introdução
rápida do nosso app, usando a tag `h1` para o título com o valor agenda, e uma
tag `p` para sinalizar um parágrafo textual

Ficará mais ou menos assim:

```html
<h1>Agenda</h1>
<p>
    Seja bem-vindo ao nosso app de agenda, onde podemos marcar uma tarefa a ser
    executada em uma data
</p>
```

Agora vamos adicionar um formulário para poder adicionar tarefas e as tarefas
serão armazenadas no `localStorage` do navegador, um tipo de memória que podemos
usar para dados nos nossos webapps, muito comun para armazenar preferências de
usuário como idioma das páginas e se está no modo escuro.

Primeiro nosso esqueleto de formulário, teremos dois campos, um para o título da
tarefa e outro para a data e hora da tarefa, o primeiro será um input do tipo
texto e o segundo um `datetime-local` nativo do navegador

Teremos o botão de envio adicionado pelo type `submit`, mas podemos adicionar
botões como limpar usando o button

```html
<form id="task-form">
    <input name="task" type="text" placeholder="Tarefa" />
    <input name="date" type="datetime-local" placeholder="Data e hora" />
    <input type="submit" value="Adicionar" />
</form>
```

Por fim vamos adicionar uma `div` , uma caixa vazia para futuramente carregarmos
as tarefas

```html
<div id="tasks-list"></div>
```

É muito importante lembrar de adicionar o `id` nos elementos de forma que sejam
únicos, para podermos no futuro identificar e interagir com elementos em nossa
página.

#### Hora da armonização facial

Vamos estilizar um pouco , pois nosso formulário está bem feio, vamos
centralizar o nosso conteúdo em uma caixa para ficar mais amigavél ao mobile,
além disso vamos fazer os inputs um em baixo do outro

Vamos criar um arquivo `style.css` para estilizar o nosso projeto inteiro, e
carregar este no arquivo `index.html`

Neste arquivo de estilo vamos começar definindo propriedades pro body para
centralizar as coisas:

```css
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

Agora vamos carregar os estilos ajustando a url do link, modificando o link
para:

```html
<link href="static/style.css" rel="stylesheet" />
```

Ao salvar o arquivo e recarregar a página home, você verá as coisas
centralizadas agora.

Por fim vamos estilizar o nosso formulário, reeditando todo o arquivo +- assim:

```CSS
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#task-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90%;
    width: 400px;
    gap: 10px;
}

input {
    width: 100%;
    border: 1px solid #000;
    border-right: 5px solid #000;
    border-bottom: 5px solid #000;
    padding: 10px;
}

input[type="submit"] {
    color: white;
    background-color: blue;
}

div#tasks-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90%;
    width: 400px;
    gap: 10px;
    border: 1px solid #000;
    border-right: 5px solid #000;
    border-bottom: 5px solid #000;
    min-height: 200px;
}
```

- Representamos cores nornmalmente com valores hexadecimais como `#000`, ou com
  nomes como `blue` e `white`.
- Podemos combinar seletores, como no caso do botão `input[type="submit"]`, que
  vai ter a cor branca e o fundo azul, pois alteramos o estilo apenas para
  inputs do tipo submit
- Podemos usar seletores combinando componente + id como no caso do
  `div#tasks-list`, que fizermos ser uma caixa branca vazia

#### Fazendo funcionar

Vamos criar um arquivo `script.js` para fazer o nosso app funcionar, nele
adicionaremos funcionalidades javascript.

Nessa etapa usaremos bastante JSON (JavaScript Object Notation) para criar o
nosso `localStorage` e `tasks` para armazenar as tarefas e a data de cada
tarefa.

O que vamos fazer agora é ler os dados do formulário ao ser apertado o botão de
envio, e adicionar uma nova tarefa na lista de tarefas.

No arquivo [static/script.js](./static/script.js) vamos adicionar o seguinte:

```javascript
function envioFormulario(event) {
    event.preventDefault();

    const task = document.querySelector('input[name="task"]').value;
    const date = document.querySelector('input[name="date"]').value;
    const tarefaItem = { task, date };
    console.log(tarefaItem);
}
```

Isto é apenas uma função javascript que:

- Recebe um evento de formulaário como argumento
- Cancela esse evento
- Pega o valor do input de tarefa e da data usando a propriedade nome
- Cria um objeto com esses valores
- Imprime esse objeto no console

O mais importante é o uso do `querySelector` para selecionar o input de tarefa e
o `value` para obter o valor do input.

Uma forma alternativa seria pegar apenas o form e seus valores usando o
`event.target` e `event.target.value`

> **Dica**: Ao trabalhar no navegador podemos usar ferramentas que este mesmo
> disponibiliza, podemos clicar no menu do navegador -> Mais Ferramentas ->
> Ferramentas de desenvolvimento, ou em navegadores como chrome, firefox , edge,
> opera e afins usar o atalho `Ctrl+Shift+i`

Ao inspesionar o navegador ao enviar o formulário com dados aparecerá no console
os dados em json da tarefa com o título e a data, para evitar erros,
adicionaremos a propriedade required=true em ambos os campos para evitar envio
de dados vazios.

```html
<input name="task" type="text" placeholder="Tarefa" required />
<input name="date" type="datetime-local" placeholder="Data e hora" required />
```

Dessa forma ao tentar enviar o formulário com campos vazios aparece um aviso e
impede o envio

Agora vamos fazer uma função que adiciona uma tarefa no `localStorage`, além
disso, vamos gerar o ID aleatório para cada tarefa.

nosso script ficará mais ou menos assim:

```javascript
function envioFormulario(event) {
    event.preventDefault();

    const form = document.querySelector("form");
    const task = document.querySelector('input[name="task"]').value;
    const date = document.querySelector('input[name="date"]').value;
    const tarefaItem = { task, date };

    console.log(tarefaItem);
    adicionarTarefa(tarefaItem);
    form.reset();
}

function adicionarTarefa(tarefaItem) {
    const id = new Date().getTime();
    const tarefa = { id, ...tarefaItem };
    localStorage.setItem(id, JSON.stringify(tarefa));
}
```

Ao inspencionar no navegador nas ferramentas de desenvolvedor, na Aba
Applications, no Local Storage, teremos as tarefas que foram adicionadas

Estamos quase lá, agora falta carregar os itens criados toda vez que abrimos a
página ou submetermos o valor, vamos agora adicionar a função que renderiza
tarefas, bem como que deleta tarefas, assim ccomo vamos usar tanbém um
`eventListerner` para carregar as tarefas na página

```javascript
function envioFormulario(event) {
    event.preventDefault();

    const form = document.querySelector("form");
    const task = document.querySelector('input[name="task"]').value;
    const date = document.querySelector('input[name="date"]').value;
    const tarefaItem = { task, date };

    console.log(tarefaItem);
    adicionarTarefa(tarefaItem);
    form.reset();
    renderTarefas();
}

function adicionarTarefa(tarefaItem) {
    const id = new Date().getTime();
    const tarefa = { id, ...tarefaItem };
    localStorage.setItem(id, JSON.stringify(tarefa));
}

function renderTarefas() {
    const tarefas = document.querySelector("#tasks-list");
    tarefas.innerHTML = "";
    const ids = Object.keys(localStorage);

    for (const id of ids) {
        const tarefa = JSON.parse(localStorage.getItem(id));
        const textoData = formatarData(tarefa.date);
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

function formatarData(data) {
    return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "full",
        timeStyle: "long",
        timeZone: "America/Bahia",
    }).format(new Date(data));
}

window.addEventListener("load", renderTarefas);
```

Nesse script tanbém usamos o módulo de internacionalização `Intl.DateTimeFormat`
para formatar a data e hora com base no fuso horário da Bahia (meu estado) na
função `formatarData`. Por fim vamos adicionar alguns estilos e voualá

```css
.task-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
}

.actions {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
}

.delete {
    color: white;
    background-color: red;
    border: 1px solid #000;
    border-right: 5px solid #000;
    border-bottom: 5px solid #000;
    padding: 10px;
}
```
