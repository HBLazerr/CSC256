function submitForm() {
    // Gets users input from the form fields
    const username = document.getElementById('username').value;
    const weapons = document.getElementById('weapons').value;
    const health = document.getElementById('health').value;
    const points = document.getElementById('points').value;

    // Sets output message with labels and user input values
    const outputMessage = `
            <p><b>Username:</b> ${username}</p>
            <p><b>Weapons:</b> ${weapons}</p>
            <p><b>Health/Damage:</b> ${health}</p>
            <p><b>Point Total:</b> ${points}</p>
        `;

    // Display output message to user
    document.getElementById('output').innerHTML = outputMessage;
}
