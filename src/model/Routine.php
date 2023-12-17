<?php

namespace Model;

class Routine extends Base {
  static public function create(string $routineName, string $weekdays){
    try {
      $db = Base::getDatabase();
      $sql = "INSERT INTO routines_v0 (weekDays, routineName) VALUES (?, ?);";
      
      $prepared = $db->prepare($sql);
      $prepared->bindParam(1, $weekdays);
      $prepared->bindParam(2, $routineName);
      $prepared->execute();
      
      return $db->lastInsertId();
    } catch (\Exception $e) {
      throw new \Exception($e->getMessage());
    }
  }
}