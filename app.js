
// const mkSpring = () => {
//   let spring = document.createElement('img')  
//   spring.setAttribute('src'),"https://images.unsplash.com/photo-1603436262790-87a71fd759f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
//   spring.setAttribute('class', "showSeason")
//   let displayBox = document.querySelector('.display')
//   displayBox.append(spring)
// }
// seasons ={
//  spring:'https://media.tenor.com/GiEPyb1TLekAAAAC/raining-nature.gif',
//  summer:'https://i.pinimg.com/originals/a7/79/50/a779506c1ec5bd6827864ed6f035b9de.gif',
//  autumn:'https://media.tenor.com/Qsxpa4KCZgcAAAAd/autumn-leaves-falling.gif',
//  winter:'https://media3.giphy.com/media/3o6fISORwH1fcsQW0U/giphy.gif?cid=6c09b952acf3b71fa634478b6ec9f52338c888cb34b4b558&rid=giphy.gif&ct=g',   
// }

let seasons = {
    spring: {
        temp: "52°",
        text:"The average temperature in March is about 52 °F (+11 °C) during the day and 32-34 °F (0 °C) at night. In early spring, showers or last winter blizzards may come from the northeast. Storms happen every few years.",
        url:'https://media.tenor.com/GiEPyb1TLekAAAAC/raining-nature.gif' 
    },

    summer: {
        temp: "83°",
        text:"Summer. The warm and humid New Jersey climate in summers has an average low to mid-80s. The sunniest and warmest time of the year is July's month, making New Jersey's weather feel hotter and warm",
        url:'https://i.pinimg.com/originals/a7/79/50/a779506c1ec5bd6827864ed6f035b9de.gif'
    },

    autumn: {
        temp: "52°",
        text:"With the ups and downs of temperature, November came out averaging 47.5° for the state as a whole. This is 2.4° above the 2020 normal and ties as the 15th mildest eleventh month on record. Ten of the twenty mildest Novembers since 1895 have occurred since 2001.",
        url:'https://media.tenor.com/Qsxpa4KCZgcAAAAd/autumn-leaves-falling.gif'
    },

    winter: {
        temp: "40°",
        text:"Winter temperatures will be below normal, while precipitation and snowfall will be above normal. The coldest periods will be in early December, early and late January, and most of February.",
       url:'https://media3.giphy.com/media/3o6fISORwH1fcsQW0U/giphy.gif?cid=6c09b952acf3b71fa634478b6ec9f52338c888cb34b4b558&rid=giphy.gif&ct=g'  
   },
}
const mkSpring = () => {
let seasonImg = document.querySelector('.showSeason')
seasonImg.setAttribute('src', seasons.spring.url)
let tempBox = document.querySelector('.temp')
tempBox.innerHTML = seasons.spring.temp
let textBox = document.querySelector('.text')
textBox.innerHTML = seasons.spring.text
// seasonImg.setAttribute('src', seasons.spring)
// seasonImg.setAttribute('class','showSeason')
// let displayMain = document.querySelector('.display')
// displayMain.append(seasonImg)
}

const mkSummer = () => {
    let seasonImg = document.querySelector('.showSeason')
seasonImg.setAttribute('src', seasons.summer.url)
let tempBox = document.querySelector('.temp')
tempBox.innerHTML = seasons.summer.temp
let textBox = document.querySelector('.text')
textBox.innerHTML = seasons.summer.text
    // let seasonImg = document.createElement('img')
    // seasonImg.setAttribute('src', seasons.summer)
    // seasonImg.setAttribute('class','showSeason')
    // let displayMain = document.querySelector('.display')
    // displayMain.append(seasonImg)
}

const mkAutumn = () => {
    let seasonImg = document.querySelector('.showSeason')
seasonImg.setAttribute('src', seasons.autumn.url)
let tempBox = document.querySelector('.temp')
tempBox.innerHTML = seasons.autumn.temp
let textBox = document.querySelector('.text')
textBox.innerHTML = seasons.autumn.text
    // let seasonImg = document.createElement('img')
    // seasonImg.setAttribute('src', seasons.autumn)
    // seasonImg.setAttribute('class','showSeason')
    // let displayMain = document.querySelector('.display')
    // displayMain.append(seasonImg)
}

const mkWinter = () => {
    let seasonImg = document.querySelector('.showSeason')
seasonImg.setAttribute('src', seasons.winter.url)
let tempBox = document.querySelector('.temp')
tempBox.innerHTML = seasons.winter.temp
let textBox = document.querySelector('.text')
textBox.innerHTML = seasons.winter.text
    // let seasonImg = document.createElement('img')
    // seasonImg.setAttribute('src', seasons.winter)
    // seasonImg.setAttribute('class','showSeason')
    // let displayMain = document.querySelector('.display')
    // displayMain.append(seasonImg)
    
}

let pets = {
    dogs: {
        life: "10-13yrs",
        text:"Dogs can be there for you even when people can't. They offer unconditional love, emotional support, and constant cuddles that help stave off social isolation. A small Australian study discovered that dog ownership reduces loneliness.",
        url:'https://thumbs.gfycat.com/GivingOffensiveAplomadofalcon-size_restricted.gif' 
    },

    cats: {
        life: "10-15yrs",
        text:"Cats offer companionship, unconditional love, entertainment, affection, lots of purring, comfortable silences and they're trainable! Cats are: Happy living indoors. Neat, grooming themselves regularly.",
        url:'https://64.media.tumblr.com/7c7a815d2772fb14554e71d9273f0c76/tumblr_p4v7yhHJZz1v1fssvo1_1280.gif'
    },

    birds: {
        life: "20yrs",
        text:"Birds do have certain advantages over other pets in that they do not have to be walked and they are housed in a cage. Birds are smart, they talk, and like to play and snuggle. They love to be around people and are usually very interactive.",
        url:'https://media.tenor.com/2ch6tKmrwNIAAAAM/cute-bird.gif'
    },

    fish: {
        life: "2-5yrs",
        text:"Fish are easy to care for. If you are too busy to care for a pet that needs constant attention, consider getting a fish. Fish do not require hours of maintenance to ensure their needs are met. They do not need outdoor exercise or playtime because they do not need to be entertained",
       url:'https://thumbs.gfycat.com/OpenSmoothAntlion-size_restricted.gif'  
   },
}

const printDog = () => {
    let petImg = document.querySelector('.showPet')
petImg.setAttribute('src', pets.dogs.url)
let lifespanBox = document.querySelector('.lifeSpan')
lifespanBox.innerHTML = pets.dogs.life
let textpetBox = document.querySelector('.textPet')
textpetBox.innerHTML = pets.dogs.text
}
const printCat = () => {
    let petImg = document.querySelector('.showPet')
petImg.setAttribute('src', pets.cats.url)
let lifespanBox = document.querySelector('.lifeSpan')
lifespanBox.innerHTML = pets.cats.life
let textpetBox = document.querySelector('.textPet')
textpetBox.innerHTML = pets.cats.text
}
const printBird = () => {
    let petImg = document.querySelector('.showPet')
petImg.setAttribute('src', pets.birds.url)
let lifespanBox = document.querySelector('.lifeSpan')
lifespanBox.innerHTML = pets.birds.life
let textpetBox = document.querySelector('.textPet')
textpetBox.innerHTML = pets.birds.text
}
const printFish = () => {
    let petImg = document.querySelector('.showPet')
petImg.setAttribute('src', pets.fish.url)
let lifespanBox = document.querySelector('.lifeSpan')
lifespanBox.innerHTML = pets.fish.life
let textpetBox = document.querySelector('.textPet')
textpetBox.innerHTML = pets.fish.text
}