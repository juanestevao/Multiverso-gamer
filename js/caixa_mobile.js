const hamburgue = document.querySelector('.hamburgue')
const box_lateral_mobile =  document.querySelector('.box_lateral_mobile')
const fechar = document.querySelector('.fechar')
hamburgue.onclick = ()=>{
    box_lateral_mobile.classList.remove('subir')
    box_lateral_mobile.classList.toggle('aberto')
}

fechar.onclick = ()=>{
    box_lateral_mobile.classList.remove('aberto')
    box_lateral_mobile.classList.add('subir')
}