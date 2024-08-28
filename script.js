//const url = "https://moviedatabase8.p.rapidapi.com/Search/";
const resultsBox = document.getElementById("resultsBox");
let moviesResult;

//random movie api
const randomUrl = "https://moviedatabase8.p.rapidapi.com/Random/12";
const randomOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3802ae3cccmsh5d62e521d884914p1d4cafjsn253bdc5e8ed6",
    "x-rapidapi-host": "moviedatabase8.p.rapidapi.com",
  },
};

let initMovies;

/*
initMovies = [
  {
    _id: "65ef3f42675dde8010854ec1",
    id: 396810,
    title: "The Last Word",
    vote_average: 6.564,
    vote_count: 330,
    status: "Released",
    release_date: "2017-03-03T00:00:00.000Z",
    revenue: 1783421,
    runtime: 108,
    adult: false,
    backdrop_path: "/xtmyWSkRNrCw66rzaTfUcSMiWMk.jpg",
    budget: 0,
    homepage: "http://www.bleeckerstreetmedia.com/thelastword",
    imdb_id: "tt5023260",
    original_language: "en",
    original_title: "The Last Word",
    overview:
      "A retired businesswoman – who tries to control everything around her – decides to write her own obituary. A young journalist takes up the task of finding out the truth, and the result is a life-altering friendship.",
    popularity: 11.697,
    poster_path:
      "https://image.tmdb.org/t/p/original//zvwBd0nsW5OqTs4ndEJLQY62leF.jpg",
    tagline: "An unexpected friendship that began at the end.",
    genres: "Comedy, Drama",
    production_companies:
      "Franklin Street, Myriad Pictures, Parkside Pictures, Wondros",
    production_countries: "United States of America",
    spoken_languages: "English",
  },
  {
    _id: "65ef3f3b675dde801085480d",
    id: 8766,
    title: "Hellraiser: Bloodline",
    vote_average: 5.217,
    vote_count: 466,
    status: "Released",
    release_date: "1996-03-08T00:00:00.000Z",
    revenue: 16675000,
    runtime: 86,
    adult: false,
    backdrop_path: "/1xgnmicPKkugOm7jrvN9ZwcBgnT.jpg",
    budget: 4000000,
    imdb_id: "tt0116514",
    original_language: "en",
    original_title: "Hellraiser: Bloodline",
    overview:
      "Three generations of the same family deal with the consequences of unleashing the forces of hell.",
    popularity: 21.491,
    poster_path:
      "https://image.tmdb.org/t/p/original//eXeQKyfWzcsYYbiEtWy189cTBdB.jpg",
    tagline:
      "The past, the present and the future will all meet at the crossroads of hell!",
    genres: "Horror, Science Fiction",
    production_companies:
      "Dimension Films, Miramax, Trans Atlantic Entertainment",
    production_countries: "United States of America",
    spoken_languages: "English",
  },
]*/

/*
async function getRandomMovies() {
  try {
    const response = await fetch(randomUrl, randomOptions);
    const result = await response.json();
    initMovies = result;
    console.log(result);
    for (let i = 0; i < initMovies.length; i++) {
      const movie = initMovies[i];
      //style all movies
      //console.log(movie);
      const movieBox = document.createElement("div");
      movieBox.classList.add("flexColumn");
      movieBox.classList.add("movieBox");
      const moviePosterContainer = document.createElement("div");
      moviePosterContainer.classList.add("moviePosterContainer");
      moviePosterContainer.classList.add("flex");
      movieBox.appendChild(moviePosterContainer);
      const movieTitle = document.createElement("p");
      movieTitle.innerHTML += movie.title;
      movieTitle.classList.add("movieTitle");
      movieBox.appendChild(movieTitle);
      const rating = document.createElement("p");
      rating.classList.add("popularity");
      rating.innerHTML += movie.popularity;
      movieBox.appendChild(rating);
      const posterImg = document.createElement("img");
      posterImg.classList.add("posterImg");
      posterImg.src = movie.poster_path;
      moviePosterContainer.appendChild(posterImg);
      //add to results box
      console.log(movieBox);
      resultsBox.appendChild(movieBox);
      console.log(resultsBox);
    }
  } catch (error) {
    console.error(error);
    return alert("random movies failed with an error.");
  }
}*/

/** advanced movie api */
let advancedMovies;
/*
const advancedUrl =
  "https://advanced-movie-search.p.rapidapi.com/search/movie?query=kong&page=1";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3802ae3cccmsh5d62e521d884914p1d4cafjsn253bdc5e8ed6",
    "x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
  },
};*/

/*
async function getAdvancedMovies() {
  try {
    const response = await fetch(advancedUrl, options);
    advancedMovies = await response.json();
    console.log(advancedMovies);
  } catch (error) {
    console.error(error);
  }
}*/

//search movies using omdb api
async function searchMovieTitle(movieTitle) {
  //use omdb api to get movies
  try {
    let searchUrl = `https://www.omdbapi.com/?apikey=52703dd9&s=${movieTitle}`;
    console.log(searchUrl);
    const response = await fetch(searchUrl);
    const result = await response.json();
    moviesResult = result.Search;
    console.log(moviesResult);
    for (let i = 0; i < moviesResult.length; i++) {
      const movie = moviesResult[i];
      //style all movies
      //console.log(movie);
      const movieBox = document.createElement("div");
      movieBox.classList.add("flexColumn");
      movieBox.classList.add("movieBox");
      const moviePosterContainer = document.createElement("div");
      moviePosterContainer.classList.add("moviePosterContainer");
      moviePosterContainer.classList.add("flex");
      movieBox.appendChild(moviePosterContainer);
      const movieTitle = document.createElement("p");
      movieTitle.innerHTML += movie.Title;
      movieTitle.classList.add("movieTitle");
      movieBox.appendChild(movieTitle);
      const rating = document.createElement("p");
      rating.classList.add("popularity");
      rating.innerHTML += movie.Year;
      movieBox.appendChild(rating);
      const posterImg = document.createElement("img");
      posterImg.classList.add("posterImg");
      posterImg.src = movie.Poster;
      moviePosterContainer.appendChild(posterImg);
      //add to results box
      console.log(movieBox);
      resultsBox.appendChild(movieBox);
      console.log(resultsBox);
    }
  } catch (error) {
    console.error(error);
    return alert("Search movies failed with an error.");
  }
}

//show after user inserts input
//getAdvancedMovies();

//user clicks the search icon

const searchBtn = document.getElementById("searchBtn");
const mainSearchInput = document.getElementById("mainSearch");
const loadBkg = document.getElementById("loadBkg");
const loadBar = document.getElementById("loadBar");
const loadBox1 = document.getElementById("loadBox-1");
const loadBox2 = document.getElementById("loadBox-2");
const loadBox3 = document.getElementById("loadBox-3");

mainSearchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    //reset search container results
    resetMovies();
    writeLoadBox();
    loadBkg.style.visibility = "visible";
    loadBar.style.visibility = "visible";
    loadBox1.style.display = "flex";
    loadBox2.style.display = "flex";
    loadBox3.style.display = "flex";
    //execute search
    let searchValue = mainSearchInput.value;
    console.log(searchValue);
    setTimeout(() => {
      if (!searchValue) {
        loadBkg.style.visibility = "hidden";
        loadBar.style.visibility = "hidden";
        loadBox1.style.display = "none";
        loadBox2.style.display = "none";
        loadBox3.style.display = "none";
        alert("Please enter something to be searched!");
      } else {
        loadBkg.style.visibility = "hidden";
        loadBar.style.visibility = "hidden";
        loadBox1.style.display = "none";
        loadBox2.style.display = "none";
        loadBox3.style.display = "none";
        resetMovies();
        return searchMovieTitle(searchValue);
      }
    }, 3000);
  }
});

searchBtn.addEventListener("click", () => {
  //reset search container results
  resetMovies();
  writeLoadBox();
  loadBkg.style.visibility = "visible";
  loadBar.style.visibility = "visible";
  console.log(loadBox1);
  console.log(loadBox1.style.display);
  loadBox1.style.display = "flex";
  loadBox2.style.display = "flex";
  loadBox3.style.display = "flex";
  console.log(loadBox1.style.display);
  //execute search
  let searchValue = mainSearchInput.value;
  console.log(searchValue);
  setTimeout(() => {
    if (!searchValue) {
      loadBkg.style.visibility = "hidden";
      loadBar.style.visibility = "hidden";
      loadBox1.style.display = "none";
      loadBox2.style.display = "none";
      loadBox3.style.display = "none";
      alert("Please enter something to be searched!");
    } else {
      loadBkg.style.visibility = "hidden";
      loadBar.style.visibility = "hidden";
      loadBox1.style.display = "none";
      loadBox2.style.display = "none";
      loadBox3.style.display = "none";
      resetMovies();
      return searchMovieTitle(searchValue);
    }
  }, 3000);
});

const resetMovies = () => {
  //reset movies before every search
  resultsBox.innerHTML = "";
};

/*
function loadState() {
  //run loading animation  
}*/

const writeLoadBox = () => {
  for (let i = 0; i < 3; i++) {
    //create new box
    const newBox = document.createElement("div");
    newBox.classList.add("movieBox", "flexColumn", "loadBox");
    newBox.id = `loadBox-${i + 1}`;
    const moviePoster = document.createElement("div");
    moviePoster.classList.add("moviePosterContainer", "posterLoad", "flex");
    newBox.appendChild(moviePoster);
    const movieTitle = document.createElement("p");
    movieTitle.classList.add("movieTitleLoad");
    newBox.appendChild(movieTitle);
    const popularityLoad = document.createElement("p");
    popularityLoad.classList.add("popularityLoad");
    newBox.appendChild(popularityLoad);
    resultsBox.appendChild(newBox);
  }
};

resetMovies();

const mobileMenu = document.getElementById("mobileMenu");
const menuBlock = document.getElementById("menuBlock");
const closeMenu = document.getElementById("closeMenu");

mobileMenu.addEventListener("click", () => {
  //open menu
  menuBlock.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  //close menu
  menuBlock.classList.remove("open");
});

const searchHome = localStorage.getItem("homeSearch");
console.log(searchHome);
if (searchHome) {
  const homeSearchValue = localStorage.getItem("searchItem");
  resetMovies();
  writeLoadBox();
  loadBkg.style.visibility = "visible";
  loadBar.style.visibility = "visible";
  loadBox1.style.display = "flex";
  loadBox2.style.display = "flex";
  loadBox3.style.display = "flex";
  //execute search
  let searchValue = homeSearchValue;
  console.log(searchValue);
  setTimeout(() => {
    if (!searchValue) {
      loadBkg.style.visibility = "hidden";
      loadBar.style.visibility = "hidden";
      loadBox1.style.display = "none";
      loadBox2.style.display = "none";
      loadBox3.style.display = "none";
      alert("Please enter something to be searched!");
    } else {
      loadBkg.style.visibility = "hidden";
      loadBar.style.visibility = "hidden";
      loadBox1.style.display = "none";
      loadBox2.style.display = "none";
      loadBox3.style.display = "none";
      resetMovies();
      localStorage.clear();
      return searchMovieTitle(searchValue);
    }
  }, 3000);
}
