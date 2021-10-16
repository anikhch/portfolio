//form

const form = document.getElementById("form")

async function handleSubmit(event) {
   event.preventDefault()
   const status = document.getElementById("status")
   const data = new FormData(event.target)
   fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
         Accept: "application/json",
      },
   })
      .then((response) => {
         status.classList.add("success")
         setTimeout(function () {
            status.classList.remove("success")
         }, 4000)
         form.reset()
      })
      .catch((error) => {
         status.innerHTML = "Oops! There was a problem submitting your form"
         status.classList.add("error")
         setTimeout(function () {
            status.classList.remove("error")
         }, 4000)
      })
}
form.addEventListener("submit", handleSubmit)
