const body = document.querySelector("body");

const IMG_NUMBER = 5;

function handImgLoad(){
  console.log("finished loading");
}

function paintImage(imgNumber){
  const image = new Image();
  image.src = `image/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  image.addEventListener("loadend",handImgLoad);
}

function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber)
}

init();
