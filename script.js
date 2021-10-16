$(document).on("click", ".arrow", function (e) {
   e.preventDefault()
   $("body, html").animate({ scrollTop: 0 }, 1000)
})
