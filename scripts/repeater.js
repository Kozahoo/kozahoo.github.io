// ТРОГАТЬ РАЗРЕШАЮ

const VKL_DA_NET_ALO = 1 // 1 ВКЛ 0 НЕ ВКЛ







// НЕ ТРОГАЙ НАХУЙ

function RAND(min, max) { return Math.floor(Math.random() * (max - min) + min); }

if(VKL_DA_NET_ALO != 0) {
    const DOHUYA_POVTORYAT_STROKY_ILI_NE = 3 // <- 3 ЧТОБЫ МНОГО, 1 ЧТОБЫ НОРМАЛЬНО
    const SHIRINA_POLOSKI_V_PROCENTAH = 3000 // <- 3000 ЧТОБЫ ОДНА СТРОЧКА, 130 ЧТОБЫ БЫЛО ПАРУ СТРОЧЕК (НАДО ЧТОБЫ СВЕРХУ БЫЛО МНОГО)
    Array.prototype.slice.call(document.getElementsByClassName('LINE-ME-UP')).forEach(LINER => {
        for(i = 0; i < DOHUYA_POVTORYAT_STROKY_ILI_NE; i++) LINER.innerHTML += LINER.innerHTML
        LINER.style.width = SHIRINA_POLOSKI_V_PROCENTAH + '%'
        LINER.style.marginLeft = 0
        LINER.style.transform = "translate(-18px, 0)"
    })
}

console.log(RAND(18, 150))
console.log(RAND(18, 150))
console.log(RAND(18, 150))
console.log(RAND(18, 150))
console.log(RAND(18, 150))
console.log(RAND(18, 150))

const FROM = document.getElementById('COPY-FROM')
const FROM_TEXT = FROM.innerHTML
const FROM_WIDTH = FROM.getBoundingClientRect().width + 'px'
Array.prototype.slice.call(document.getElementsByClassName('COPY-TO')).forEach(TO => { TO.innerHTML = FROM_TEXT; TO.style.width = FROM_WIDTH;
    TO.style.transform = "translate(-" + RAND(18, 150) + "px, 0)"})

var ARRAY = [
    'Профессиональный',
    'Профессиональный',
    'Профессиональный',
    'Могучий',
    'Могучий',
    'Блестящий',
    'Блестящий',
    'Неотразимый',
    'Неотразимый',
    'Неотразимый',
    'Богоподобный',
    'Свежий',
]

if (window.location.href.includes('/en')) ARRAY = [
    'Professional',
    'Professional',
    'Professional',
    'Migthy',
    'Migthy',
    'The all knowing one',
    'The all knowing one',
    'Kindest',
    'Kindest',
    'Beloved',
    'Coolest',
    'Coolest',
    'Coolest',
    'Fresh',
    'OMG!!! ITS HIM!!!!',
    'OMG!!! ITS HIM!!!!',
    'OMG!!! ITS HIM!!!!',
]

document.getElementById('WHOOPPS').innerText = ARRAY[RAND(0, ARRAY.length)]

if (RAND(0, 100) < 2) document.getElementById('WHOOPPS-2').innerText = 'Kesha'