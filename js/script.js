const Game = (() => {
    const play = () => {
        for (let i = 0; i < 9; i++) {
            const play = document.querySelectorAll('.square')[i];
            play.addEventListener('click', () => {
                if (play.innerText === '') {
                    play.innerText = flow();
                }
            })
        }
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

    const playerOne = () => {

    }

    const playerTwo = () => {

    }
    

    return {
        play,
    }
})();

Game.play();