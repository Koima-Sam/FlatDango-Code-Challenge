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
function displayMovie(movie){
    const listHolder = document.getElementById('films')
    const li = document.createElement('li')
    li.innerHTML=`<li>${movie.title}</li>`
    listHolder.appendChild(li)
    console.log(li)
}
