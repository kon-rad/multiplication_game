<?php 
	include 'database.php';

	if(isset($_POST['submit'])) {
		/**
		 * remove unsafe tags/attributes form html string
		 */
		function html_strip_unsafe($strData)
		{
		    // Unsafe HTML tags/attributes that members may abuse
		    $arrData=array(
		        //'/<iframe(.*?)<\/iframe>/is',
		        '/<title(.*?)<\/title>/is',
		        '/<pre(.*?)<\/pre>/is',
		        '/<frame(.*?)<\/frame>/is',
		        '/<frameset(.*?)<\/frameset>/is',
		        //'/<object(.*?)<\/object>/is',
		        '/<script(.*?)<\/script>/is',
		        //'/<embed(.*?)<\/embed>/is',
		        '/<applet(.*?)<\/applet>/is',
		        '/<meta(.*?)>/is',
		        '/<!doctype(.*?)>/is',
		        '/<link(.*?)>/is',
		        '/<body(.*?)>/is',
		        '/<\/body>/is',
		        '/<head(.*?)>/is',
		        '/<\/head>/is',
		        '/onload="(.*?)"/is',
		        '/onunload="(.*?)"/is',
		        '/onerror="(.*?)"/is',
		        '/onclick="(.*?)"/is',
		        '/onchange="(.*?)"/is',
		        '/onmouseover="(.*?)"/is',
		        '/autofocus="(.*?)"/is',
		        '/onfocus="(.*?)"/is',
		        '/<html(.*?)>/is',
		        '/<\/html>/is',
		    );
		    $strData = preg_replace($arrData, "", $strData);
			$strData = filter_var($strData, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

		    return $strData;
		} 

		$name = html_strip_unsafe($_POST['name']);
		$name = mysqli_real_escape_string($con, $name);

		$score = html_strip_unsafe($_POST['score']);
		$score = mysqli_real_escape_string($con, $score);

		if( !isset($line) || $line == '') {
			$error = "Please enter your name to be recorded on hi scores";
			header("Location: index.php?error=".urlencode($error));
			exit();
		} else {
			$query = "INSERT INTO multiplication_game (name, score)
				VALUES ('$name', '$score')";
			if(!mysqli_query($con, $query)) {
				die("Error: ".mysqli_error($con));
			} else {
				header("Location: index.php");
				exit();
			}

			$query = "INSERT INTO never_ending (line)
				VALUES ('$line')";
			if(!mysqli_query($con, $query)) {
				die("Error: ".mysqli_error($con));
			} else {
				header("Location: index.php");
				exit();
			}
		}

	}