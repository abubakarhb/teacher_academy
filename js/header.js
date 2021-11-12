let search11 = document.querySelector('.search');
          search11.innerHTML +=`
          <div class="row">
            <div class="col-2"></div>
            <div class="col-8 search-input">
                <input type="email" class="form-control" id="" placeholder="Search for Jobs">
               <a href=""><i class="fas fa-search"></i></a>
            </div>
        </div>`;

let nav = document.querySelector('.nav1');
nav.innerHTML +=`
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container">
  <a class="navbar-brand pr-0" href="" id="home"><img src="./" width="20%" alt=""></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About Learning
            </a>
            <div  class="mega-menu-row dropdown-menu" aria-labelledby="navbarDropdown">
              <div  class="row">
                <div class="col-xl-3 d-none d-xl-block mega-menu-col ">
                  <img src="./img/img7.jpg" width="100%" alt="">
                </div>
                <div  class="col-xl-3 d-none d-xl-block mega-menu-col">
                  <a data-target=".navbar-collapse.show" data-toggle="collapse" routerlinkactive="active" href="/jobs" class="">
                    <div class="lead">Vision</div>
                    <p  class="small d-none d-xl-block">  Steamlance matches the world’s most talented professionals with 100% remote careers. </p>
                    <!-- <img src="./img/icon-arrow.svg" alt=""> -->
                  </a>
                </div>
                <div  class="col-xl-3 d-none d-xl-block mega-menu-col">
                  <a data-target=".navbar-collapse.show" data-toggle="collapse" routerlinkactive="active" href="/jobs" class="">
                    <div class="lead">Clients</div>
                    <p  class="small d-none d-xl-block">   Some of the 70+ companies that use steamlance to recruit global talent for high-paying remote positions.  </p>
                    <!-- <img src="./img/icon-arrow.svg" alt=""> -->
                  </a>
                </div>
            <div  class="col-xl-3 d-none d-xl-block mega-menu-col">
              <a data-target=".navbar-collapse.show" data-toggle="collapse" routerlinkactive="active" href="/jobs" class="">
                <div class="lead">People at Steamlance</div>
                <p  class="small d-none d-xl-block">  Hear testimonials from some of the 4000+ rockstars who have found a rewarding career through Crossover. </p>
                <!-- <img src="./img/icon-arrow.svg" alt=""> -->
              </a>
            </div>
          </div>
          <div  class="row">
            <div class="col-xl-3 d-none d-xl-block mega-menu-col1">
              <p class="lead1">  The #1 source of remote careers </p>
            </div>
            <div  class="col-xl-3 d-none d-xl-block mega-menu-col">
              <a data-target=".navbar-collapse.show" data-toggle="collapse" routerlinkactive="active" href="/jobs" class="">
              </a>
            </div>
            <div  class="col-xl-3 d-none d-xl-block mega-menu-col">
              <a data-target=".navbar-collapse.show" data-toggle="collapse" routerlinkactive="active" href="/jobs" class="">
              </a>
            </div>
        <div  class="col-xl-3 d-none d-xl-block mega-menu-col">
          <a data-target=".navbar-collapse.show" data-toggle="collapse" routerlinkactive="active" href="/jobs" class="">
          </a>
        </div>
      </div>
        </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Join Learning
            </a>
            <div  class="mega-menu-row dropdown-menu mega-row1" aria-labelledby="navbarDropdown">
              <div  class="row">
                <div class="col-xl-3 d-none d-xl-block mega-menu-col ">
                  <img src="./img/img3.jpg" width="100%" alt="">
                </div>
                <div  class="col-xl-3 d-none d-xl-block mega-menu-col">
                  <a data-target=".navbar-collapse.show" data-toggle="collapse" routerlinkactive="active" href="/jobs" class="">
                    <div class="lead">Current Openings</div>
                    <p  class="small d-none d-xl-block"> Think you’ve got what it takes? </p>
                    <!-- <img src="./img/icon-arrow.svg" alt=""> -->
                  </a>
                </div>
                <div  class="col-xl-3 d-none d-xl-block mega-menu-col">
                  <a data-target=".navbar-collapse.show" data-toggle="collapse" routerlinkactive="active" href="/jobs" class="">
                    <div class="lead">Selection Process</div>
                    <p  class="small d-none d-xl-block">  Applying for a role? Here’s what to expect. </p>
                    <!-- <img src="./img/icon-arrow.svg" alt=""> -->
                  </a>
                </div>
            <div  class="col-xl-3 d-none d-xl-block mega-menu-col">
              <a data-target=".navbar-collapse.show" data-toggle="collapse" routerlinkactive="active" href="/jobs" class="">
                <div class="lead">Perspectives</div>
                <p  class="small d-none d-xl-block"> A collection of articles with expert tips and tricks to help you stay ahead of the curve on all things...</p>
                <!-- <img src="./img/icon-arrow.svg" alt=""> -->
              </a>
            </div>
          </div>
          <div  class="row">
            <div class="col-xl-3 d-none d-xl-block mega-menu-col1">
              <p class="lead1"> Now hiring the top 1% of global talent</p>
            </div>
            <div  class="col-xl-3 d-none d-xl-block mega-menu-col">
              <a data-target=".navbar-collapse.show" data-toggle="collapse" routerlinkactive="active" href="/jobs" class="">
              </a>
            </div>
            <div  class="col-xl-3 d-none d-xl-block mega-menu-col">
              <a data-target=".navbar-collapse.show" data-toggle="collapse" routerlinkactive="active" href="/jobs" class="">
              </a>
            </div>
        <div  class="col-xl-3 d-none d-xl-block mega-menu-col">
          <a data-target=".navbar-collapse.show" data-toggle="collapse" routerlinkactive="active" href="/jobs" class="">
          </a>
        </div>
      </div>
        </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="people.html">People at Learning</a>
          </li>
      <li class="nav-item">
        <a class="nav-link" href="Perspective.html">Perspective</a>
      </li>
    </ul>
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link" href="hire.html">Hire on Learning</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="help.html">Help</a>
          </li>
          <li class="nav-item" style ="cursor: pointer;">
            <a class="nav-link"  data-bs-target="#login-modal" data-bs-toggle="modal">
              Login
            </a>
            <div class="modal fade" id="login-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="closeModal()"></button>
                  </div>
                  <div class="modal-body">
                      <div class="container-fluid">
                        <div class="row">
                          <nav>
                              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Sign up</button>
                                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Log in</button>
                              </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                  <form class="signupForm">
                                      <div class="input-group mb-3">
                                          <span class="input-group-text" id="basic-addon1"><i class="far fa-user"></i></span>
                                          <input type="text" class="form-control fname" placeholder="First & Last name" required>
                                        </div>
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="basic-addon1"><i class="far fa-envelope"></i></span>
                                          <input type="email" class="form-control email" placeholder="Email" required>
                                        </div>
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="basic-addon1"><i class="fas fa-phone"></i></span>
                                          <input type="text" class="form-control phone" placeholder="Phone Number" required>
                                        </div>
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="basic-addon1"><i class="fas fa-globe"></i></span>
                                          <select class="form-select loc" placeholder="State" required>
                                          <option disabled selected>Select State</option>
                                          <option value="Abia">Abia</option>
                                          <option value="Adamawa">Adamawa</option>
                                          <option value="Akwa Ibom">Akwa Ibom</option>
                                          <option value="Anambra">Anambra</option>
                                          <option value="Bauchi">Bauchi</option>
                                          <option value="Bayelsa">Bayelsa</option>
                                          <option value="Benue">Benue</option>
                                          <option value="Borno">Borno</option>
                                          <option value="Cross Rive">Cross River</option>
                                          <option value="Delta">Delta</option>
                                          <option value="Ebonyi">Ebonyi</option>
                                          <option value="Edo">Edo</option>
                                          <option value="Ekiti">Ekiti</option>
                                          <option value="Enugu">Enugu</option>
                                          <option value="FCT">Federal Capital Territory</option>
                                          <option value="Gombe">Gombe</option>
                                          <option value="Imo">Imo</option>
                                          <option value="Jigawa">Jigawa</option>
                                          <option value="Kaduna">Kaduna</option>
                                          <option value="Kano">Kano</option>
                                          <option value="Katsina">Katsina</option>
                                          <option value="Kebbi">Kebbi</option>
                                          <option value="Kogi">Kogi</option>
                                          <option value="Kwara">Kwara</option>
                                          <option value="Lagos">Lagos</option>
                                          <option value="Nasarawa">Nasarawa</option>
                                          <option value="Niger">Niger</option>
                                          <option value="Ogun">Ogun</option>
                                          <option value="Ondo">Ondo</option>
                                          <option value="Osun">Osun</option>
                                          <option value="Oyo">Oyo</option>
                                          <option value="Plateau">Plateau</option>
                                          <option value="Rivers">Rivers</option>
                                          <option value="Sokoto">Sokoto</option>
                                          <option value="Taraba">Taraba</option>
                                          <option value="Yobe">Yobe</option>
                                          <option value="Zamfara">Zamfara</option>
                                          </select>
                                        </div>
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="basic-addon1"><i class="fas fa-map-marker-alt"></i></span>
                                          <input type="text" class="form-control city" placeholder="Address" required>
                                        </div>
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="basic-addon1"><i class="fas fa-school"></i></span>
                                          <select class="form-select orgId" placeholder="School" required>
                                            <option disabled selected>Select School</option>
                                            <option value="Prime College">Prime College</option>
                                            <option value="Sweet Haven">Sweet Haven</option>
                                          </select>
                                        </div>
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="basic-addon1"><i class="fas fa-briefcase"></i></span>
                                          <input type="text" class="form-control jobTitle" placeholder="Job Title" required>
                                        </div>
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="basic-addon1"><i class="fas fa-briefcase"></i></span>
                                          <input type="text" class="form-control jobPosition" placeholder="Job Position" required>
                                        </div>
                                        <div class="input-group mb-3">
                                          <label for="upload" class="sr-only">profile picture</label>
                                          <span class="input-group-text" id="basic-addon1"><i class="far fa-address-card"></i></span>
                                          <input type="file" class="form-control photo" placeholder="profile picture" required>
                                        </div>
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="basic-addon1"><i class="fas fa-lock"></i></span>
                                          <input type="password" class="form-control pwd" placeholder="Your password" required>
                                        </div>
                                        <div class="loading-box"></div>
                                      <button type="submit" class="btn btn-primary" id="createAccount">Create An Account</button>
                                    </form>
                                    <div class="social-media">
                                    <h1 class="label-text">or connect with</h1>
                                    </div>
                                    <div class="social-media-icon">
                                      <ul class="social-icons mt-3">
                                          <li class="social-icons-list">
                                              <a href="" class="social-icon">
                                                  <i class="fab fa-linkedin-in"></i>
                                              </a>
                                          </li>
                                          <li class="social-icons-list">
                                              <a href="" class="social-icon">
                                                  <i class="fab fa-facebook"></i>
                                              </a>
                                          </li>
                                          <li class="social-icons-list">
                                              <a href="" class="social-icon">
                                                  <i class="fab fa-twitter"></i>
                                              </a>
                                          </li>
                                          <li class="social-icons-list">
                                              <a href="" class="social-icon">
                                                  <i class="fab fa-instagram"></i>
                                              </a>
                                          </li>
                                      </ul>
                                    </div>
                              </div>
                              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                  <form>
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="basic-addon1"><i class="far fa-envelope"></i></span>
                                          <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" required>
                                        </div>
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="basic-addon1"><i class="fas fa-lock"></i></span>
                                          <input type="text" class="form-control" placeholder="Your password" aria-label="Username" aria-describedby="basic-addon1" required>
                                        </div>
                                      <div class="d-flex justify-content-space-between">
                                      <div class="mb-3">
                                          <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                          <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                        </div>
                                        <div class="mb-3 form-check" style="margin-left: 5rem !important;">
                                          <a href="">Forget your password</a>
                                        </div>
                                        </div>
                                        <button type="submit" class="btn btn-secondary">Log In</button>
                                    </form>
                                    <div class="social-media">
                                    <h1 class="label-text">or connect with</h1>
                                    </div>
                                    <div class="social-media-icon">
                                      <ul class="social-icons mt-3">
                                          <li class="social-icons-list">
                                              <a href="" class="social-icon">
                                                  <i class="fab fa-linkedin-in"></i>
                                              </a>
                                          </li>
                                          <li class="social-icons-list">
                                              <a href="" class="social-icon">
                                                  <i class="fab fa-facebook"></i>
                                              </a>
                                          </li>
                                          <li class="social-icons-list">
                                              <a href="" class="social-icon">
                                                  <i class="fab fa-twitter"></i>
                                              </a>
                                          </li>
                                          <li class="social-icons-list">
                                              <a href="" class="social-icon">
                                                  <i class="fab fa-instagram"></i>
                                              </a>
                                          </li>
                                      </ul>
                                    </div>
                              </div>
                          </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item mt-1" style="list-style-type:none !important">
           <i class="fas fa-search nav-link search-on"  onclick="searchInput()"> </i>
           <i class="fas fa-times nav-link search-off"  onclick="searchInput1()"> </i>
          </li>
    </ul>
  </div>
</div>
</nav>`

let footer = document.querySelector('.footer')
footer.innerHTML +=`
<div class="container">
          <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-3 col-12 mb-4">
                <img src="./img/logo 1 (1).png" width="auto" height="auto" alt="">
                <ul class="social-icons mt-3">
                    <li class="social-icons-list">
                        <a href="" class="social-icon">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li class="social-icons-list">
                        <a href="" class="social-icon">
                            <i class="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li class="social-icons-list">
                        <a href="" class="social-icon">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li class="social-icons-list">
                        <a href="" class="social-icon">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
              </div>
              <div class="col-xl-1 d-none d-xl-block col-12"></div>
              <div class="col-xl-4 col-lg-5 col-md-5 col-12 mb-4">
                <div class="row">
                  <div class="col-md-6 col-12 mb-4 footer-col">
                    <h4>Company</h4>
                    <ul class="p-0">
                      <li class="footer-li">
                        <a href="" class="footer-link py-2">CLient</a>
                      </li>
                      <li class="footer-li">
                        <a href="" class="footer-link py-2">People at Steamlance</a>
                      </li>
                      <li class="footer-li">
                        <a href="" class="footer-link py-2">Vision</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6 col-12 mb-4 footer-col">
                    <h4>RESOURCES</h4>
                    <ul class="p-0">
                      <li class="footer-li">
                        <a href="" class="footer-link py-2">Hire on Steamlance</a>
                      </li>
                      <li class="footer-li">
                        <a href="" class="footer-link py-2">Perspectives</a>
                      </li>
                      <li class="footer-li">
                        <a href="" class="footer-link py-2">Privacy and Policy</a>
                      </li>
                      <li class="footer-li">
                        <a href="" class="footer-link py-2">Terms of Use</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-1 d-none d-xl-block col-12"></div>
              <div class="col-xl-4 col-lg-5 col-md-4 col-12 mb-4 footer-support-col">
                <h2>We’re here to help</h2>
                <p>Find answers to common questions or contact us directly.</p>
                <a href=""> HELP AND FAQs <img src="./img/icon-arrow.svg" alt=""></a>
              </div>
          </div>
          <div class="footer-divider">&nbsp;</div>
          <div class="row pt-5 pb-5">
          <div class="col-8 footer-copy">
            <span class="copyright-text">© Steamlance 2021.</span>
          </div>
          <div class="col-4">
            <a href="#home" class=" d-flex ml-auto mat-button-base">
              <span class="mat-button-wrapper"><span>TOP</span>
              <i aria-hidden="true" class="fas fa-chevron-up ml-2"></i></span>
            </a>
          </div>
          </div>
          </div>`;

          // search
          
          
         