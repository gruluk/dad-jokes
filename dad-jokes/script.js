const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    //want json file. We automatically get http
   
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/', config)
        .then((res) =>res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke
        })
}