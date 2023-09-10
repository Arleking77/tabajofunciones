
//se agrega al desafio un contador para que vuelva al color original despues de 2 segundos. 


const ele = document.getElementById("ele1");
const initialBackgroundColor = getComputedStyle(ele).backgroundColor;

function pintar(elemento, color = "green", reset = false) {
  if (reset) {
    elemento.style.backgroundColor = initialBackgroundColor;
  } else {
    elemento.style.backgroundColor = color;
  }
}

ele.addEventListener("click", () => {
  pintar(ele, "yellow");
    setTimeout(() => {
    pintar(ele, "", true);
  }, 2000); 
});