


var ques = document.getElementById('display-problem'),
    sol = document.getElementById('display-solution'),
    time = document.getElementById('display-timer'),
    start = document.getElementById('start'),
    one = document.getElementById('one'),
    two = document.getElementById('two'),
    three = document.getElementById('three'),
    four = document.getElementById('four'),
    five = document.getElementById('five'),
    six = document.getElementById('six'),
    seven = document.getElementById('seven'),
    eight = document.getElementById('eight'),
    nine = document.getElementById('nine'),
    zero = document.getElementById('zero'),
    submit = document.getElementById('submit'),
    scoreboard = document.getElementById('scoreboard'),
    score_num = document.getElementById('score_num'),
    backspace = document.getElementById('backspace'),
    clear = document.getElementById('clear'),
    quit = document.getElementById('quit'),
    modal = document.getElementById('modal'),
    modal_close = document.getElementById('modal-close'),
    modal_score = document.getElementById('modal-score'),
    modal_title = document.getElementById('modal-title'),
    modal_hiscores = document.getElementById('modal-hiscores'),
    modal_input = document.getElementById('modal-input'),
    modal_header = document.getElementById('modal-header'),
    form = document.getElementById('form'),
    score_final = 0;
    count = 0,
    playing = false,
    ans_str = '',
    ans_num = 0,
    true_ans = 0,
    game = 0;



/* game starts */
start.addEventListener('click', start_game);
form.addEventListener('submit', form_submit);

/* ====================================================== */
/* LISTENER FUNCTIONS */
/* ====================================================== */

/* click event listeners */

function add_listeners() {
  document.addEventListener('keydown', handleKeydown);
  one.addEventListener("click", add1);//function(){add(1);}, false);
  two.addEventListener("click", add2);
  three.addEventListener("click", add3);
  four.addEventListener("click", add4);
  five.addEventListener("click", add5);
  six.addEventListener("click", add6);
  seven.addEventListener("click", add7);
  eight.addEventListener("click", add8);
  nine.addEventListener("click", add9);
  zero.addEventListener("click", add0);
  clear.addEventListener("click", actionC);
  backspace.addEventListener("click", actionB);
  quit.addEventListener("click", quit_game);
  submit.addEventListener("click", submit_answer);
}

/* removeclick event listeners */

function remove_listeners() {
  document.removeEventListener('keydown', handleKeydown);
  one.removeEventListener("click", add1);
  two.removeEventListener("click", add2);
  three.removeEventListener("click",add3);
  four.removeEventListener("click",add4);
  five.removeEventListener("click",add5);
  six.removeEventListener("click",add6);
  seven.removeEventListener("click",add7);
  eight.removeEventListener("click",add8);
  nine.removeEventListener("click",add9);
  zero.removeEventListener("click",add0);
  clear.removeEventListener("click",actionC);
  backspace.removeEventListener("click",actionB);
  submit.removeEventListener("click",submit_answer);
}

function add1() {
  return add(1);
}
function add2() {
  return add(2);
}
function add3() {
  return add(3);
}
function add4() {
  return add(4);
}
function add5() {
  return add(5);
}
function add6() {
  return add(6);
}
function add7() {
  return add(7);
}
function add8() {
  return add(8);
}
function add9() {
  return add(9);
}
function add0() {
  return add(0);
}
function actionB() {
  return action('b');
}
function actionC(){
  return action('c');
}


function handleKeydown(e) {
  console.log(e);
  switch(e.key) {
    case '1':
      add1();
      break;
    case '2':
      add2();
      break;
    case '3':
      add3();
      break;
    case '4':
      add4();
      break;
    case '5':
      add5();
      break;
    case '6':
      add6();
      break;
    case '7':
      add7();
      break;
    case '8':
      add8();
      break;
    case '9':
      add9();
      break;
    case '0':
      add0();
      break;
    case 'Enter':
      submit_answer();
      break;
    case ' ':
      submit_answer();
      break;
    case 'Backspace':
      action('b');
      break;
    case 'Escape':
      // quit_game();
      break;
  }
}

/* ====================================================== */
/* FUNCTIONS */
/* ====================================================== */

function action(arg) {
  if (arg == 'b') {
    ans_str = ans_str.split('');
    ans_str.pop();
    ans_str = ans_str.join('');
    ans_num = parseInt(ans_str);
    sol.innerHTML = ans_str;
  } else if (arg == 'c') {
    ans_str = '';
    ans_num = parseInt(ans_str);
    sol.innerHTML = ans_str;
  }
}

function form_submit() {
  form.innerHTML = form.innerHTML + "<input type='hidden' name='score' value='" + score_final+"'/>";
}

function game_over() {
  remove_listeners();
  modal_score.innerHTML = score_final;
  if (score_final < 10) {
    modal_title.innerHTML = "First automate, then innovate"
  } else {
    modal_title.innerHTML = "Great work!"
  }
  modal.style.display = "block";
  modal_hiscores.style.display = "block";
  modal_header.style.display = "block";
  count = 0;
  scoreboard.innerHTML = '';
  time.innerHTML = '0:00';
  ques.innerHTML = '';
  score_num.innerHTML = '0';
}

function quit_game() {
  clearInterval(game);
  remove_listeners();
  count = 0;
  scoreboard.innerHTML = '';
  score_num.innerHTML = '0';
  ques.innerHTML = '';
  sol.innerHTML = '';
  time.innerHTML = '0:00';
}

function start_game() {
  console.log('starting new one');
  score_final = 0;
  add_listeners();
  time.innerHTML = '0:'+60;
  generate_question();
  clearInterval(game);
  game = setInterval(counter, 1000);
  count = 3;
  scoreboard.innerHTML = '';
  score_num.innerHTML = '0';
}

function add(num) {
  ans_str += String(num);
  ans_num = parseInt(ans_str);
  sol.innerHTML = ans_str;
}

function generate_question() {
  var n1 = Math.floor(Math.random() * 11),
      n2 = Math.floor(Math.random() * 11);
  true_ans = n1*n2;
  ques.innerHTML =  n1 + " x " + n2;
}

function counter() {
  count--;
  if (count == -1) {
    clearInterval(game);
    playing = false;
    time.innerHTML = "Fin!";
    game_over();
  } else {
    if (count < 10)
      time.innerHTML = '0:0'+count;
    else
      time.innerHTML = '0:'+count;
  }
}

function closeModal() {
  modal.style.display = "none";
  modal_hiscores.style.display = "none";
  modal_header.style.display = 'none';
}

function openHiscores() {
  modal.style.display = "block";
  modal_hiscores.style.display = 'block';
}

function correct() {
  score_final++;
  scoreboard.innerHTML = scoreboard.innerHTML + '<i class="fa fa-check  fa-2x green"></i>';
  score_num.innerHTML = score_final;
}

function incorrect() {
  scoreboard.innerHTML = scoreboard.innerHTML + '<i class="fa fa-times fa-2x red"></i>';
}
function submit_answer() {
  console.log('here in sa');
  if (ans_num == true_ans) {
    correct();
  } else {
    incorrect();
  }
  ans_num = 0;
  ans_str = '';
  sol.innerHTML = '';
  generate_question();
}
