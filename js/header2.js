$(function () {
  let urll = location.pathname.split("/")
  $('.menuUl a[href="' + urll[urll.length - 1] + '"]').addClass('active');
  console.log(urll[urll.length - 1])
  // console.log('.menuUl a[href^="/' + location.pathname.split("/")[2] + '"]')
});



let nav2 = document.querySelector('.nav2');
nav2.innerHTML +=`
<nav class="navbar navbar-expand-lg navbar-light bg-dark menuUl">
  <div class="container">
    <a class="navbar-brand pr-0" href="" id="home"><img src="./" width="20%" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="developer.html">PRACTICE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="certify.html">CERTIFICATION</a>
            </li>
            <li class="nav-item">
          <a class="nav-link" href="compete.html">COMPETE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Jobs.html">JOBS</a>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item mt-1">
                <div class="set" onclick="search1()">
                  <i class="fas fa-search nav-link" ></i>
                  Search
                </div>
              <input type="search" class="search form-control" id="exampleInputEmail1" placeholder="search" aria-describedby="emailHelp">
            </li>
            <li class="nav-item mt-1">
              <div class="dropdown">
              <a class="btn  nav-link" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="far fa-comment-alt" style="font-size:18px" ></i>
              </a>
              <div class="dropdown-menu dp" aria-labelledby="dropdownMenuLink" style="width:400px; padding:0px !important; left:-10rem !important">
              <div class="header" style="background-color: black; color:#fff; text-align: center; padding: 5px;">
              <h5>messages</h5>
            </div>
            <div class="contenting" style="padding: 10px;">
              <div class="dash" style="border: 1px dashed #000;padding: 40px;">
                <small style="align: center;">You have no unread messages.</small>
              </div>
            </div>
            <hr>
            <a href="messages.html" style="padding:0px 0px 0px 150px;text-decoration: none; color:#576871;">Show All</a>
              </div>
            </div>
            </li>
            <li class="nav-item mt-1">
            <div class="dropdown">
              <a class="btn  nav-link" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="far fa-bell" style="font-size:20px" ></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              2+
            <span class="visually-hidden">unread messages</span>
             </span>
              </a>
              <div class="dropdown-menu dp" aria-labelledby="dropdownMenuLink" style="width:400px; padding:0px !important; left:-12rem !important">
              <div class="header" style="background-color: black; color:#fff; text-align: center; padding: 5px;">
              <h5>messages</h5>
            </div>
            <div class="contenting" style="padding: 10px;">
              <div class="dash">
              <a class="d-flex" href="" style="text-decoration: none; color:#576871;">
              <span class="iconify" data-icon="mdi:bullhorn" style="font-size:20px"></span>
              <p style="margin-left: 15px">Get interview ready for top companies.<br>
                <small style="color: #91a0a8;">3 months ago</small>
              </p>
              </a>
                <a class="d-flex" href="" style="text-decoration: none; color:#576871;">
                <span class="iconify" data-icon="mdi:bullhorn" style="font-size:20px;"></span>
                <p style="margin-left: 15px">Improve your coding skills. Join our 30 Days of Code challenge!<br>
                  <small style="color: #91a0a8;">3 months ago</small>
                </p>
                </a>
              </div>
            </div>
            <hr>
            <a href="messages.html" style="padding:0px 0px 0px 170px;text-decoration: none; color:#576871;">Show All</a>
              </div>
            </div>
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
                <li><a class="dropdown-item" href="#">Submission</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Administration</a></li>
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
        <div class="col-1">
          <a href="" class="footer-item">
            Scoring
          </a>
        </div>
        <div class="col-1">
          <a href="" class="footer-item">
            FAQ
          </a>
        </div>
        <div class="col-1">
          <a href="" class="footer-item">
            About US
          </a>
        </div>
        <div class="col-1">
          <a href="" class="footer-item">
            Support
          </a>
        </div>
        <div class="col-1">
          <a href="" class="footer-item">
            Careers
          </a>
        </div>
        <div class="col-2">
          <a href="" class="footer-item">
            Terms of Services
          </a>
        </div>
        <div class="col-2">
          <a href="" class="footer-item">
            Privacy Policy
          </a>
        </div>
        <div class="col-2">
          <a href="" class="footer-item">
            Request a Feature
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