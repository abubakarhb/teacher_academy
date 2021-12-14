const loginAccountBtn = document.getElementById("loginAccount");

loginAccountBtn.addEventListener("click", function (e) {
  
  e.preventDefault();

  $(".loading-box").html(
    '<img src="./img/icons/spinner.gif" width="50" alt="">'
  );

  let user = document.querySelector(".username").value;
  let pin = document.querySelector(".passlogin").value;
  //   let pwd = document.querySelector('.pwd').value
  //   let phone = document.querySelector('.phone').value
  //   let loc = document.querySelector('.loc').value
  //   let city = document.querySelector('.city').value
  //   let orgId = document.querySelector('.orgId').value
  //   let jobTitle = document.querySelector('.jobTitle').value
  //   let jobPosition = document.querySelector('.jobPosition').value
  //   let photo = document.querySelector('.photo')

  //   photoUrl = photo.files[0];

  //   const reader = new FileReader()
  //   reader.readAsBinaryString(photoUrl);

  console.log(user, pin);
  //   let uploaded_img

  //   const publitio = new PublitioAPI('dB10aDNr9GtDWzSh89R1', 'xX2oqVxHZ10rumuBSk4aoD2AreLDukeW')
  //   publitio.uploadFile(photoUrl, 'file', {
  //     title: `${photoUrl.name}`,
  //     public_id: `${photoUrl.name}`,
  //     description: 'Image for TAP-Academy'

  //   }).then((data) => {
  //     console.log(data.url_preview)

  //   })
  //     .catch((error) => { console.log(error) })

  async function loginAccount() {
    const response = await fetch(`http://localhost:81/teacher_academy-main/php?login&user=${user}&pass=${pin}`,{
        method: "GET",
      });

    const credentials = await response.json();
    console.log(credentials);

    if (credentials.status === 1) {
      $(".signinForm").html(`
        <div class="d-flex justify-content-center" style="flex-direction: column;">
          <img src="./img/icons/success.gif" width="100" alt="">
          <p class="text-success text-center">${credentials.message}</p>
        </div>
        
        `);
        window.location.href ="Developer.html"
    } else if (credentials.status === -1) {
      $(".loading-box").html(`
          <p class="text-danger">Invalid User Account</p>
        `);
    }
  }
  loginAccount();
});
