<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>New User registration</title>
  </head>
  <body>
    <p>
            <?php

		include_once $_SERVER['DOCUMENT_ROOT'].'/SocialSurvey/SSdb.php';
	
		
			//need to create a variable array that will store user info
	
	  $userlogin = $_GET['username'];
      $userpwd = $_GET['userpwd'];
	  echo $userlogin;
	  // other fields
	  $userbdate = $_GET['bdate'];
	  $useremail = $_GET['email'];
	  $country=$_GET["country"];
	  $state=$_GET["state"];
	  $usercity= $_GET['city'];
	  $ethn=$_GET["ethn"];
	  $edu=$_GET["edu"];
	  $income=$_GET["income"];
	  $sex=$_GET["sex"];
	  $userspt = $_GET['spt'];
	  $userpl = $_GET['pol'];
	  $usergender=$_GET["gender"];
	  echo $country;
	  echo $income;
	  
	  /* Query all team member id who already signed up online
	  $sql2 = $pdo->prepare("SELECT userlogininfo_t.UserPwd
				FROM userlogininfo_t");
		$sql2->execute();
		//store all team member ids in associate array
		$rows = $sql2->fetchALL(PDO::FETCH_ASSOC);
		foreach ($rows as $row) {
			//deny team members if account already created 
			if($userpwd == $row["UserPwd"]){
				
				$sql3 = $pdo->prepare("SELECT userlogininfo_t.UserName 
									FROM userlogininfo_t
									WHERE UserPwd = ?");
				$sql3->bindParam(1,$userpwd);
				$sql3->execute();
				//store all team member username in associate array
				$uName = $sql3->fetchALL(PDO::FETCH_ASSOC);
				echo "The account listed below already exist in the system:"."<br>";
				echo "<br>";
				echo "Username: ".$userlogin[0][UserName]."<br>";
				echo "<br>";
				echo "Please contact the administrator for assistance"."<br>";
				echo' <p> <a href="SSindex.php">Return to user signin</a> </p>';
				exit();
			}
		}*/
	//echo 'The original password is: '.$hardcodedPwdHash.'<br>';
				$userEnteredPwdHash = password_hash($userpwd,PASSWORD_DEFAULT);
        try {
        $pdo->beginTransaction();
		//store user input into teammemberlongininfo_t
		$stmt = $pdo->prepare("INSERT INTO UserLoginInfo_T (UserName,UserPwd,PwdHash) VALUES (?, ?, ?)");
		$stmt->bindParam(1,$userlogin);
		$stmt->bindParam(2,$userpwd);
		$stmt->bindParam(3,$userEnteredPwdHash);
		$stmt->execute();

		//store user input into user_t
		//$stmttwo = $pdo->prepare("INSERT INTO User_T (FName,MInit,LName,BDATE,Country,ST,City,Sex,Ethnicity,Edu,SEC,Sprituality,Political_lean,gender,email) VALUES ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15')");
		$stmttwo = $pdo->prepare("INSERT INTO User_T (BDATE,Country,ST,City,Sex,Ethnicity,Edu,SEC,Sprituality,Political_lean,gender,email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
		$stmttwo->bindParam(1,$userbdate);
		$stmttwo->bindParam(2,$country);
		$stmttwo->bindParam(3,$state);
		$stmttwo->bindParam(4,$usercity);
		$stmttwo->bindParam(5,$sex);
		$stmttwo->bindParam(6,$ethn);
		$stmttwo->bindParam(7,$edu);
		$stmttwo->bindParam(8,$income);
		$stmttwo->bindParam(9,$userspt);
		$stmttwo->bindParam(10,$userpl);
		$stmttwo->bindParam(11,$usergender);
		$stmttwo->bindParam(12,$useremail);
		
		$stmttwo->execute();
		$pdo->commit();
		}
        
        catch (PDOException $e) {
            $pdo->rollBack();
            die($e->getMessage());
        }
		echo "Registration complete, an account was created for you"." <br>";
		echo 'Your username is:'.$userlogin.'<br>';
	  $userEnteredPwdHash = password_hash($userpwd,PASSWORD_DEFAULT);
	  echo 'Your password is: '.$userpwd.'<br>';
	  echo' <p> <a href="profilepage.php">Go to dashboard</a> </p>';
	  exit();
			
      ?>
    </p>
	 <p> <a href="SSindex.php">Return to user signin</a> </p>
  </body>
</html>