'use strict';
import winSound from './assets/sounds/win.wav'; 
import stepSound from './assets/sounds/step.wav';

let player = 'X';
let player2 = 'O';
let arrayFields;
let resetButton = document.getElementById('resetButton');
let newButton = document.getElementById('newButton');
let muteButton = document.getElementById('muteButton');
let field;
let fields = document.getElementById('fields');
let winMessage = document.getElementById('message');
let winner = document.getElementById('winner');
let x = document.getElementById('playerX');
let o = document.getElementById('playerO');
let playerClass;
let playerClass2;
let arr = [];
let count = 0;
const comb = [
  [0, 4, 8], [2, 4, 6], [3, 4, 5],
  [1, 4, 7], [0, 1, 2], [6, 7, 8],
  [0, 3, 6], [2, 5, 8]
];
let stepAudio;
let winAudio;
stepAudio = document.createElement("audio");
winAudio = document.createElement("audio");
winAudio.src = winSound;
stepAudio.src = stepSound;
stepAudio.muted = false;
winAudio.muted = false;

class TicTacToe {
  constructor() {
    this.turn = Math.floor(Math.random() * 2);
    this.turnCount = 0;
    resetButton.addEventListener('click', () => { 
      this.resetGame();
    });
    newButton.addEventListener('click', () => { 
      this.resetGame();
    })
    muteButton.addEventListener('click', () => { 
      this.muteSound();
    })
    x.addEventListener('click', e => { 
      this.choosePlayer(e);
    })
    o.addEventListener('click', e => { 
      this.choosePlayer(e);
    })
    this.arrayFields = [];
    this.resetGame(); 
  }

  initGame() {
    for (let i=0; i<9; i++) {
      let field = document.createElement('div');
      field.classList.add('field');
      field.setAttribute('field-id', i);
      field.addEventListener('click', this.playerMove());
      fields.appendChild(field);
      fields.appendChild(stepAudio);
      fields.appendChild(winAudio);
      this.arrayFields.push(field);
    }
    this.field = document.getElementsByClassName('field');
    this.turn = Math.floor(Math.random() * 2);
    if (this.turn === 1) {
      this.playerTwoMove();
    }
    count = 0;
  };

  muteSound() {
    stepAudio.muted = !stepAudio.muted;
    winAudio.muted = !winAudio.muted;
  }

  resetGame() {
    this.board = [...Array(9).keys()];
    this.turnCount = 0;
    fields.innerHTML='';
    this.arrayFields = [];
    winner.classList.add('hidden');
    winMessage.classList.remove('player', 'ai', 'draw');
    fields.classList.remove('hasWinner');
    start.classList.remove('hasHero');
    start.classList.remove('hidden');
    o.classList.remove('hero');
    x.classList.remove('hero');
    winMessage.innerText = '';
    this.choosePlayer();
  }

  playerMove() {
    return (e) => {
      this.turnCount += 1;
      let id = e.target.getAttribute('field-id');
      if (!(this.winCheck(this.board, player) || this.winCheck(this.board, player2))) {
        if ((this.board[+id]!==player2)&&(this.board[+id]!==player)) {
          this.board[+id] = player;
          stepAudio.play();
          this.arrayFields[+id].classList.add(playerClass);
          const emptyFields = this.getEmptyFields(this.board);
          if (emptyFields.length===0) {
            winMessage.innerText = 'Draw!';
            winMessage.classList.add('draw');
            winner.classList.remove('hidden');
            return
          }
          if (this.winCheck(this.board, player)) {
            for (let i=0; i<field.length; i++) {
              field[i].removeEventListener('click', this.playerMove());
            }
            this.pickFields(this.board, player);
            setTimeout(() => {
              winMessage.innerText = 'You Win!';
              winner.classList.remove('hidden');
            }, 500);
            return;
          }
          this.playerTwoMove(); 
        }
      }
    }
  }
  playerTwoMove() {
    this.turnCount +=1;
    let bestMove = this.minimax(this.board, player2);
    this.board[bestMove.idx] = player2;
    stepAudio.play();
    this.arrayFields[bestMove.idx].classList.add(playerClass2);
    if (this.winCheck(this.board, player2)) {
      for (let i=0; i<this.field.length; i++) {
        this.field[i].removeEventListener('click', this.playerMove());
      }
      this.pickFields(this.board, player2);
      setTimeout(() => {
        winMessage.innerText = 'PC Wins!';
        winner.classList.remove('hidden');
      }, 500);
      return
    }
    const emptyFields = this.getEmptyFields(this.board);
    if (emptyFields.length===0) {
      winMessage.innerText = 'Draw!';
      winner.classList.remove('hidden');
      return
    }
  }

  choosePlayer(e) {
    if (e) {
      start.classList.add('hasHero');
      if (e.target.id === 'playerO') {
        player = 'O';
        player2 = 'X';
        playerClass2 = 'cat';
        playerClass = 'fish';
        x.classList.remove('hero');
        o.classList.add('hero');
      }
      else {
        player = 'X';
        player2 = 'O';
        playerClass2 = 'fish';
        playerClass = 'cat';
        o.classList.remove('hero');
        x.classList.add('hero');
      }
      setTimeout(() => {
        this.initGame();
        start.classList.add('hidden');
      }, 300);
    }
  }

  pickFields(board, someplayer) {
    let arr;
    for(let i=0; i<comb.length; i++) {
      if (board[comb[i][0]]===someplayer && board[comb[i][1]]===someplayer && board[comb[i][2]]===someplayer) {
        winAudio.play();
        arr = comb[i];
        fields.classList.add('hasWinner');
        for (let j=0; j<arr.length; j++) {
          this.arrayFields[arr[j]].classList.add('win', 'win-'+j);
        }      
      }
    }
  }

  winCheck(board, someplayer) {
    for (let i = 0; i<comb.length; i++) {
      if (board[comb[i][0]]===someplayer && board[comb[i][1]]===someplayer && board[comb[i][2]]===someplayer) {
        return true;
      }
    }
    return false;
  }

  minimax(board, someplayer) {
    const emptyFields = this.getEmptyFields(board);
    if (this.winCheck(board, player)) {
      return {
        score: -1
      }
    }
    else if (this.winCheck(board, player2)) {
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
      board[emptyFields[i]] = someplayer;
      move.idx = emptyFields[i];
      if (someplayer === player) {
        const step = this.minimax(board, player2);
        move.score = step.score;
      }
      if (someplayer === player2) {
        const step = this.minimax(board, player);
        move.score = step.score;
      }
      board[emptyFields[i]] = move.idx;
      moves.push(move);
    }
    let bestMove = null;
    if (someplayer === player2) {
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

  getEmptyFields(board) {
    return board.filter(f => f !== player && f !== player2)
  }
}

new TicTacToe();