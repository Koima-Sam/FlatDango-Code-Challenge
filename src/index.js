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

            fetch(`http://localhost:3000/films/${i + 1}`)

            .then(res => res.json())
            .then(movie => {
                // setUpMovieDetails(movie)
            })

        })
    }
}
