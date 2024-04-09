const button_aba_game = document.querySelector('.button_aba_game')
const link_games_mob = document.querySelector('.link_games_mob')
const btn_games = document.querySelector('.btn_games')


button_aba_game.addEventListener('click',()=>{
    link_games_mob.classList.remove('game_aberto')
})


btn_games.addEventListener('click',()=>{
    link_games_mob.classList.toggle('game_aberto')
})