'use strict';
import winSound from './assets/sounds/win.wav'; 
import stepSound from './assets/sounds/step.wav';
import './assets/images/monster-1.svg';
import './assets/images/monster-2.svg';

const comb = [
  [0, 4, 8], [2, 4, 6], [3, 4, 5],
  [1, 4, 7], [0, 1, 2], [6, 7, 8],
  [0, 3, 6], [2, 5, 8]
];
class TicTacToe {
  constructor() {
    this.huPlayer = {};
    this.aiPlayer = {};
    this.board = [];
    this.turnCount = 0;

    this.boardCheckboxes = document.getElementsByClassName('board__checkbox');
    this.boardCells = document.querySelectorAll('.board__item');
    this.monsterImg1 = '<img class="hero__img" src="./images/monster-1.svg" alt="monster-1">';
    this.monsterImg2 = '<img class="hero__img" src="./images/monster-2.svg" alt="monster-2">';
    this.dialogStart = document.getElementById('dialog-start');
    this.dialogResult = document.getElementById('dialog-result');
    this.winnerImg = document.getElementById('winner-img');
    this.winMessage = document.getElementById('message');
    
    let x = document.getElementById('playerX');
    let o = document.getElementById('playerO');
    let startButton = document.getElementById('start-button');
    let resetButton = document.getElementById('reset-button');
    let reStartButton = document.getElementById('restart-button');
    let muteButton = document.getElementById('mute-button');
    
    this.stepAudio = document.createElement("audio");
    this.winAudio = document.createElement("audio");
    this.winAudio.src = winSound;
    this.stepAudio.src = stepSound;
    this.stepAudio.muted = false;
    this.winAudio.muted = false;

    x.addEventListener('click', e => { 
      this.chooseHero(e);
    })
    o.addEventListener('click', e => { 
      this.chooseHero(e);
    })
    startButton.addEventListener('click', () => {
      this.startGame();
    });
    reStartButton.addEventListener('click', (e) => {
      this.chooseHero(e)
    });
    resetButton.addEventListener('click', (e) => {
      this.chooseHero(e)
    });
    muteButton.addEventListener('click', () => { 
      this.muteSound();
    })
    
    for (let i=0; i<this.boardCheckboxes.length; i++) {
      this.boardCheckboxes[i].addEventListener('click', this.huPlayerMove());
    }
  }

  hide(item) {
    item.classList.add('visually-hidden');
  }

  show(item) {
    item.classList.remove('visually-hidden');
  }

  whoseTurn() {
    return Math.floor(Math.random() * 2);
  }

  chooseHero(e) {
    this.hide(this.dialogResult);
    this.show(this.dialogStart);
    if (e.target.id === 'playerO') {
      this.huPlayer = { type: 'X', img: this.monsterImg2 };
      this.aiPlayer = { type: 'O', img: this.monsterImg1 };
    }
    else {
      this.huPlayer = { type: 'X', img: this.monsterImg1 };
      this.aiPlayer = { type: 'O', img: this.monsterImg2 };
    }
    return this.huPlayer;
  }

  makeStep(firstPlayer, secondPlayer, id) {
    const emptyFields = this.getEmptyFields();
    if (emptyFields.length !== 0) {
      if (!this.winCheck(this.board, secondPlayer.type)) {
        let cell = document.querySelector('label[for="' + id + '"]');
        let checkbox = document.getElementById(id);
        cell.innerHTML = firstPlayer.img;
        checkbox.setAttribute('disabled', true);
        this.board[+id] = firstPlayer.type;
        this.stepAudio.play();
      }
      if (this.winCheck(this.board, firstPlayer.type)) {
        for (let i=0; i<this.boardCheckboxes.length; i++) {
          this.boardCheckboxes[i].setAttribute('disabled', true);
        }
        let message = { img: firstPlayer.img, text: firstPlayer.type === 'X' ? 'You Win!' : 'You Lose!' }
        this.showResult(message);
      }
    }
    else {
      let message = { img: firstPlayer.img + secondPlayer.img, text: 'Draw!' };
      this.showResult(message);
    }
  }

  showResult(message) {
    setTimeout(() => {
      this.winnerImg.innerHTML = message.img;
      this.winMessage.innerText = message.text;
      this.winAudio.play();
      this.show(this.dialogResult);
    }, 1000); 
  }

  huPlayerMove() {
    return(e) => {
      this.turnCount += 1;
      let id = e.target.id;
      this.makeStep(this.huPlayer, this.aiPlayer, id);
      if (!this.winCheck(this.board, this.huPlayer.type)) {
        this.aiPlayerMove();
      }
    }
  }

  aiPlayerMove() {
    this.turnCount += 1;
    let bestMove = this.minimax(this.board, this.aiPlayer.type);
    this.makeStep(this.aiPlayer, this.huPlayer, bestMove.idx);
    if (!(this.winCheck(this.board, this.huPlayer.type) || this.winCheck(this.board, this.aiPlayer.type))) {
      this.huPlayerMove();
    }
  }
  
  startGame() {
    this.hide(this.dialogResult);
    this.turnCount = 0;
    for (let i = 0; i < this.boardCheckboxes.length; i++) {
      this.boardCheckboxes[i].checked = false;
      this.boardCheckboxes[i].removeAttribute('disabled', false);
      this.boardCells[i].innerHTML = '';
    }
    this.hide(this.dialogStart);
    this.board = [...Array(9).keys()];
    let turn = this.whoseTurn();
    if (turn === 1) {
      this.aiPlayerMove();
    }
  }

  muteSound() {
    this.stepAudio.muted = !this.stepAudio.muted;
    this.winAudio.muted = !this.winAudio.muted;
    if (this.stepAudio.muted) {
      muteButton.innerHTML='<svg fill="currentColor" class="button__icon" viewBox="0 0 16 17"><path d="m14.798 8.5.975-.974a.778.778 0 0 0 0-1.099l-.2-.2a.778.778 0 0 0-1.099 0l-.974.975-.974-.975a.778.778 0 0 0-1.099 0l-.199.2a.776.776 0 0 0 0 1.099l.974.974-.974.974a.772.772 0 0 0 0 1.099l.199.199a.776.776 0 0 0 1.099 0l.974-.974.974.974a.776.776 0 0 0 1.099 0l.2-.199a.776.776 0 0 0 0-1.099l-.975-.974ZM4.042 4.21A4.038 4.038 0 0 0 0 8.253a4.042 4.042 0 0 0 4.042 4.042h.832l4.726 4.21V0L4.874 4.21h-.832Z"/></svg>';
    }
    else {
      muteButton.innerHTML='<svg fill="currentColor" class="button__icon" viewBox="0 0 16 17"><path d="M4.042 4.21A4.038 4.038 0 0 0 0 8.253a4.042 4.042 0 0 0 4.042 4.042h.832l4.726 4.21V0L4.874 4.21h-.832Zm7.072.506L16 3.2V.673l-4.886 4.043M16 9.726V6.778l-4.886 1.475L16 9.726Zm0 6.104v-2.525l-4.886-1.516L16 15.831Z"/></svg>';
    }
  }

  winCheck(board, player) {
    for (let i = 0; i<comb.length; i++) {
      if (board[comb[i][0]]===player && board[comb[i][1]]===player && board[comb[i][2]]===player) {
        return true;
      }
    }
    return false;
  }

  minimax(board, player) {
    const emptyFields = this.getEmptyFields();
    if (this.winCheck(board, this.huPlayer.type)) {
      return {
        score: -1
      }
    }
    else if (this.winCheck(board, this.aiPlayer.type)) {
      return {
        score: 1
      }
    }
    else if (emptyFields.length === 0) {
      return {
        score: 0
      }
    }
    let moves = [];
    for (let i=0; i<emptyFields.length; i++) {
      
      let move = {};
      board[emptyFields[i]] = player;
      move.idx = emptyFields[i];
      if (player === this.huPlayer.type) {
        const step = this.minimax(board, this.aiPlayer.type);
        move.score = step.score;
      }
      if (player === this.aiPlayer.type) {
        const step = this.minimax(board, this.huPlayer.type);
        move.score = step.score;
      }
      board[emptyFields[i]] = move.idx;
      moves.push(move);
    }
    let bestMove = null;
    if (player === this.aiPlayer.type) {
      let bestScore = -Infinity;
      for (let i=0; i<moves.length; i++) {
        if (moves[i].score>bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } 
    else {
      let bestScore = Infinity;
      for (let i=0; i<moves.length; i++) {
        if (moves[i].score<bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    return moves[bestMove];
  }

  getEmptyFields() {
    return this.board.filter(f => f !== this.huPlayer.type && f !== this.aiPlayer.type)
  }
}

new TicTacToe();