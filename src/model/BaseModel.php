<?php

namespace Model;
require_once __DIR__ . "/../../vendor/autoload.php";
use PDO;
use PDOException;
use Dotenv\Dotenv;

class BaseModel {
  protected $db;
  
  public function __construct() {
    $dotenv = DotEnv::createImmutable(__DIR__ ."/../../");
    $dotenv->load();
    
    $dbname = $_ENV["DB_NAME"];
    $dbpword = $_ENV["DB_PWORD"];
    $dbuser = $_ENV["DB_USER"];
    
    try {
      $this->db = new PDO(
        "mysql:host=127.0.0.1;dbname=$dbname"
        ,$dbuser
        ,$dbpword);
      $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
      echo $e->getMessage();
      die();
    }
  }
}