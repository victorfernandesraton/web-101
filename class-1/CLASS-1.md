---
title: 'Introdução ao Desenvolvimento Web'
description: 'Da ARPANET à Web 2.0'
date: 2024-10-22T20:21:00-03:00
marp: true
autoscale: true
paginate: true
class: invert
---

# Hello Mundo!
```json
{
    "Nome": "Victor Raton",
    "Nascimento": "1999-04-16T00:00:00-03:00",
    "Profissão": "Reclemão no tempo livre, Desenvolvedor nas demais horas",
    "Hardskill": ["Web", "Mobile", "IoT", "Cloud", "Linux (BTW)"],
    "Website": "https://vraton.dev"
}
```
---

# Introdução ao Desenvolvimento Web
## Da ARPANET à Web 2.0

---
# Sumário 

- A História até aqui:
    - ARPANET
    - Internet
    - Web (Word Wide Web)
    - Cliente e servidor
- A web moderna:
    - HTTP
    - HTML
    - JavaScript (que não é Java)

---
# A história até aqui
## Do mato aos anos 90
---
# ARPANET 
A **ARPANET (Advanced Research Projects Agency Network)** foi um projeto do Departamento de defesa dos EUA criado por volta de 1969 com o intútio de criar uma rede de dispositivos conectados entre redes diferentes.
- O intuíto era ter um sistema de comunicação militar sofisticado
- Nos anos 70 e 80 foi adotado o protocolo *TCP/IP*
---

# TCP e UDP
![img center](./TCP-UDP-2.png)

---

# Internet 
- A rede global de computadores, filha da antiga *ARPANET* mas com algumas inovações que viabilizaram esta além do mundo militar para algo mais comercial.
- É a **infraestrutura** tecnológica para o fornecimento de serviços, entre eles a *WEB*

---
# Web (Word Wide Web)
Criada por [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) (esse cara é importante) em 1989 quando era pesquisador do CERN
- Objetivo de ser uma forma de uso generalista da internet.
- **Curiosidade:** A proposta inicial era para compartilhamento de trabalhos entre cientistas, uma "Wikipedia" antes da Wikipedia 

---
# Cliente e servidor
## Do seu navegador à Cloud
---
# Cliente 
- Software usado pelos usuários para acessar a web.
- Entende os bits e bytes e os transforma em páginas, imagens, vídeos e outros tipos de conteúdo.
- A web possui muitos *protocolos*, mas o que te permite acessar **websites** é o **HTTP (guardem esse nome)**.
- Ex: Chrome, Firefox, Safari, Edge, Curl, wget, etc.
---
# Servidor
- Um "computador" capaz de dispor aquilo que o *cliente* pediu
- Possui inúmeras formas e arquiteturas para diferentes objetivos.
- Análogo ao "Google, Meta(Facebook)" e demais empresas.

> Nem todo cliente é um servidor, mas todo servidor é um cliente em potencial
>
> Eu
---


# Links, Hiperlinks e URL's:
- ~~Personagem do Zelda.~~
- URLs (Uniform Resource Locator): Endereços usados para localizar documentos na web.
- Hiperlinks (Hyperlinks): Links que te permitem acessar outras paíginas da web.

---
# A web moderna
## Aplicações, Internet Banking , o universo e tudo mais.
---

# HTTP
- HTTP (Hypertext Transfer Protocol) é o protocolo de comunicação usado na Web para transferir dados entre o cliente (navegador) e o servidor.
- Transportar dados de forma simples, segura e padronizada
- Os navegadores são "burros" e apenas entendem "texto".
- HTTPS é a versão protegida do HTTP, significa que apenas o cliente e o servidor sabem o que é enviado e recebido, mas não se engane, SITES FALSOS E PHISHING podem ser HTTPS.
História:
- Proposto por: Tim Berners-Lee junto com a web, em 1991.
---
# As versões do HTTP:
1. HTTP/1.0: Primeira versão formal, lançada em 1996.
2. HTTP/1.1: Lançada em 1997, sendo amplamente utilizada até recentemente.
3. HTTP/2 (2015): Maior eficiência na transmissão de dados.
4. HTTP/3 (2020): Implementação mais moderna, baseada no protocolo QUIC, para melhorar desempenho.
---
# Então... 

- A internet é a infraesttrutura para o fornecimento de serviços.
- A Web é o serviço que funciona nesta infraesttrutura.
- O HTTP é o protocolo em texto que o serviço da Web usa para transferir dados.
- O navegador é quem "pede" e o servidor é quem "responde".
- Você é o "usuário" (até agora)
---
# O HTML
HTML (HyperText Markup Language) é a linguagem usada para estruturar e apresentar conteúdo na web.
- Uma estrutura em texto que remete a uma `árvore`
- Proposto por: Tim Berners-Lee, em 1991.
    - Criar uma linguagem simples para estruturar documentos e criar links entre eles, facilitando a navegação entre páginas.
    - Diferenciar tipos de conteúdio para o navegador saber como exibir.
---
# Versões do HTML
- HTML 2.0 (1995): Primeira padronização.
- HTML 4.01 (1999): Ampliou o suporte multimídia e interatividade.
    - Imagens, Tabelas e afins
- HTML5 (2014): Introduziu novos elementos para multimídia, APIs e semântica melhorada.
    - Videos, Iframes e afins
---
# O que é CSS?
CSS (Cascading Style Sheets) é a linguagem usada para definir o estilo visual e layout das páginas web.

- Proposto por: Håkon Wium Lie em 1994.
- Separar o conteúdo (HTML) da apresentação (estilo), permitindo que os desenvolvedores mantenham melhor o design de páginas web.
- Cores, tamanhos, fontes e tudo que não é neessáriamente estruturado
- Utiliza localizadores como `#id`, `.classes` e `nomes` de elementos HTML.
---
# Versões do CSS
CSS1 (1996): Primeira especificação.
CSS2 (1998): Maior controle sobre layouts.
CSS3 (2001+): Introduziu módulos com funcionalidades avançadas (transições, animações, gradientes, etc.).

---
# O que é JavaScript?
- Não é o Java (não pague mico).
ERA uma linguagem de programação que permite adicionar interatividade e comportamento dinâmico às páginas web.
- É hoje uma especificação embutida nos navegadores que permite que esses façam quaisquer coisa, até bluetooth ele consegue usar
- Criado por Brendan Eich (supostamente em 5 dias), enquanto trabalhava na Netscape, em 1995.
---
# A padronização do javascript
- Antes da padronização ECMAScript, cada um fazia do seu jeito, famosos sites: "Funciona melhor no Netscape" e "Funciona melhor no IE"
    - Site da Xenia (mascote alternativo do Linux) em [https://xenia-linux-site.glitch.me/](https://xenia-linux-site.glitch.me/)
    - Pesadelos como JScript e SilverLight
---
# Versões do JavaScript (ECMAScript)
- ECMAScript 1 (1997): Primeira padronização do JavaScript.
- ECMAScript 5 (2009): Melhorias significativas.
- ECMAScript 6 (2015): Grande evolução com introdução de classes, arrow functions, entre outras funcionalidades modernas.
- E mais...
---

# Então...

- O HTML é o texto esqueleto que o navegador usa para compreender o conteúdo na web.
- O CSS é a linguagem usada para definir o estilo visual e layout das páginas web, ou seja, a pele, os cabelos e a roupa da web.
- O JavaScript é a linguagem usada para adicionar interatividade e comportamento dinâmico às páginas web, sendo assim os músculos e sistemas sanguíneo que permite que as aplicações se movimentem
---
# Exemplos
- Site dos SpaceJAM de 1995-1996: https://www.spacejam.com/1996/jam.html
- Portifolio Makemepulse: https://2019.makemepulse.com/ 

---
# Fim da apresentação
## Obrigado pela atenção!

---
<style scoped>
section {
font-size: small;
}
</style>
# Referências
1. Wikipedia. (n.d.). *ARPANET*. Disponível em: [https://en.wikipedia.org/wiki/ARPANET](https://en.wikipedia.org/wiki/ARPANET) (consultado em 25 de outubro de 2024).
2. Wikipedia. (n.d.). *Internet*. Disponível em: [https://en.wikipedia.org/wiki/Internet](https://en.wikipedia.org/wiki/Internet) (consultado em 25 de outubro de 2024).
3. Wikipedia. (n.d.). *HTTP*. Disponível em: [https://en.wikipedia.org/wiki/HTTP](https://en.wikipedia.org/wiki/HTTP) (consultado em 25 de outubro de 2024).
4. Wikipedia. (n.d.). *HTML*. Disponível em: [https://en.wikipedia.org/wiki/HTML](https://en.wikipedia.org/wiki/HTML) (consultado em 25 de outubro de 2024).
5. Wikipedia. (n.d.). *Cascading Style Sheets*. Disponível em: [https://en.wikipedia.org/wiki/Cascading_Style_Sheets](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) (consultado em 25 de outubro de 2024).
6. Wikipedia. (n.d.). *JavaScript*. Disponível em: [https://en.wikipedia.org/wiki/JavaScript](https://en.wikipedia.org/wiki/JavaScript) (consultado em 25 de outubro de 2024).

