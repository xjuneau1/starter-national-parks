const descriptions = document.querySelectorAll('.description-display')
const ratings = document.querySelectorAll('.rating-display > .value')

for (let desc of descriptions){
    desc.innerText.slice(0,250)
    desc.innerHTML += `<a href='#'>...</a>`
    console.log(desc.innerText)
}

for (let rating of ratings){
    const rate = parseFloat(rating.innerText)

    if(rate <= 4.6){
        rating.classList.remove('value')
        rating.classList.add('low-rating')
    } else {
        rating.classList.remove('value')
        rating.classList.add('high-rating')
    }
}



// for (let each of scriptions){
//     descriptions.innerHTML = each + `<a>...</a>`
//     console.log(descriptions)
// }


