let guessesRemaining = 5
let history = []
let randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber)
let time = 0

//guess function
function guessNumber() {
    let userNumber = document.getElementById("guessingArea").value
    console.log(userNumber, "random", randomNumber)

    //making sure user doesnt repeat number
    if(history.includes(userNumber)){
        document.getElementById("resultArea").innerHTML = `you have already entered that number`
        return
    }

    //making sure user enters a number between 0-100
    if (userNumber === "") {
        document.getElementById("resultArea").innerHTML = `type a number between 1 to 100`
        return;
    }
    if (userNumber <= 0 || userNumber > 100) {
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

    //main guessing function (too high or too low)
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

//reset function
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

//timer
function timecounting() {
    myTime = setInterval(() => {
        time += 1
        if(time >= 15){
            document.getElementById("timecount").innerHTML = `TIME'S UP`
            timeOut()
            return;
        }
        document.getElementById("timecount").innerHTML = `${time} second(s) elapsed`
    }, 1000)
}

function timeOut() {
    clearInterval(myTime)
}

timecounting()