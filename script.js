function getPilihanComputer() {    
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getHasil(player, comp) {
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

function putar() {
    const imgComp = document.querySelector('.img-komputer')
    const gambar = ['gajah', 'orang', 'semut']
    let i = 0
    const waktuMulai = new Date().getTime()
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1500) {
            clearInterval
            return
        }
        imgComp.setAttribute('src', 'img/'+gambar[i++]+'.png')
        if (i == gambar.length) i = 0
    },150)
}



const pilihan = document.querySelectorAll('ul li img')
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const reset = document.querySelector('.info')
        reset.innerHTML = '...'
        const pilihanComp = getPilihanComputer()
        const pilihanPlayer = pil.className
        const hasil = getHasil(pilihanPlayer, pilihanComp)

        putar()

        setTimeout(function () {
            const imgComp = document.querySelector('.img-komputer')
            imgComp.setAttribute('src', 'img/'+pilihanComp+'.png')
            
            const info = document.querySelector('.info')
            info.innerHTML = hasil
        }, 1500)
        
    })
})








// CARA YANG TIDAK DI PERKENANKAN

// const pGajah = document.querySelector('.gajah')
// pGajah.addEventListener('click', function () {
//     const pilihanComp = getPilihanComputer()
//     const hasil = getHasil(pGajah.className, pilihanComp)
    
//     const info = document.querySelector('.info')
//     info.innerHTML = hasil

//     const imgComp = document.querySelector('.img-komputer')
//     imgComp.setAttribute('src', 'img/'+ pilihanComp +'.png')    
// })

// const pOrang = document.querySelector('.orang')
// pOrang.addEventListener('click', function () {
//     const pilihanComp = getPilihanComputer()
//     const hasil = getHasil(pOrang.className, pilihanComp)
    
//     const info = document.querySelector('.info')
//     info.innerHTML = hasil

//     const imgComp = document.querySelector('.img-komputer')
//     imgComp.setAttribute('src', 'img/'+ pilihanComp +'.png')    
// })

// const pSemut = document.querySelector('.semut')
// pSemut.addEventListener('click', function () {
//     const pilihanComp = getPilihanComputer()
//     const hasil = getHasil(pSemut.className, pilihanComp)
    
//     const info = document.querySelector('.info')
//     info.innerHTML = hasil

//     const imgComp = document.querySelector('.img-komputer')
//     imgComp.setAttribute('src', 'img/'+ pilihanComp +'.png')
// })



    