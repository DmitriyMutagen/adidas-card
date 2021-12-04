//Выбираем по селектору карточку и контейнер
const card = document.querySelector(".card"); 
const container = document.querySelector(".container"); 

//Все элементы внутри карты 
const title = document.querySelector(".title");
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Движение мыши, делаем коллбэк функцию
//принимаем координаты осей и задаем нужный диапазн
// прослушака событий, если мышь появилась в контейнера
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;

    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`; 
});


//когда мышь в контейнере, задаем трансформацию 
container.addEventListener('mouseenter', e => {
    card.style.transition = "none";

    //popout выдвижение надписи adidas вперед
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});

//после выхода из контейнера возвращаем карту в исходное положение
// для этого через прослушку событий на выход мыши из контейнера выставляем x и y координаты в 0 
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease'; 
    card.style.transform = `rotateY(0deg) rotateX(0deg)`; 

    //popabck а тут сбрасывае обратно,когда мышь покидает контейнер
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});