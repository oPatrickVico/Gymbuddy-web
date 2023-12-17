<?php

namespace Model;

class ExerciseModel extends BaseModel {
  public function __construct() {
    parent::__construct();
  }

  public function createExercise(array $data) {
    $sql = "INSERT INTO exercises_v0 (exerciseName, routine_id, setNumber, maxRep, initialWeight) VALUES (?, ?, ?, ?, ?);";

    $prepared = $this->db->prepare($sql);
    $prepared->bindParam(1, $data["exerciseName"]);
    $prepared->bindParam(2, $data["routine_id"]);
    $prepared->bindParam(3, $data["setNumber"]);
    $prepared->bindParam(4, $data["maxRep"]);
    $prepared->bindParam(5, $data["initialWeight"]);
    $prepared->execute();
    
    return $this->db->lastInsertId();
  }
}