function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

document.getElementById('playButton').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];
    
    if (!validChoices.includes(userInput)) {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(userInput, computerChoice);

    document.getElementById('result').innerText = `You chose: ${userInput}\nComputer chose: ${computerChoice}\n${result}`;
});

document.getElementById('resetButton').addEventListener('click', () => {
    document.getElementById('userInput').value = '';
    document.getElementById('result').innerText = '';
});
