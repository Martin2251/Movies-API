const results = document.querySelector('#results');

const searchMovies =(keyword) => {
 const apiURL = `http://www.omdbapi.com/?s=${keyword}&apikey=24885019`
 fetch(apiURL)
  .then(response => response.json ())
  .then((data) => {
  data.Search.forEach((movie) => {
    const newmovie = `<li>
      <img src="${movie.Poster}" />
      <p>${movie.Title}</p>
    </li>`
    results.insertAdjacentHTML('beforeend', newmovie)
  });
});

};

const searchFrom = document.querySelector("#search-movies")

searchFrom.addEventListener("submit", (event) => {
event.preventDefault();
results.innerHTML = "";
const keyword = document.querySelector("#keyword").value;
searchMovies(keyword);
});

searchMovies("Harry Potter");
