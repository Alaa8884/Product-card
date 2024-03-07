const btn = document.getElementsByClassName('btn');
const image = document.querySelector('.image')

btn[0].addEventListener('click', () => {
  image.src = "images/image1.png"
  
})
btn[1].addEventListener('click', (e) => {
  
  image.src = "images/image2.png"
  
})
btn[2].addEventListener('click', () => {
  image.src = "images/image3.png"
})

