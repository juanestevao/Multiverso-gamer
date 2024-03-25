let contador = 1
document.getElementById('slide1').checked =true

setInterval(function(){
    chama_img()
},5000)

function chama_img(){
    contador++

    if(contador > 4){
        contador = 1
    }
    document.getElementById(`slide${contador}`).checked = true
}