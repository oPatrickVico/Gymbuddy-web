<?php

namespace Model;

class RoutineModel extends BaseModel { 
  
  public function __construct() {
    BaseModel::__construct();
  }

  /**
   * @param string $routineName
   * @param string $weekdays
   * @return int $routineId
   */
  private function createRoutine(string $routineName, string $weekdays){
    $sql = "INSERT INTO routines_v0 (weekDays, routineName) VALUES (?, ?);";

    $prepared = $this->db->prepare($sql);
    $prepared->bindParam(1, $weekdays);
    $prepared->bindParam(2, $routineName);
    $prepared->execute();
    
    return $this->db->lastInsertId();
  }
}