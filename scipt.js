console.log('clique no butao')
const botaoperfil=document.getElementById("azul")
botaoperfil.addEventListener("click",function(){
    console.log("clicado")
    document.getElementById("painel")
     painel.classList.toggle("aberto")
})

const botaomenu=document.getElementById("menu")
const lista=document.getElementById("lista")
botaomenu.addEventListener("click",function(){
    lista.classList.toggle("aberto")
})