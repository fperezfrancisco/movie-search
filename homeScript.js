// input functionality

const searchBtn = document.getElementById("searchBtn");
const mainSearchInput = document.getElementById("mainSearch");

mainSearchInput.addEventListener("keypress", (e) => {
  localStorage.removeItem("searchItem");
  localStorage.removeItem("homeSearch");
  if (e.key === "Enter") {
    e.preventDefault();
    //execute search
    let searchValue = mainSearchInput.value;
    console.log(searchValue);
    if (!searchValue) {
      alert("Please enter something to be searched!");
    } else {
      //switch to index page
      localStorage.setItem("homeSearch", "Yes");
      localStorage.setItem("searchItem", searchValue);
      location.href = "index.html";
    }
  }
});

searchBtn.addEventListener("click", () => {
  //reset search container results
  //execute search
  let searchValue = mainSearchInput.value;
  console.log(searchValue);
  localStorage.removeItem("searchItem");
  localStorage.removeItem("homeSearch");
  if (!searchValue) {
    alert("Please enter something to be searched!");
  } else {
    localStorage.setItem("homeSearch", "Yes");
    localStorage.setItem("searchItem", searchValue);
    //switch to index page
    location.href = "index.html";
    resetMovies();
    return searchMovieTitle(searchValue);
  }
});

const resetMovies = () => {
  //reset movies before every search
  resultsBox.innerHTML = "";
};

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
