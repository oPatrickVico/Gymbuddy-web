<?php 
$routineName = "Routine Name!";

function echoCard(string $exerciseName, int $exerciseCap) {
  echo "
    <article class=\"card flex-grow-0 my-card p-3\">
    <h2>$exerciseName</h2>
    <label>Set 1 <input type=\"number\" min=\"0\" value=\"0\" max=\"$exerciseCap\" /></label>
    <label>Set 2 <input type=\"number\" min=\"0\" value=\"0\" max=\"$exerciseCap\" /></label>
    <label>Set 3 <input type=\"number\" min=\"0\" value=\"0\" max=\"$exerciseCap\" /></label>
    </article>
    ";
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0">
  <title><?php echo $routineName . " — Routine"?></title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossorigin="anonymous">
  <style>
  :root {
    font-size: 14px;
  }

  body {
    background-color: #90eeff;
  }

  .my-card {
    --scale: 5.5;
    width: calc(var(--scale) * 3rem);
    height: calc(var(--scale) * 4rem);
  }
  </style>
</head>

<body>
  <?php echo "<h1>" . $routineName . "</h1>"; ?>
  <main
    class="container-xxl vh-100 d-flex flex-wrap align-content-start gap-3 p-3">
    <?php for ($i=0; $i < 5; $i++) { 
      echoCard("Exercise" . $i, 12);
    }?>
  </main>
</body>

</html>