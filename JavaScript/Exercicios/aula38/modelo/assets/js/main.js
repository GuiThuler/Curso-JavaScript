const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const background = estilosBody.backgroundColor;

ps.forEach(function(el) {
    el.style.backgroundColor = background
    el.style.color = 'White'
    console.log(el);
});
