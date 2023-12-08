# Dia 02

Me deparei com um problema de roteamento.
Desejo ter uma expriencia de cliente melhor, mas não quero criar elementos script enorme. Incluir um script externo é uma boa.

Além disso, existem três rotas conceitualmente relacionadas:

1. Routine viewer
2. Routine builder
3. Routine manager

Deveria criar um diretório `Routine`?
Deveria criar um subdiretório para cada recurso?

Como cada recurso terá seu script, decidi seguir dizer sim para as duas perguntas.

Qualquer pedaço de código que esteja compartilhado por todos os scripts irá para um script global a ser requisitado por todas as páginas que o precisam dele.

---

Estou tentando aplicar OOP. Criei a classe DefinedExercises, para controlar os exercícios adicionados, removidos ou movidos do local inicial

# Dia 03

HTML dinâmico é bem complicado com a API básica atual. Não conheço o suficiente sobre webcomponents, então buscarei uma library para facilitar meu trabalho. Usarei a `htm` que usa `template literals` para criar elementos de dom.

---

Acontece que não sei como usar aquela library. Pensei em usar o DOMParser ou innerHTML, mas não sei se é uma boa...

Provavelmente deveria criar uma aplicação React\Preact...

# Dia 04

Do it full vanilla. Why? Because I want to see what the pure PHP + pure JavaScript experience is. Later I will use Laravel and React.

---

I will use innerHTML. The client is inherently untrustworthy and all what matters is what gets sent to the server. That is PHP land, not JavaScript.

The data being input is not sensitive enough for me to worry about security too deeply. Not worrying about security lets me move faster and complete the project sooner.

Therefore, in this case, innerHTML manipulation is great.

---

I learned how to use importing on basic broswer javascript: just make sure to type the script tag with module and import the correct relative name path, and you are good to go!
