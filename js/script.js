const Game = (() => {  
    let lastMove = '';
    let move = '';
    const winner = document.getElementById('winner');
    const gameboard = document.getElementById('gameboard');

    const on = () => {
        play();
    }
    
    const play = () => {
        for (let i = 0; i < 9; i++) {
            const play = document.querySelectorAll('.square')[i];
            play.addEventListener('click', () => {
                if (play.innerText === '') {
                    play.innerText = flow();
                    play.style = 'font-size: 65px;';
                }
                setTimeout(() => {
                    check();
                }, 205); 
            })
        }
        const reset = document.getElementById('restart');
        reset.addEventListener('click', () => {
            restart();
        })
        winner.addEventListener('click', () => {
            restart();
        })
    }

    const flow = () => {
        if (lastMove === '✕') {
            move = '◯';
            lastMove = '◯';
            return move;
        } else if (lastMove === '◯') {
            move = '✕';
            lastMove = '✕';
            return move;
        } else {
            move = '✕';
            lastMove = '✕';
            return move;
        }
    }

    const check = () => {
        const one = document.getElementById('one').innerText;
        const two = document.getElementById('two').innerText;
        const three = document.getElementById('three').innerText;
        const four = document.getElementById('four').innerText;
        const five = document.getElementById('five').innerText;
        const six = document.getElementById('six').innerText;
        const seven = document.getElementById('seven').innerText;
        const eight = document.getElementById('eight').innerText;
        const nine = document.getElementById('nine').innerText;
        const numberLeft = '';
        const numberRight = '';
        if (one === '✕' && two === '✕' && three === '✕' || four === '✕' && five === '✕' && six === '✕' || seven === '✕' && eight === '✕' && nine === '✕' || one === '✕' && four === '✕' && seven === '✕' || two === '✕' && five === '✕' && eight === '✕' || three === '✕' && six === '✕' && nine === '✕' || one === '✕' && five === '✕' && nine === '✕' || three === '✕' && five === '✕' && seven === '✕') {
            score('✕', numberLeft, 'score-x-top', 'score-x');
        } else if (one === '◯' && two === '◯' && three === '◯' || four === '◯' && five === '◯' && six === '◯' || seven === '◯' && eight === '◯' && nine === '◯' || one === '◯' && four === '◯' && seven === '◯' || two === '◯' && five === '◯' && eight === '◯' || three === '◯' && six === '◯' && nine === '◯' || one === '◯' && five === '◯' && nine === '◯' || three === '◯' && five === '◯' && seven === '◯') {
            score('◯', numberRight, 'score-o-top', 'score-o');
        } else if (one !== '' && two !== '' && three !== '' && four !== '' && five !== '' && six !== '' && seven !== '' && eight !== '' && nine !== '') {
            gameboard.classList.add('hide');
            winner.innerHTML = '<div><strong>✕◯</strong></div><div>DRAW!</div>';
            winner.style = 'font-size: 48px';
            borderOff();
        }
    }

    const score = (symbol, number, top, bottom) => {
        gameboard.classList.add('hide');
        winner.innerHTML = `<div><strong>${symbol}</strong></div><div>WINNER!</div>`;
        winner.style = 'font-size: 48px';
        number = +document.getElementById(top).innerText + 1;
        document.getElementById(top).innerText = number;
        document.getElementById(top).style = 'animation: mb 0.35s linear;';
        document.getElementById(bottom).style = 'animation: mt 0.25s ease-out 0.10s;';
        setTimeout(() => {
            document.getElementById(bottom).innerText = number;
        }, 335); 
        borderOff();
    }

    const restart = () => {
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll('.square')[i].innerText = '';
        }
        lastMove = '';
        winner.innerHTML = '';
        winner.style = '';
        gameboard.classList.remove('hide');
        setTimeout(() => {
            document.getElementById('score-x-top').style = '';
            document.getElementById('score-x').style = '';
            document.getElementById('score-o-top').style = '';
            document.getElementById('score-o').style = '';
        }, 400); 
        borderOn();
    }

    const borderOff = () => {
        document.querySelector('.square#two').style = 'border: none';
        document.querySelector('.square#four').style = 'border: none';
        document.querySelector('.square#five').style = 'border: none';
        document.querySelector('.square#six').style = 'border: none';
        document.querySelector('.square#eight').style = 'border: none';
        document.querySelector('.square#one').style = '';
        document.querySelector('.square#three').style = '';
        document.querySelector('.square#seven').style = '';
        document.querySelector('.square#nine').style = '';
    }

    const borderOn = () => {
        document.querySelector('.square#two').style = '';
        document.querySelector('.square#four').style = '';
        document.querySelector('.square#five').style = '';
        document.querySelector('.square#six').style = '';
        document.querySelector('.square#eight').style = '';
    }

    return {
        on
    }
})();

Game.on();