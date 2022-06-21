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
  
  
  function setUpMovieDetails(movie) {
  
      const movieTitle = document.getElementById('title')
      const movieRuntime = document.getElementById('runtime')
      const movieDescription = document.getElementById('film-info')
      const movieShowtime = document.getElementById('showtime')
      const movieTickets = document.getElementById('ticket-num')
      const moviePoster = document.getElementById('poster')
  
      let tickets = movie.capacity - movie.tickets_sold
  
      movieTitle.innerHTML = movie.title
      movieRuntime.innerHTML = movie.runtime
      movieDescription.innerHTML =  movie.description
      movieShowtime.innerHTML = movie.showtime
      movieTickets.innerHTML = tickets
      moviePoster.setAttribute("src",movie.poster)
      movieTickets.style.display="none"
      showRemainingTickets(movieTickets);
  }
  
  function showRemainingTickets(movieTickets){
      const remainingTicketsButtton=document.getElementById('buy-ticket')
      remainingTicketsButtton.addEventListener('click', ()=>{
          movieTickets.style.display="block"
  
      })
  
      
  }
  const btn = document.getElementById('buy-ticket')
          btn.addEventListener('click', function(){
              let remTickets = document.querySelector('#ticket-num').textContent;
              document.querySelector('#ticket-num').textContent  = remTickets-1
              if( remTickets===0){
                  return "no movies"
              }
              return 0
          })
  