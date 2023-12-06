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

Estou tentando aplicar OOP. Criei a classe DefinedExercises, para controlar os exercícios adicionados, removidos ou movidos do local inicial.