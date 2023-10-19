const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morales",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]



const carouselDOMElement = document.querySelector('.carousel');

for (i = 0; i < images.length; i++){
    const carouselString = 
    `<div class="carousel__item" style="background-image: url('./${images[i].image}');">
		<h3>${images[i].title}</h3>
		<p>${images[i].text}</p>

		<div class="btn-up">
			<i class="fa-solid fa-chevron-up"></i>
		</div>
		<div class="btn-down">
			<i class="fa-solid fa-chevron-down"></i>
		</div>
	</div>`
    
    carouselDOMElement.innerHTML += carouselString;
}

const carouselItemDOMElements = document.querySelectorAll('.carousel-item');
console.log(carouselItemDOMElements);

console.log(carouselItemDOMElements.length);

let currentIndex = 0;

let currentSlide = carouselItemDOMElements[currentIndex];

// CONTROLLI

const buttonDownDOMElement = document.querySelectorAll('.btn-down');
buttonDownDOMElement.addEventListener('click', function(){
    console.log('click down');

    if (currentIndex < imageDOMElements.length - 1){
        currentSlide.classList.remove('active');

        currentIndex++;

        currentSlide = imageDOMElements[currentIndex];
        currentSlide.classList.add('active');
    } else {
        currentSlide.classList.remove('active');

        currentIndex = 0;

        currentSlide = imageDOMElements[currentIndex];
        currentSlide.classList.add('active');
    }

})

const buttonUpDOMElement = document.querySelectorAll('.btn-up');
buttonUpDOMElement.addEventListener('click', function(){
    console.log('click up');

    if (currentIndex  > 0){
        currentSlide.classList.remove('active');

        currentIndex--;

        currentSlide = imageDOMElements[currentIndex];
        currentSlide.classList.add('active');
    } else {
        currentSlide.classList.remove('active');

        currentIndex = imageDOMElements.length - 1;

        currentSlide = imageDOMElements[currentIndex];
        currentSlide.classList.add('active');
    }

})