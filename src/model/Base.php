<?php

namespace Model;
require_once __DIR__ . "/../../vendor/autoload.php";
use PDO;
use PDOException;
use Dotenv\Dotenv;

abstract class Base {
  
  protected static function getDatabase() {
    $db = null;
    
    $dotenv = DotEnv::createImmutable(__DIR__ ."/../../");
    $dotenv->load();
    
    $dbname = $_ENV["DB_NAME"];
    $dbpword = $_ENV["DB_PWORD"];
    $dbuser = $_ENV["DB_USER"];
    
    try {
      $db = new PDO(
        "mysql:host=127.0.0.1;dbname=$dbname"
        ,$dbuser
        ,$dbpword);
      $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
      echo $e->getMessage();
      die();
    }

    return $db;
  }

  // abstract static public function create();
  // abstract public function retrieve();
  // abstract public function delete();
  // abstract public function update();
}