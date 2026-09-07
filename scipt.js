
alert("JS funcionando");
const botaoperfil=document.getElementById("azul")
botaoperfil.addEventListener("click",function(){
    document.getElementById("painel")
     painel.classList.toggle("aberto")
})

const botaomenu=document.getElementById("menu")
const lista=document.getElementById("lista")
botaomenu.addEventListener("click",function(){
    lista.classList.toggle("aberto")
})
const destaquegld =document.getElementsByClassName("destaque")
for (let i = 0; i < destaquegld.length; i++) {
  destaquegld[i].addEventListener("click", function(){
    destaquegld[i].classList.toggle("clicado")

})
    
}
