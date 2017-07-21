<!DOCTYPE html>
<html>
<head>
    <title>
        Real Estate Landing
    </title>
	<meta charset="utf-8" />
	<link href="css/bootstrap.min.css" type="text/css" rel="stylesheet" />
	<link href="css/bootstrap-theme.min.css" type="text/css" rel="stylesheet" />
    <link href="StyleSheet.css" type="text/css" rel="stylesheet" />
	<script src="script.js" type="text/javascript"></script>
	<script src="js/bootstrap.min.js" type="text/javascript"></script>
    <link rel="shortcut icon" href="logo_2.png">
	<?php
		define('DB_HOST', 'localhost');
		define('DB_USER', 'root');
		define('DB_PASS', '');
		define('DB_NAME', 'test');
/*
we are now officially testing
		$connection = mysql_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME) or die(mysql_error());
		mysql_select_db(DB_NAME) or die(mysql_error());
		/*
		function small_print() {
			$query = mysql_query("SELECT * FROM `text` WHERE ID='1'") or die(mysql_error());
			while($post = mysql_fetch_assoc($query)) {
				echo $post['content'];
			}
		}
		function navbar() {
			$query = mysql_query("SELECT * FROM navbar") or die(mysql_error());
			while($post = mysql_fetch_assoc($query)) {
				echo "<a href=" . $post['link'] . ">" . $post['slug'] . "</a>";
			}
		}
	*/
	?>
</head>
<body>