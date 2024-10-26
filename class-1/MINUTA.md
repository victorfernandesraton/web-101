# Desenvolvimento de uma aplicação web

## Objetivo
Apresentar os conceitos básicos de desenvolvimento web usando HTML, CSS e JavaScript, culminando na criação de uma aplicação simples de agenda.


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

- Usando golang para criar um servidor http simples que apenas irá servir nossa página.
- Possuirá duas rotas:
    - index.html onde teremos a nossa agenda de eventos
    - about.html onde teremos informações sobre o projeto
    - arquivos de asset podem ser incluídos na página desde que estes existam na pasta `/assets`

O servidor já foi compilado previamente, mas para os curiosos, eis aqui nossa implementação em golang , que se encontra no arquivo [agenda/main.go](./agenda/main.go)
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

Vamos adicionar o template básico de uma página HTML5, mas adicionando o idioma como `pt-BR`

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Agenda</title>
    <link href="css/style.css" rel="stylesheet">
</head>

<body>

</body>

</html>
```

- O html é estruturado por meio de tags.
- é obrigatório incluir o `<!DOCTYPE html>` para que o navegador possa entender o html.
- a tag `html` é obrigatória para que o navegador consiga entender o html, bem como definir propriedades como idioma
- a tag `head` é onde ficam os metadados (em tags `meta`) da nossa página, como o charset e o viewport , que são usados para definir respectivamente o tipo de caracteres que a página possui (UTF-8 suporta coisas como: `ã`, `ç` e afins)
- O título e coisas como link preview são adicionados como metadados tanbém, sendo o `title` o que aparece na barra de tarefas do navegador
- o `link` é usado para adicionar links de arquivos CSS, arquivos JS e arquivos de imagem no pré-carregamento da página
- A tag `body` é onde ficam os conteúdos da página.

Agora vamos adicionar algumas coisas nessa página, primeiro uma introdução rápida do nosso app, usando a tag `h1` para o título com o valor agenda, e uma tag `p` para sinalizar um parágrafo textual

Ficará mais ou menos assim:

```html
<h1>Agenda</h1>
<p>Seja bem-vindo ao nosso app de agenda, onde podemos marcar uma tarefa a ser executada em uma data</p>
```

Agora vamos adicionar um formulário para poder adicionar tarefas e as tarefas serão armazenadas no `localStorage` do navegador, um tipo de memória que podemos usar para dados nos nossos webapps, muito comun para armazenar preferências de usuário como idioma das páginas e se está no modo escuro.

Primeiro nosso esqueleto de formulário, teremos dois campos, um para o título da tarefa e outro para a data e hora da tarefa, o primeiro será um input do tipo texto e o segundo um `datetime-local` nativo do navegador

Teremos o botão de envio adicionado pelo type `submit`, mas podemos adicionar botões como limpar usando o button
```html
<form id="task-form">
    <input name="task" type="text" placeholder="Tarefa">
    <input name="date" type="datetime-local" placeholder="Data e hora">
    <input type="submit" value="Adicionar">
</form>
```
Por fim vamos adicionar uma `div` , uma caixa vazia para futuramente carregarmos as tarefas
```html
<div id="tasks-list"></div>
```

