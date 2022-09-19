let board;
let numJugada = 1;

function crearTablero(nFil, nCol){
    const filas = []

    for (let i = 0; i < nFil; i++) {
        const casillas = []

        for (let j = 0; j < nCol; j++) {
            casillas.push({
                seMuestra : false,
                emoji : null
            })
        }

        rows.push(casillas)
    }

    return filas
}

function setValue(board, fila, columna, value) {
    board[fila][columna] = value
}

const renderizarBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
        const casillas = board[i]
        for (let j=0; j < casillas.length; j++) {
            const butCasilla = document.getElementById(`${i}_${j}`) // string interpolation
            if (casillas[j].seMuestra) {
                butCasilla.innerHTML = casillas[j].emoji
            }else {
                butCasilla.innerHTML = ""
            }
            
        }
    }
}

const casillaOnClick = (fila, columna) => {     
    if(numJugada=1){
        const casilla = setValue(board, row, {
            casilla.seMuestra = true
            casilla.emoji : "&#xF151;"
        })
        numJugada++
    }else{
        const casilla = setValue(board, row, {
            casilla.seMuestra = true
            casilla.emoji : "&#xF151;"
        })
        numJugada++
    }
    
    renderizarBoard(board)
}

const main = () => {
    board = crearTablero(3,3)
}

main()