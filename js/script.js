document.addEventListener('DOMContentLoaded', () => {
    const btnLogo = document.querySelector('.btnLogo')
    const btnLogo2 = document.querySelector('.btnLogo_2')
    const btnContact = document.querySelector('.contact')
    const btnKnowus = document.querySelector('.know_us')

    const callErnesto = document.getElementById('call_ernesto')
    const callDiego = document.getElementById('call_diego')
    const wppErnesto = document.getElementById('wpp_ernesto')
    const wppDiego = document.getElementById('wpp_diego')

    setTimeout(() => {
        document.querySelector('#image').src = 'img/logo-2.gif'
    }, 1600)

    btnLogo.addEventListener('click', () => {
        window.location.href = '#top'
    })
    btnLogo2.addEventListener('click', () => {
        window.location.href = '#top'
    })
    btnContact.addEventListener('click', () => {
        window.location.href = '#footer'
        btnContact.classList.add('temp_style_contact')
        setTimeout(() => {
            btnContact.classList.remove('temp_style_contact')
        }, 800)
    })
    btnKnowus.addEventListener('click', () => {
        window.location.href = '#contact_btn'
        btnKnowus.classList.add('temp_style_know_us')
        setTimeout(() => {
            btnKnowus.classList.remove('temp_style_know_us')
        }, 800)
    })

    callErnesto.addEventListener('click', () => {
        window.location.href = 'tel:+5352427622'
    })
    callDiego.addEventListener('click', () => {
        window.location.href = 'tel:+5356938821'
    })
    wppErnesto.addEventListener('click', () => {
        window.location.href = 'https://wa.me/+5352427622?text=Hola!'
    })
    wppDiego.addEventListener('click', () => {
        window.location.href = 'https://wa.me/+5356938821?text=Hola!'
    })
})