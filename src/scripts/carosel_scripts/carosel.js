export default function addCarousel(){
  document.getElementById("next-button").addEventListener("click",ev => addCarouselButtons(ev.currentTarget))
  document.getElementById("prev-button").addEventListener("click",ev => addCarouselButtons(ev.currentTarget))
}

let currentItem = 0

function addCarouselButtons(ev){
  const allSpeakers = document.querySelectorAll(".carousel-items")
  const wrapper = document.querySelector('.carousel-wrapper')
  const max_items = allSpeakers.length - 1
  
  if(ev.id === "next-button"){
    currentItem++
  } else if(ev.id === "prev-button"){
    currentItem--
  }

  if(currentItem > max_items){
    currentItem = 0
  } else if(currentItem < 0){
    currentItem = max_items
  }
  console.log(allSpeakers[currentItem].offsetLeft);
  console.log(wrapper.offsetLeft);
  console.log(allSpeakers[currentItem].offsetLeft - wrapper.offsetLeft);
  
  wrapper.scrollTo({
    top: 0,
    left: allSpeakers[currentItem].offsetLeft - (wrapper.offsetWidth - allSpeakers[currentItem].offsetWidth) / 2,
    behavior: "smooth",

  })
}