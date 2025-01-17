let currentPlayer = "X";
let arr = [null, null, null, null, null, null, null, null, null];

function resetBoard() {
    location.reload(); 

}
function checkWinner() {
    if (
        (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
        (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
    ) {
        alert(`Player ${currentPlayer} wins!`)
        resetBoard()
        return;
    }
    if (!arr.some((e) => e === null)) {
        alert("It's a tie!");
        resetBoard();
    }
}



function handleClick(el){

    const id = Number(el.id)
    if(arr[id]!== null){
        return
    }
    arr[id] = currentPlayer;
    el.innerText = currentPlayer  
    checkWinner()
    if (currentPlayer === "X"){
        currentPlayer = "O";
    }else {
        currentPlayer = "X";
    }
}