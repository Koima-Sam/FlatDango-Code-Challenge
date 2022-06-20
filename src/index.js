// Your code here
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
