const createAccountBtn = document.getElementById('createAccount');

createAccountBtn.addEventListener('click', function (e) {
  e.preventDefault();

  $(".loading-box").html('<img src="./img/icons/spinner.gif" width="50" alt="">');

  let fname = document.querySelector('.fname').value
  let email = document.querySelector('.email').value
  let pwd = document.querySelector('.pwd').value
  let phone = document.querySelector('.phone').value
  let loc = document.querySelector('.loc').value
  let city = document.querySelector('.city').value
  let orgId = document.querySelector('.orgId').value
  let jobTitle = document.querySelector('.jobTitle').value
  let jobPosition = document.querySelector('.jobPosition').value
  let photo = document.querySelector('.photo')

  photoUrl = photo.files[0];

  const reader = new FileReader()
  reader.readAsBinaryString(photoUrl);

  console.log(fname, email, pwd, phone, loc, city, orgId, jobTitle, jobPosition, photoUrl.name)
  let uploaded_img


  const publitio = new PublitioAPI('dB10aDNr9GtDWzSh89R1', 'xX2oqVxHZ10rumuBSk4aoD2AreLDukeW')
  publitio.uploadFile(photoUrl, 'file', {
    title: `${photoUrl.name}`,
    public_id: `${photoUrl.name}`,
    description: 'Image for TAP-Academy'

  }).then((data) => {
    console.log(data.url_preview)
    createAccount()
    async function createAccount() {
      const response = await fetch(`http://localhost:8080/teacher_academy/php/?triggerReg&fname=${fname}&email=${email}&pwd=${pwd}&phone=${phone}&loc=${loc}&city=${city}&orgId=${orgId}&jobTitle=${jobTitle}&jobPosition=${jobPosition}&photo=${data.url_preview}`, {
        method: 'GET',
      })

      const credentials = await response.json()
      console.log(credentials)

      if (credentials.status === 1) {
        $(".signupForm").html(`
        <div class="d-flex justify-content-center" style="flex-direction: column;">
          <img src="./img/icons/success.gif" width="100" alt="">
          <p class="text-success text-center">${credentials.message}</p>
        </div>
        
        `)
      } else if (credentials.status === -1) {
        $(".loading-box").html(`
          <p class="text-danger">Please fill all the blanks</p>
        `)
      }

    }

  })
    .catch((error) => { console.log(error) })



})
