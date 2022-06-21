// Your code here
const listHolder = document.getElementById('films')
document.addEventListener('DOMContentLoaded', ()=>{
    fetchMovies()
})

//Create fetch function
function fetchMovies(){
    fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(movies => {
        movies.forEach(movie => {
            displayMovie(movie)
        });
    })
}

function displayMovie(movie){
    const li = document.createElement('li')
    li.style.cursor="pointer"
    li.innerHTML=`<li>${movie.title}</li>`
    listHolder.appendChild(li)
    addClickEvent()
}
function addClickEvent(){
    let children=listHolder.children
    // console.log(children)

    for(let i=0; i<children.length; i++){
        let child=children[i]
        // console.log(child)
    

        child.addEventListener('click',() => {

            fetch(`http://localhost:3000/films/${i}`)

            .then(res => res.json())
            .then(movie => {
                setUpMovieDetails(movie)
            })

        })
    }
}
function setUpMovieDetails(childMovie){
    const preview = document.getElementById('poster')
    preview.src = childMovie.poster;

    const movieTitle = document.querySelector('#title');
    movieTitle.textContent = childMovie.title;
    const movieTime = document.querySelector('#runtime');
    movieTime.textContent = childMovie.runtime;
    const movieDescription = document.querySelector('#film-info');
    movieDescription.textContent = childMovie.description;
    const showTime = document.querySelector('#showtime')
    showTime.textContent = childMovie.showtime;
    const tickets  = document.querySelector('#ticket-num')
    tickets.textContent = childMovie.tickets_sold;
}
const btn = document.getElementById('buy-ticket')
        btn.addEventListener('click', function(){
            let remTickets = document.querySelector('#ticket-num').textContent;
            document.querySelector('#ticket-num').textContent  = remTickets-1
        })
