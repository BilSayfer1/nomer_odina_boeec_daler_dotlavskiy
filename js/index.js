import { goods } from "./db.js"

const container = document.querySelector('.container')
let center = document.querySelector('center span')
const action_btns = document.querySelectorAll('[data-action]')
let cart_items = []

action_btns.forEach((btn) => {
    btn.onclick = () => {
        let arr = btn.getAttribute('data-action') === "five" ?  goods.slice(0,5) : goods

        reload(arr, container)
    }
})
reload(goods, container)



function reload(arr, place) {
    place.innerHTML = ""

    for(let item of arr) {
        let main_div = document.createElement('div')
        let picture = document.createElement('img')
        let describe = document.createElement('div')
        let title = document.createElement('span')
        let p = document.createElement('p')
        let row = document.createElement('div')
        let rate = getRateBlock('./icons/dollar.png', item.price)
        let rate2 = getRateBlock('./icons/star.svg', item.rating.rate)
        let rate3 = getRateBlock('./icons/box.png', item.rating.count)
        let save_button = document.createElement('button')        

        main_div.classList.add('item')
        picture.classList.add('item-img')
        describe.classList.add('describe-block')
        row.classList.add('row')
        picture.src = item.image
        picture.alt = "bag"

        title.innerHTML = item.category
        p.innerHTML = item.description.slice(0,100) + " <b>read more</b>"
        save_button.innerHTML = "В избранное"

        main_div.append(picture, describe)
        describe.append(title, p, row, save_button)
        row.append(rate, rate2, rate3)
        place.append(main_div)


        save_button.onclick = () => { 
            cart_items.push(item);
            save_button.style.backgroundColor = "blue"
            save_button.innerHTML = "В избранном"
            save_button.style.color = "white"
        };
        save_button.ondblclick = () => {
            cart_items.push(item);
            save_button.style.backgroundColor = "white"
            save_button.innerHTML = "В избранное"
            save_button.style.color = "black"

        }

        
    }

}


function getRateBlock(path, text) {
    let rate = document.createElement('div')
    let img = document.createElement('img')
    let span = document.createElement('span')

    rate.classList.add('rate')
    img.src = path
    span.innerHTML = text


    rate.append(img, span)
    return rate
}


console.log(cart_items);
