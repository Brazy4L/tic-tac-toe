const Game = (() => {
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
            winner.innerHTML = '<div><strong>✕</strong></div><div>WINNER!</div>';
            winner.style = 'font-size: 48px';
            numberLeft = +document.getElementById('score-x-top').innerText + 1;
            document.getElementById('score-x-top').innerText = numberLeft;
            document.getElementById('score-x-top').style = 'animation: mb 0.35s linear;'
            document.getElementById('score-x').style = 'animation: mt 0.25s ease-out 0.10s;'
            setTimeout(() => {
                document.getElementById('score-x').innerText = numberLeft;
            }, 335); 
            borderOff();
        } else if (one === '◯' && two === '◯' && three === '◯' || four === '◯' && five === '◯' && six === '◯' || seven === '◯' && eight === '◯' && nine === '◯' || one === '◯' && four === '◯' && seven === '◯' || two === '◯' && five === '◯' && eight === '◯' || three === '◯' && six === '◯' && nine === '◯' || one === '◯' && five === '◯' && nine === '◯' || three === '◯' && five === '◯' && seven === '◯') {
            gameboard.classList.add('hide');
            winner.innerHTML = '<div><strong>◯</strong></div><div>WINNER!</div>';
            winner.style = 'font-size: 48px';
            numberRight = +document.getElementById('score-o-top').innerText + 1;
            document.getElementById('score-o-top').innerText = numberRight;
            document.getElementById('score-o-top').style = 'animation: mb 0.35s linear;'
            document.getElementById('score-o').style = 'animation: mt 0.25s ease-out 0.10s;'
            setTimeout(() => {
                document.getElementById('score-o').innerText = numberRight;
            }, 335); 
            borderOff();
        } else if (one !== '' && two !== '' && three !== '' && four !== '' && five !== '' && six !== '' && seven !== '' && eight !== '' && nine !== '') {
            gameboard.classList.add('hide');
            winner.innerHTML = '<div><strong>✕◯</strong></div><div>DRAW!</div>';
            winner.style = 'font-size: 48px';
            borderOff();
        }
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
            document.getElementById('score-x-top').style = ''
            document.getElementById('score-x').style = ''
            document.getElementById('score-o-top').style = ''
            document.getElementById('score-o').style = ''
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