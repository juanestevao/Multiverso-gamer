window.addEventListener('scroll',()=>{
    let destaque = document.querySelector('.destaque_principal')
    let posicao = destaque.getBoundingClientRect().top
    console.log(destaque)
    if(posicao <= 0){
        destaque.classList.add('fixo')
    }
    else{
        destaque.classList.remove('fixo')
    }
})