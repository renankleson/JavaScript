var agora = new Date()
var diaSem = agora.getDate()

diaSem = 0
/*
    0 = domingo 
    1 = Segunda
    2 = Terça 
    3 = Quarta 
    4 = Quinta
    5 = Sexta 
    6 = Sabádo 
*/

console.log(diaSem)
switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
            console.log('Segunda')
         break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
            console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
            console.log('Sabádo')
        break
    default:
        console.log('[Erro] Dia inválido')
        break
}