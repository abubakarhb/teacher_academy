$(function () {
  let urll = location.pathname.split("/")
  $('.menuUl a[href="' + urll[urll.length - 1] + '"]').addClass('active');
  console.log(urll[urll.length - 1])
  // console.log('.menuUl a[href^="/' + location.pathname.split("/")[2] + '"]')
});


let nav2 = document.querySelector('.nav2')
nav2.innerHTML +=`
<nav class="navbar navbar-expand-lg navbar-light bg-dark menuUl">
  <div class="container">
    <a class="navbar-brand pr-0" href="client_home.html" id="home" style="color:#f7f7f7"><img src="./" width="20%" alt="">Steamlance</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="candidate.html">CANDIDATES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="tests.html">TEST</a>
            </li>
            <li class="nav-item">
          <a class="nav-link" href="interview.html">INTERVIEWS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="library.html">LIBRARY</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="pricing.html">PRICING</a>
      </li>
      </ul>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item mt-1">
                <div class="set" onclick="search1()">
                  <i class="fas fa-search nav-link" ></i>
                  Search
                </div>
              <input type="search" class="search form-control" id="exampleInputEmail1" placeholder="Search Candidate" aria-describedby="emailHelp">
            </li>
            <li class="nav-item">
            <div class="dropdown ">
              <a class="btn dropdown-toggle nav-link" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="far fa-user" style="font-size:20px"></i>
              </a>
              <ul class="dropdown-menu dp" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="profile.html">Profile</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="settings.html">Settings</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Role Management</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Team Management</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Pricing</a></li>
                 <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
            </div>
            </li>
            </ul>
    </div>
  </div>
  </nav>`

  let footer2 = document.querySelector('.footer1')
  footer2.innerHTML +=`
  <div class="container">
      <div class="row">
        <div class="col-2">
          <a href="" class="footer-item" style="color:#f3f7f7">
           About
          </a>
        </div>
        <div class="col-1">
          <a href="" class="footer-item" style="color:#f3f7f7">
            Blog
          </a>
        </div>
        <div class="col-2">
          <a href="" class="footer-item" style="color:#f3f7f7">
            Support
          </a>
        </div>
        <div class="col-2">
          <a href="" class="footer-item" style="color:#f3f7f7">
            API
          </a>
        </div>
        <div class="col-2">
          <a href="" class="footer-item" style="color:#f3f7f7">
            Terms of Services
          </a>
        </div>
        <div class="col-2">
          <a href="" class="footer-item" style="color:#f3f7f7">
            Privacy Policy
          </a>
        </div>
        </div>
      </div>`

      let myVar;

function myFunction() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}