hamburger = document.querySelector(".hamburger");
        hamburger.onclick = function(){
            navBar = document.querySelector(".navbar");
            navBar.classList.toggle("active")
        }

            // Contact for data save in Google Sheets (Port Contact data)

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxw4x8uj_daMgFkUoJowvNdgiqcu-lHj1tmChMxHuKdzMB-DTcHyLJE0EZ6KlsvNMzk/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>
        {
            success.innerHTML="Data Submit Successfully";

            setTimeout(function()
                {
                    success.innerHTML="";
                },5000)
                form.reset();
        })
    .catch(error => console.error('Error!', error.message))
  })

 