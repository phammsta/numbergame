let guessesRemaining = 5
let history = []
let randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber)
let time = 0

//entire "GUESS" button
function guessNumber() {
    let userNumber = document.getElementById("guessingArea").value
    console.log(userNumber, "random", randomNumber)

    //making sure user enters a number
    if (userNumber === "") {
        document.getElementById("resultArea").innerHTML = `type a number between 1 to 100`
        return;
    }

    //attempts going down each guess
    guessesRemaining = guessesRemaining - 1
    if (guessesRemaining <= 0) {
        document.getElementById("guessesRemaining").innerHTML = 0
        document.getElementById("resultArea").innerHTML = `GAME OVER`
        return;
    } document.getElementById("guessesRemaining").innerHTML = `${guessesRemaining} guesses remaining`

    //main guessing function
    if (userNumber > randomNumber) {
        document.getElementById("resultArea").innerHTML = `Too High`
    } else if (userNumber < randomNumber) {
        document.getElementById("resultArea").innerHTML = `Too Low`
    } else if (userNumber == randomNumber) {
        document.getElementById("resultArea").innerHTML = `CORRECT`
    }

    //history
    history.push(userNumber)
    console.log(history)
    document.getElementById("historyArea").innerHTML = `history: ${history}`

}

function resetGame() {
    guessesRemaining = 5
    document.getElementById("guessesRemaining").innerHTML = `${guessesRemaining} guesses remaining`
    randomNumber = Math.floor(Math.random() * 100) + 1
    console.log(randomNumber)
    history = []
    document.getElementById("historyArea").innerHTML = history
    document.getElementById("resultArea").innerHTML = ``
    time = 0
    document.getElementById("timecount").innerHTML = `${time} second(s) elapsed`
}

function timecounting() {
    myTime = setInterval(() => {
        time += 1
        document.getElementById("timecount").innerHTML = `${time} second(s) elapsed`
    }, 1000)
}
timecounting()