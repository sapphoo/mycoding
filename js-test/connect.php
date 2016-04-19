	<!-- 连接数据库 -->
	<meta charset="utf-8">
	<?php 
		$host = '127.0.0.1';
		$user = 'root';
		$pass = '123';
		$db = 'apt';
		$con = new mysqli( $host, $user, $pass, $db);
		if($con->connect_error){
			die("Connection failed: ".$con->connect_error);
		}
	?> 