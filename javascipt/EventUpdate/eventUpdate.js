const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
  /*const hasClass = title.classList.contain(CLICKED_CLASS);
  if(hasClass){
    title.classList.add(CLICKED_CLASS);
  }else{
    title.classList.remove(CLICKED_CLASS);
  }*/

  title.classList.toggle(CLICKED_CLASS);
}

function init(){
  title.style.color = "BASE_COLOR";
  title.addEventListener("click", handleClick);
}
init();
