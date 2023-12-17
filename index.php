<?php 

try {
  require_once "vendor/autoload.php";
} catch (Exception $e) {
  echo $e->getMessage() ;
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0">
  <title>Gymbuddy</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossorigin="anonymous">
</head>

<body>
  <nav>
    <ul>
      <a href="src/view/routine/manager">
        <li>Routine Manager</li>
      </a>
      <a href="src/view/routine/viewer">
        <li>Routine Viewer</li>
      </a>
      <a href="src/view/routine/editor">
        <li>Routine Editor</li>
      </a>
    </ul>
  </nav>
</body>

</html>