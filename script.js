document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("movieForm");
    const movieList = document.getElementById("movieList");

    function loadMovies() {
      const movies = JSON.parse(localStorage.getItem("movies")) || [];
      movieList.innerHTML = movies
        .map((movie, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${movie.name}</td>
            <td>${movie.rating}</td>
            <td>
              <button class="btn btn-danger btn-sm" onclick="deleteMovie(${index})">Excluir</button>
            </td>
          </tr>
        `)
        .join("");
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("movieName").value;
      const rating = document.getElementById("movieRating").value;
  
      const movies = JSON.parse(localStorage.getItem("movies")) || [];
      movies.push({ name, rating });
      localStorage.setItem("movies", JSON.stringify(movies));
  
      form.reset();
      loadMovies();
    });
    window.deleteMovie = (index) => {
      const movies = JSON.parse(localStorage.getItem("movies")) || [];
      movies.splice(index, 1);
      localStorage.setItem("movies", JSON.stringify(movies));
      loadMovies();
    };
    loadMovies();
  });
  