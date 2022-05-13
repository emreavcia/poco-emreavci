fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response is not OK');
        }
        return response.json()
    })
    .then(data => slide(data))
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

let counter = 0;
let imgTag = document.getElementsByTagName("img")[0];
let prevBtn = document.getElementsByTagName("button")[0];
let nextBtn = document.getElementsByTagName("button")[1];

function slideToNext(pImage) {

    counter++;
    if (counter === pImage.length) {
        counter = 0;
    }
    if (counter < pImage.length) {
        let nextSlide = pImage[counter].url;
        imgTag.src = nextSlide;
    }
    console.log(counter)
}

function slideToPrev(pImage) {

    counter--;

    if (counter < 0) {
        counter = pImage.length - 1;
    }

    if (counter >= 0) {
        let prevSlide = pImage[counter].url;
        imgTag.src = prevSlide;
    }
    console.log(counter)
}

function slide(pImage) {

    prevBtn.addEventListener("click", slideToPrev(pImage));
    nextBtn.addEventListener("click", slideToNext(pImage));

}


