const jokeElement = document.getElementById('joke');
const newJokeBtn = document.getElementById('newJokeBtn');

async function fetchJoke () {
    try {
        jokeElement.textContent = 'Joke loading...'
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        jokeElement.textContent = data.value;
    } catch (error) {
        jokeElement.textContent = 'Error fetching joke!';
        console.error('Error fetching joke:', error);
    }
}

newJokeBtn.addEventListener('click',fetchJoke);

fetchJoke();