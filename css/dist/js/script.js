<<<<<<< HEAD
function searchInput() {
  document.querySelector('.search').style.display = "block";
  document.querySelector('.search-off').style.display = "block";
  document.querySelector('.search-on').style.display = "none";

}

function searchInput1() {
  document.querySelector('.search').style.display = "none";
  document.querySelector('.search-off').style.display = "none";
  document.querySelector('.search-on').style.display = "block";

}

function closeModal() {
  document.querySelector('.modal').style.display = "none";
}

function search1() {
  document.querySelector('.search').style.display = "block";
  document.querySelector('.set').style.display = "none";
}

// profile checkbox
function checkWork() {
  let check = document.querySelector('.select22');
  if (check.style.display === "none") {
    check.style.display = "block";
  } else {
    check.style.display = "none";
  }
}
function checkSch() {
  let check = document.querySelector('.select222');
  if (check.style.display === "none") {
    check.style.display = "block";
  } else {
    check.style.display = "none";
  }
}


window.addEventListener("click", () => {
  let loader = document.querySelector("#loader")
  if (loader !== null) {
    loader.style.display = "none"
  }
})
=======
function searchInput() {
  document.querySelector('.search').style.display = "block";
  document.querySelector('.search-off').style.display = "block";
  document.querySelector('.search-on').style.display = "none";

}

function searchInput1() {
  document.querySelector('.search').style.display = "none";
  document.querySelector('.search-off').style.display = "none";
  document.querySelector('.search-on').style.display = "block";

}

function closeModal() {
  document.querySelector('.modal').style.display = "none";
}

function search1() {
  document.querySelector('.search').style.display = "block";
  document.querySelector('.set').style.display = "none";
}

// profile checkbox
function checkWork() {
  let check = document.querySelector('.select22');
  if (check.style.display === "none") {
    check.style.display = "block";
  } else {
    check.style.display = "none";
  }
}
function checkSch() {
  let check = document.querySelector('.select222');
  if (check.style.display === "none") {
    check.style.display = "block";
  } else {
    check.style.display = "none";
  }
}


window.addEventListener("click", () => {
  let loader = document.querySelector("#loader")
  if (loader !== null) {
    loader.style.display = "none"
  }
})
>>>>>>> b17072a80f97acc803350c4299691408710fc97d
