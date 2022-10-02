const mobile_menu_button = document.getElementById('mobile_menu_button')
const mobile_nav = document.getElementById('mobile_nav')
mobile_menu_button.addEventListener('click', () => {
    mobile_nav.classList.toggle('mobile_nav--open')
    mobile_menu_button.classList.toggle('mobile_menu_button--open')
})



const cart_button = document.getElementById('cart_button')
const cart = document.getElementById('cart')
cart_button.addEventListener('click', () => {
    cart.classList.toggle('cart--open')
})



const cart_empty_text = document.getElementById('cart_empty_text')
const cart_checkout_button = document.getElementById('cart_checkout_button')
const cart_button_count = document.getElementById('cart_button_count')
let cartItems = 0
function updateCartUI() {
    if (cartItems > 0) {
        cart_empty_text.classList.remove('cart_empty_text--empty')
        cart_checkout_button.classList.remove('cart_checkout_button--empty')
        cart_button_count.classList.remove('cart_button_count--empty')
    } else {
        cart_empty_text.classList.add('cart_empty_text--empty')
        cart_checkout_button.classList.add('cart_checkout_button--empty')
        cart_button_count.classList.add('cart_button_count--empty')
    }
    cart_button_count.innerText = cartItems
}
updateCartUI()




const main_img = document.getElementById('main_img')
const lightbox_main_img = document.getElementById('lightbox_main_img')
const imagesSrc = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg',
]
let activeImgIndex = 0;
function setMainImg() {
    lightbox_main_img.setAttribute('src', imagesSrc[activeImgIndex])
    main_img.setAttribute('src', imagesSrc[activeImgIndex])
}
setMainImg()
const mobile_previous_button = document.getElementById('mobile_previous_button')
const mobile_next_button = document.getElementById('mobile_next_button')
mobile_previous_button.addEventListener('click', () => {
    if (activeImgIndex === 0) {
        activeImgIndex = 3;
    } else {
        activeImgIndex--
    }
    setMainImg()
})
mobile_next_button.addEventListener('click', () => {
    if (activeImgIndex === 3) {
        activeImgIndex = 0;
    } else {
        activeImgIndex++
    }
    setMainImg()
})



const decrease_item_count = document.getElementById('decrease_item_count')
const increase_item_count = document.getElementById('increase_item_count')
const add_to_cart_count_input = document.getElementById('add_to_cart_count_input')
const add_to_cart_button = document.getElementById('add_to_cart_button')
const cart_ul = document.getElementById('cart_ul')
decrease_item_count.addEventListener('click', () => {
    if (add_to_cart_count_input.value !== '0') { add_to_cart_count_input.value-- }
})
increase_item_count.addEventListener('click', () => {
    add_to_cart_count_input.value++
})
add_to_cart_button.addEventListener('click', () => {
    let itemsCount = add_to_cart_count_input.value
    if (itemsCount !== '0') {
        cartItems++
        const li = cart_ul.appendChild(document.createElement('li'))
        li.classList.add('cart-item')
        const img = li.appendChild(document.createElement('img'))
        img.setAttribute('src', './images/image-product-1-thumbnail.jpg')
        const cart_item_info_container = li.appendChild(document.createElement('div'))
        cart_item_info_container.classList.add('cart_item_info_container')
        const cart_item_name = cart_item_info_container.appendChild(document.createElement('h6'))
        cart_item_name.classList.add('cart_item_name')
        cart_item_name.innerText = 'Fall Limited Edition Sneakers'
        const price_and_count = cart_item_info_container.appendChild(document.createElement('p'))
        price_and_count.classList.add('price_and_count')
        price_and_count.innerText = `$125.00 x ${itemsCount}`
        const end_price = cart_item_info_container.appendChild(document.createElement('p'))
        end_price.classList.add('end_price')
        end_price.innerText = `$${125.00 * itemsCount}`
        const cart_item_delete_button = li.appendChild(document.createElement('button'))
        cart_item_delete_button.classList.add('cart_item_delete_button')
        cart_item_delete_button.addEventListener('click', () => {
            cart_item_delete_button.parentElement.remove()
            cartItems--
            updateCartUI()
        })
        updateCartUI()
    }
})

const main_img_thumbnail_button_0 = document.getElementById('main_img_thumbnail_button_0')
const main_img_thumbnail_button_1 = document.getElementById('main_img_thumbnail_button_1')
const main_img_thumbnail_button_2 = document.getElementById('main_img_thumbnail_button_2')
const main_img_thumbnail_button_3 = document.getElementById('main_img_thumbnail_button_3')
const lightbox_main_img_thumbnail_button_0 = document.getElementById('lightbox_main_img_thumbnail_button_0')
const lightbox_main_img_thumbnail_button_1 = document.getElementById('lightbox_main_img_thumbnail_button_1')
const lightbox_main_img_thumbnail_button_2 = document.getElementById('lightbox_main_img_thumbnail_button_2')
const lightbox_main_img_thumbnail_button_3 = document.getElementById('lightbox_main_img_thumbnail_button_3')
function setActiveThumbnail() {
    switch (activeImgIndex) {
        case 0:
            main_img_thumbnail_button_0.classList.add('main_img_thumbnails_button--active')
            main_img_thumbnail_button_1.classList.remove('main_img_thumbnails_button--active')
            main_img_thumbnail_button_2.classList.remove('main_img_thumbnails_button--active')
            main_img_thumbnail_button_3.classList.remove('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_0.classList.add('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_1.classList.remove('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_2.classList.remove('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_3.classList.remove('main_img_thumbnails_button--active')
            break
        case 1:
            main_img_thumbnail_button_0.classList.remove('main_img_thumbnails_button--active')
            main_img_thumbnail_button_1.classList.add('main_img_thumbnails_button--active')
            main_img_thumbnail_button_2.classList.remove('main_img_thumbnails_button--active')
            main_img_thumbnail_button_3.classList.remove('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_0.classList.remove('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_1.classList.add('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_2.classList.remove('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_3.classList.remove('main_img_thumbnails_button--active')
            break
        case 2:
            main_img_thumbnail_button_0.classList.remove('main_img_thumbnails_button--active')
            main_img_thumbnail_button_1.classList.remove('main_img_thumbnails_button--active')
            main_img_thumbnail_button_2.classList.add('main_img_thumbnails_button--active')
            main_img_thumbnail_button_3.classList.remove('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_0.classList.remove('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_1.classList.remove('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_2.classList.add('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_3.classList.remove('main_img_thumbnails_button--active')
            break
        case 3:
            main_img_thumbnail_button_0.classList.remove('main_img_thumbnails_button--active')
            main_img_thumbnail_button_1.classList.remove('main_img_thumbnails_button--active')
            main_img_thumbnail_button_2.classList.remove('main_img_thumbnails_button--active')
            main_img_thumbnail_button_3.classList.add('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_0.classList.remove('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_1.classList.remove('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_2.classList.remove('main_img_thumbnails_button--active')
            lightbox_main_img_thumbnail_button_3.classList.add('main_img_thumbnails_button--active')
            break
    }
}
main_img_thumbnail_button_0.addEventListener('click', () => {
    activeImgIndex = 0
    setMainImg()
    setActiveThumbnail()

})
main_img_thumbnail_button_1.addEventListener('click', () => {
    activeImgIndex = 1
    setMainImg()
    setActiveThumbnail()
})
main_img_thumbnail_button_2.addEventListener('click', () => {
    activeImgIndex = 2
    setMainImg()
    setActiveThumbnail()
})
main_img_thumbnail_button_3.addEventListener('click', () => {
    activeImgIndex = 3
    setMainImg()
    setActiveThumbnail()
})
lightbox_main_img_thumbnail_button_0.addEventListener('click', () => {
    activeImgIndex = 0
    setMainImg()
    setActiveThumbnail()
})
lightbox_main_img_thumbnail_button_1.addEventListener('click', () => {
    activeImgIndex = 1
    setMainImg()
    setActiveThumbnail()
})
lightbox_main_img_thumbnail_button_2.addEventListener('click', () => {
    activeImgIndex = 2
    setMainImg()
    setActiveThumbnail()
})
lightbox_main_img_thumbnail_button_3.addEventListener('click', () => {
    activeImgIndex = 3
    setMainImg()
    setActiveThumbnail()
})




const lightbox_close_button = document.getElementById('lightbox_close_button')
const lightbox = document.getElementById('lightbox')
const main_img_button = document.getElementById('main_img_button')
main_img_button.addEventListener('click', () => {
    lightbox.classList.add('lightbox--active')
})
lightbox_close_button.addEventListener('click', () => {
    lightbox.classList.remove('lightbox--active')
})

const lightbox_previous_button = document.getElementById('lightbox_previous_button')
const lightbox_next_button = document.getElementById('lightbox_next_button')
lightbox_previous_button.addEventListener('click', () => {
    if (activeImgIndex === 0) {
        activeImgIndex = 3;
    } else {
        activeImgIndex--
    }
    setMainImg()
    setActiveThumbnail()
})
lightbox_next_button.addEventListener('click', () => {
    if (activeImgIndex === 3) {
        activeImgIndex = 0;
    } else {
        activeImgIndex++
    }
    setMainImg()
    setActiveThumbnail()
})