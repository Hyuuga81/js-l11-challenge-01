const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

/*asnchronous function to call photo list and make it an object js can access*/
const getImage = async function () {
    const res = await fetch(
        "https://picsum.photos/v2/list?limit=100"
        );
    const images = await res.json();
    //console.log(images);  

    /*call select random image function to select image argument from object*/
    selectRandomImage(images);
};

//chooses a random image from the api in async function when called
const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    //console.log(randomImage);
    displayImage(randomImage);
};


//displays the random image
const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    img.alt = "image";
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
    getImage();
    
});



