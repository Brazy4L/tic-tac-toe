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
        if (one === '✕' && two === '✕' && three === '✕' || four === '✕' && five === '✕' && six === '✕' || seven === '✕' && eight === '✕' && nine === '✕' || one === '✕' && four === '✕' && seven === '✕' || two === '✕' && five === '✕' && eight === '✕' || three === '✕' && six === '✕' && nine === '✕' || one === '✕' && five === '✕' && nine === '✕' || three === '✕' && five === '✕' && seven === '✕') {
            console.log('Player 1 is the winner!');
        } else if (one === '⭘' && two === '⭘' && three === '⭘' || four === '⭘' && five === '⭘' && six === '⭘' || seven === '⭘' && eight === '⭘' && nine === '⭘' || one === '⭘' && four === '⭘' && seven === '⭘' || two === '⭘' && five === '⭘' && eight === '⭘' || three === '⭘' && six === '⭘' && nine === '⭘' || one === '⭘' && five === '⭘' && nine === '⭘' || three === '⭘' && five === '⭘' && seven === '⭘') {
            console.log('Player 2 is the winner!');
        } else if (one !== '' && two !== '' && three !== '' && four !== '' && five !== '' && six !== '' && seven !== '' && eight !== '' && nine !== '') {
            console.log('Tie!');
        }
    }

    const restart = () => {
        document.getElementById('one').innerText = '';
        document.getElementById('two').innerText = '';
        document.getElementById('three').innerText = '';
        document.getElementById('four').innerText = '';
        document.getElementById('five').innerText = '';
        document.getElementById('six').innerText = '';
        document.getElementById('seven').innerText = '';
        document.getElementById('eight').innerText = '';
        document.getElementById('nine').innerText = '';
    }

    return {
        play,
    }
})();

Game.play();