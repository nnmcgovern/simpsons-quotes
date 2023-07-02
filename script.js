const baseURL = "https://thesimpsonsquoteapi.glitch.me/quotes"
const count = 1
const modal = document.querySelector(".modal")
const buttonClose = document.querySelector(".close")
const buttonAnswer = document.querySelector(".show-answer")
const buttonNext = document.querySelector(".next-quote")

buttonAnswer.addEventListener("click", handleClickAnswer)
buttonClose.addEventListener("click", handleClickAnswer)
buttonNext.addEventListener("click", (e) => { location.reload() })

fetch(`${baseURL}?count=${count}`)
  .then(res => res.json())
  .then(data => {
    const paragraph = document.querySelector(".quote")
    const charIMG = document.querySelector(".char-img")
    const charName = document.querySelector(".char-name")

    paragraph.innerHTML = `"${data[0]["quote"]}"`
    charIMG.style.backgroundImage = `url(${data[0]["image"]})`
    charName.innerHTML = data[0]["character"]
  })
  .catch(err => console.log(err))

function handleClickAnswer(e) {
  modal.classList.toggle("hidden")
}