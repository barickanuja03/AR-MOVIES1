
let movieSearch=document.getElementById("search-btn");
let movieDetails=document.getElementById("result");
let Movie = () => {
    let movieName = document.getElementById("search-movie").value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=ee4b7d4a`;
    if (movieName.length <= 0) 
      {
        movieDetails.innerHTML = `<h3 class="message">Enter A Movie Name</h3>`;
      }
    else {
      fetch(url)
        .then((data) => data.json())
        .then((response) => {
          console.log(response);
          if (response.Response === "True") {
            movieDetails.innerHTML = `
            <div class="info">
                  <img src=${response.Poster} class="movie-img">
                  <div>
                    <h3>${response.Title}</h3>
                      <div class="rating">
                          <h4><b>Movie Rating :</b></h4>
                          <div class="rating">${response.imdbRating}</div>
                      </div>
                      <div class="details">
                           
                          <span><b>Released Date :</b> ${response.Released}</span>
                          <div><b>Duration :</b> ${response.Runtime}</div>
                      </div>
                      <div class="genre">
                           <div>${response.Genre}</div>
                      </div>
                  </div>
              </div>
              <h5>Language :</h5>
              <p>${response.Language}</p>
              <h5>Actors  :</h5>
              <p>${response.Actors}</p> 
              <h5>Writer :</h5>
              <p>${response.Writer}</p>
              <h5>Director :</h5>
              <p>${response.Director}</p>
              <h5>Plot :</h5>
              <p>${response.Plot}</p>
             
          `;
          }
          else {
            movieDetails.innerHTML = `<h3 class='message'>${response.Error}</h3>`;
          }
        })
        .catch(() => {
            movieDetails.innerHTML = `<h3 class="message">movie not found</h3>`;
        });
    }
  };
  movieSearch.addEventListener("click", Movie);
  window.addEventListener("load", Movie);