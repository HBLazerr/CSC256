// List of project links
const projects = [
    { name: 'HeartsBreak Product Website', url: 'https://youtu.be/TxmiDwi8f_Q' },
    { name: 'Fair Game', url: 'https://fair-game.org' },
    { name: 'Rust Surveillance System', url: 'https://youtu.be/_MMuH-aQpq4' },
    { name: 'Constitution Website', url: 'https://youtu.be/rr5gOYXMct8' },
    { name: 'Meet Daniel', url: 'https://snack.expo.dev/@lazerr/meet-daniel' },
    { name: 'RiMo-Universe', url: 'https://snack.expo.dev/@lazerr/github.com-hblazerr-rimo-universe' },
    { name: 'Memory Lane', url: 'https://snack.expo.dev/@lazerr/memory-lane' },
    { name: 'POA Mobile App', url: 'https://snack.expo.dev/@lazerr/phantom-operations-agency' }
];

// Shuffles the array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// run the shuffle
shuffle(projects);

// Select first 3 projects from the shuffled array
const selectedProjects = projects.slice(0, 3);

// Get project-links div
// & create the links
const projectLinksDiv = document.getElementById('project-links');

selectedProjects.forEach(project => {
    const link = document.createElement('a');
    link.href = project.url;
    link.target = '_blank'; // opens link in a new tab
    link.innerHTML = `<p class="socialLink">${project.name}</p>`; // creates new element for link
    projectLinksDiv.appendChild(link);
});
