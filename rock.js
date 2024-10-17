function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}

function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let choice;

    do {
        choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    } while (!choices.includes(choice)); // Keep prompting until a valid choice is made

    return choice;
}