const Game = (() => {
    const play = () => {
        for (let i = 0; i < 9; i++) {
            const play = document.querySelectorAll('.square')[i];
            play.addEventListener('click', () => {
                if (play.innerText === '') {
                    play.innerText = flow();
                }
                check();
            })
        }
        let reset = document.getElementById('restart');
        reset.addEventListener('click', () => {
            restart();
        })
        winner.addEventListener('click', () => {
            restart();
        })
    }
    
    let lastMove = '';
    let move = '';

    const flow = () => {
        if (lastMove === '✕') {
            move = '⭘';
            lastMove = '⭘';
            return move;
        } else if (lastMove === '⭘') {
            move = '✕';
            lastMove = '✕';
            return move;
        } else {
            move = '✕';
            lastMove = '✕';
            return move;
        }
    }

    let winner = document.getElementById('winner');
    let gameboard = document.getElementById('gameboard');

    const check = () => {
        let one = document.getElementById('one').innerText;
        let two = document.getElementById('two').innerText;
        let three = document.getElementById('three').innerText;
        let four = document.getElementById('four').innerText;
        let five = document.getElementById('five').innerText;
        let six = document.getElementById('six').innerText;
        let seven = document.getElementById('seven').innerText;
        let eight = document.getElementById('eight').innerText;
        let nine = document.getElementById('nine').innerText;
        let numberLeft = '';
        let numberRight = '';
        if (one === '✕' && two === '✕' && three === '✕' || four === '✕' && five === '✕' && six === '✕' || seven === '✕' && eight === '✕' && nine === '✕' || one === '✕' && four === '✕' && seven === '✕' || two === '✕' && five === '✕' && eight === '✕' || three === '✕' && six === '✕' && nine === '✕' || one === '✕' && five === '✕' && nine === '✕' || three === '✕' && five === '✕' && seven === '✕') {
            gameboard.classList.add('hide');
            winner.innerHTML = '<strong>✕</strong>&nbsp;WINNER!';
            numberLeft = +document.getElementById('score-x').innerText + 1;
            document.getElementById('score-x').innerText = numberLeft;
        } else if (one === '⭘' && two === '⭘' && three === '⭘' || four === '⭘' && five === '⭘' && six === '⭘' || seven === '⭘' && eight === '⭘' && nine === '⭘' || one === '⭘' && four === '⭘' && seven === '⭘' || two === '⭘' && five === '⭘' && eight === '⭘' || three === '⭘' && six === '⭘' && nine === '⭘' || one === '⭘' && five === '⭘' && nine === '⭘' || three === '⭘' && five === '⭘' && seven === '⭘') {
            gameboard.classList.add('hide');
            winner.innerHTML = '<strong>⭘</strong>&nbsp;WINNER!';
            numberRight = +document.getElementById('score-o').innerText + 1;
            document.getElementById('score-o').innerText = numberRight;
        } else if (one !== '' && two !== '' && three !== '' && four !== '' && five !== '' && six !== '' && seven !== '' && eight !== '' && nine !== '') {
            gameboard.classList.add('hide');
            winner.innerHTML = '<strong>✕⭘</strong>&nbsp;DRAW!';
        }
    }

    const restart = () => {
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll('.square')[i].innerText = '';
        }
        lastMove = '';
        winner.innerHTML = '';
        gameboard.classList.remove('hide');
    }

    return {
        play,
    }
})();

Game.play();