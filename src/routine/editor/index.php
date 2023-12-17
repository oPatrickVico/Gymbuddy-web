<?php ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0">
  <title>Routine Builder</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossorigin="anonymous">
  <script type="module" src="editor/script.js" defer>
  </script>
</head>

<body>
  <form action="" method="POST" id="newRoutineForm">
    <h1>
      <label for=" routineName">
        Routine: &nbsp;
        <input type="text" name="routineName"
          id="routineName" required />
      </label>
    </h1>
    <main id="ExerciseList">
      <table class="container-fluid">
        <thead>
          <tr>
            <th>Exercício</th>
            <th>Peso initial (kg)</th>
            <th>Número de Sets:</th>
            <th>Reps Totais</th>
            <th>Operações</th>
          </tr>
        </thead>
        <tbody id="definedExercises"></tbody>
      </table>
      <button class="btn btn-secondary" type="button"
        id="addExerciseButton">Add
        Exercise</button>
      <button class="btn btn-primary" type="submit">Save
        Routine</button>
    </main>
  </form>
</body>

</html>