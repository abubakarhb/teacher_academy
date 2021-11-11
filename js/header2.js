let nav2 = document.querySelector('.nav2')
nav2.innerHTML +=`
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
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
        <li class="nav-item">
          <a class="nav-link" href="">LEADERBOARD</a>
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
              <a class="nav-link" href=""><i class="far fa-comment-alt" style="font-size:18px" ></i></a>
            </li>
            <li class="nav-item mt-1">
              <a class="nav-link position-relative" href=""><i class="far fa-bell" style="font-size:20px" ></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                 2+
               <span class="visually-hidden">unread messages</span>
                </span>
              </a>
            </li>
            <li class="nav-item">
            <div class="dropdown ">
              <a class="btn dropdown-toggle nav-link" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="far fa-user" style="font-size:20px"></i>
              </a>
              <ul class="dropdown-menu dp" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="profile.html">Profile</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Submission</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Administration</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Log out</a></li>
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