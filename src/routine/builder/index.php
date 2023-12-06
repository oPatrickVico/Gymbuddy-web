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
  <script src="builder/script.js" defer>
  </script>
</head>

<body>
  <h1>
    <label for="routineName">
      Routine: &nbsp;
      <input type="text" name="routineName"
        id="routineName" />
    </label>
  </h1>
  <main id="ExerciseList">
    <ul id="definedExercises"></ul>
    <form action="" id="newExerciseForm">
      <label for="newExerciseInput">
        Nome: &nbsp;
        <input type="text" name="exerciseName" required
          id="newExerciseInput" />
      </label>
      <label for="maxRepInput">
        Max Rep: &nbsp;
        <input type="number" name="maxRep" id="maxRepInput"
          required min="0" />
      </label>
      <button class="btn btn-secondary" type="submit">
        Add
      </button>
    </form>
  </main>
</body>

</html>