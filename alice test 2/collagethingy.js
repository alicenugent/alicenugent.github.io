const images = ["bisthi.jpeg", "logo.svg"]

let i = 0

function placeImage(x,y){

  const nextImage = images[i]

  const img = document.createElement("img")
  img.setAttribute("src", nextImage)

  img.style.left = x + "px"
  img.stlye.top = y + "px"

  document.body.appendChild(img)

}

placeImage(500,400)
placeImage(400,500)
placeImage(600,300)
