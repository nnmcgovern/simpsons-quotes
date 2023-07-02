const imgDivs = document.querySelectorAll(".img")

imgDivs.forEach(div => {
  div.addEventListener("click", handleClick)
})

function handleClick(e) {

}

// --------------------------------------

const baseURL = "https://thesimpsonsquoteapi.glitch.me/quotes"
const count = 1

fetch(`${baseURL}?count=${count}`)
  .then(res => res.json())
  .then(data => {
    const paragraph = document.querySelector(".quote")
    paragraph.innerHTML = `"${data[0]["quote"]}"`
  })
  .catch(err => console.log(err))