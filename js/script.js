document.addEventListener('DOMContentLoaded', () => {
    const btnLogo = document.querySelector('.btnLogo')
    const btnLogo2 = document.querySelector('.btnLogo_2')
    const btnContact = document.querySelector('.contact')
    const btnKnowus = document.querySelector('.know_us')
    const callErnesto = document.getElementById('call_ernesto')
    const callDiego = document.getElementById('call_diego')
    const wppErnesto = document.getElementById('wpp_ernesto')
    const wppDiego = document.getElementById('wpp_diego')   
    const btnIg = document.getElementById('btn_ig') 
    const btnTg = document.getElementById('btn_tg') 

    // Boton de inicio
    btnLogo.addEventListener('click', () => {
        window.location.href = '#top'
    })
    btnLogo2.addEventListener('click', () => {
        window.location.href = '#top'
    })

    // Botones para moverse x la página
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

    // Botones de contacto
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
    // Botones de redes sociales
    btnIg.addEventListener('click', () => {
        window.open('https://www.instagram.com/tuweb_cu?igsh=cTFnZnB0NDRsbmM0', '_blank')
    })
    btnTg.addEventListener('click', () => {
        window.open('https://t.me/tuweb_cu', '_blank')
    })

    // Transición borrosa
    const background = document.getElementById('port')
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) background.classList.add('blur')
        else background.classList.remove('blur')
    })
})