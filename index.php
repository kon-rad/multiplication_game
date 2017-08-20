<?php include 'database.php' ; ?>
<?php 
  $query = "SELECT * FROM never_ending ORDER BY score DESC";
  $hiscores = mysqli_query($con, $query);

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Multiplication Game</title>
	<link href="css/style.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
</head>
<body>


<html>
  <div class="outer">
  	<h1>Speed Multiplication</h1>
    <div class="controls">
      <a class="button" id="start">start game</a>
      <a class="button" id="quit">quit</a>
      <a class="button" id="hi-scores" onclick="openHiscores()">hi scores</a>
    </div>
    <div id="scoreboard" class="display scoreboard">
    </div>
    <div class="display-wrapper">
      <div class="display display-problem">
        <span id="display-problem" class="span-display"></span>
      </div>
      <div class="display display-timer">
        <span id="display-timer" class="span-display">0:00</span>
      </div>
      <div class="display display-solution">
        <span id="display-solution" class="span-display"></span>
      </div>
      <div class="display score_num">
        <span  id="score_num">0</span>
      </div>
    </div>
    <div class="keys-outer">
      <div class="keyboard">
        <div class="keyboard-row">
          <a class="key" id="seven">7</a>
          <a class="key" id="eight">8</a>
          <a class="key" id="nine">9</a>
        </div>
        <div class="keyboard-row">
          <a class="key" id="four">4</a>
          <a class="key" id="five">5</a>
          <a class="key" id="six">6</a>
        </div>
        <div class="keyboard-row">
          <a class="key" id="one">1</a>
          <a class="key" id="two">2</a>
          <a class="key" id="three">3</a>
        </div>
        <div class="keyboard-row">
          <a class="key" id="clear"><i class="fa fa-times"></i></a>
          <a class="key" id="zero">0</a>
          <a class="key" id="backspace"><i class="fa fa-caret-square-o-left"></i></a>
        </div>
      </div>
      <div id="submit" class="button enter-key">
        <p>Submit</p>
      </div>
    </div>
  </div>

  <div id="modal" class="modal">
    <div id="modal-content" class="modal-content">
        <a id="modal-close" onclick="closeModal()">&times;</a>
      <div id="modal-header" class="modal-header">
        <h4 id="modal-title"></h4>
        <p class="modal-text">You scored  <span id="modal-score"></span></p>
      </div>
      <div id="modal-input">
        <h4>Congratulations, you made the hi score list!</h4>
        <?php if(isset($_GET['error'])) : ?>
          <div class="error"><?php echo $_GET['error']; ?></div>
        <?php endif; ?>
        <form id="form" method="POST" action="process.php">
          <input type="text" name="name" placeholder="enter your name here">
          <input type="submit" value="submit">
        </form>
      </div>
      <div id="modal-hiscores" class="modal-hiscores">
        <h4>hi scores</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
          <?php while($row = mysqli_fetch_assoc($hiscores)) : ?>
          <tr>
            <td><?php echo $row['name']; ?></td>
            <td class="modal-score"><?php echo $row['score']; ?></td>
          </tr>
        <?php endwhile; ?>
        </table>
      </div>
    </div>
  </div>

	<script type="text/javascript" src="js/script.js"></script>
   
</html>

	
</body>
</html>
