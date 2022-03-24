console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {

let breedsList = document.querySelector('#dog-breeds')
let imageContainer = document.querySelector('#dog-image-container')
let breedDropDown = document.querySelector('#breed-dropdown')
let dogBreeds = []



fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then(function (data) {
        renderImages(data)
    })

fetch('https://dog.ceo/api/breeds/list/all')
    .then((resp) => resp.json())
    .then(function (data) {
        
        dogBreeds = Object.keys(data.message)
        addBreeds(data)
        selectByInitial()
    })




function selectByInitial() {

    breedDropDown.addEventListener('change', function (e) {
        breedsList.innerHTML = " "
        dogBreeds.filter(function (breed) {
                
            if (breed[0] == e.target.value) {
                let newDogBreed = document.createElement('li')
                newDogBreed.innerHTML = breed
                breedsList.appendChild(newDogBreed)
            }
            
        })
            }
    )

    
}



function renderImages(images) {
    
    let dogImages = images['message']
    for (const image of dogImages) {
        let dogImage = document.createElement('img')
        dogImage.src = image
        imageContainer.appendChild(dogImage)
    }
}

function addBreeds(breeds) {
    
    let dogBreeds = breeds['message']

    for (const breed in dogBreeds) {
        if (Object.hasOwnProperty.call(dogBreeds, breed)) {
            const element = dogBreeds[breed];
            let newDogBreed = document.createElement('li')
            newDogBreed.innerHTML = breed
            breedsList.appendChild(newDogBreed)

            newDogBreed.addEventListener('click', function (event) {
                event.target.style.color = 'red'
                console.log(event.target)
            })

            
            
        }
    }
    // console.log(breedsList)
}



    
})

