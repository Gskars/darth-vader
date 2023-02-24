


const controle = document.querySelectorAll("[data-controle]")
controle.forEach( (elemento)=> {
 elemento.addEventListener("click", (evento)=>{
 manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
 })
})


function manipulaDados(operação, controle) {
    const peça = controle.querySelector("[data-contador]")
    if (operação === "-") {
        peça.value = parseInt(peça.value) - 1
    } else {
        peça.value = parseInt(peça.value) + 1
    }
}