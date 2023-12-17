<?php

namespace Model;

class Exercise extends Base {
  static public function create(string $exerciseName, int $routineId, string $maxRep, string $initialWeight, string $setNumber) {
    try {
      $db = Base::getDatabase();
      $sql = "INSERT INTO exercises_v0 (exerciseName, routine_id, setNumber, maxRep, initialWeight) VALUES (?, ?, ?, ?, ?);";
      
      $prepared = $db->prepare($sql);
      $prepared->bindParam(1, $exerciseName);
      $prepared->bindParam(2, $routineId);
      $prepared->bindParam(3, $setNumber);
      $prepared->bindParam(4, $maxRep);
      $prepared->bindParam(5, $initialWeight);
      $prepared->execute();
    
      return $db->lastInsertId();
    } catch (\Exception $e) {
      throw new \Exception($e->getMessage());
    }
  }
}