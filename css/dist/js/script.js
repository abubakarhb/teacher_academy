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

function closeModal(){
 document.querySelector('.modal').style.display = "none";
}

function search1(){
    document.querySelector('.search').style.display = "block";
    document.querySelector('.set').style.display = "none";
}

// profile checkbox
function checkWork(){
let check = document.querySelector('.select22');
if (check.style.display === "none") {
    check.style.display = "block";
  } else {
    check.style.display = "none";
  }
}
function checkSch(){
    let check = document.querySelector('.select222');
    if (check.style.display === "none") {
        check.style.display = "block";
      } else {
        check.style.display = "none";
      }
    }

    
    window.onload = () => {
        let loader = document.querySelector("#loader")
        loader.style.display = "none"
        // loader.classList.remove("hidden")
        // console.log(document.querySelector("body"))
        // document.body.innerHTML += `<section id='loader' class="d-flex justify-content-center align-items-center"><img src="./img/loader/78494-loader.gif" alt=""></section>`
    }
