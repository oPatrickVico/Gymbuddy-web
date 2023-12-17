<?php

/**
 * THIS IS HIGHLY EXPERIMENTAL
 * 
 * Many things are missing:
 * 
 *  - What if I can create the routine, but not one of the exercises? If one thing fails, all should fail
 *  - Is this safe at all?
 *  - What refactoring and abstractions can I perform here?
 *  - What if you already have a routine of the same name?
 * 
 * But it is fine for a noob: execept we aren't noobs!
 */

require_once __DIR__ ."/../../vendor/autoload.php";

use Model\Exercise;
use Model\Routine;

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

$newRoutineId = null;

try {
  $routineName = test_input($_POST["routineName"]);
  $weekdays = test_input(join($_POST["weekdays"], ''));
  $newRoutineId = Routine::create($routineName, $weekdays);
} catch (Exception $e) {
  echo ''. $e->getMessage() .'';
}

if ($newRoutineId != 0 && !$newRoutineId) {
  echo "something went wrong";
}

try {
  foreach ($_POST as $key => $value) {
  if (substr($key, 0, 2) == 'ex') {
    $exerciseName = test_input($value["exerciseName"]);
    $maxRep = test_input($value["maxRep"]);
    $initialWeight = test_input($value["initialWeight"]);
    $setNumber = test_input($value["setNumber"]);
    $exerciseId = Exercise::create($exerciseName, $newRoutineId, $maxRep, $initialWeight,  $setNumber);
  }
}
} catch (Exception $e){
  echo "". $e->getMessage() ."";
  die();
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0">
  <title>Routine Created!</title>
</head>

<body>
  <h1>Routine Created!</h1>
  <p>
    <a href="/">Go back home.</a>
  </p>
</body>

</html>