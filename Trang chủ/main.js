const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)
const slides=$$('.slider')
const btn=$$('.slide-arrow')
const btnPleft=$('.btnProduct.left')
const btnPright=$('.btnProduct.right')
const itemProduct=$$('.product__content-item')
const productList=$('.product__content') 
const btnNleft=$('.btnNews.left')
const btnNright=$('.btnNews.right')
const itemNews=$$('.news__content')
const newsList=$('.news__container')


let activeSlide=0
btn.forEach(function(item,index){
    item.onclick=function(){
        switch(index){
            case 0:
                activeSlide--
                if(activeSlide < 0){
                    activeSlide=slides.length-1
                }
                setActive(activeSlide)
                break
            case 1:
                activeSlide++
                if(activeSlide > slides.length-1){
                    activeSlide=0
                }
                setActive(activeSlide)
                break
        }
    }
})
function setActive(index){
    slides.forEach(slide =>slide.classList.remove('active'))
    slides[index].classList.add('active')
}
setInterval(function(){
    setActive(activeSlide)
    activeSlide++
    if(activeSlide > slides.length-1){
        activeSlide=0
    }
},5000)


var scrollAmount=0
var scrollPerClick=productList.clientWidth

btnPleft.onclick=() => {
    productList.scrollTo({
        top:0,
        left:(scrollAmount-=scrollPerClick),
        behavior:'smooth'
    })
    if(scrollAmount < 0){
        scrollAmount=0
    }

}

btnPright.onclick=() => {
    if(scrollAmount < productList.scrollWidth - productList.clientWidth-1){
        productList.scrollTo({
            top:0,
            left:(scrollAmount+=scrollPerClick),
            behavior:'smooth'
        })
    }
}

var scrollAmountNews=0
var scrollPerClickNews=newsList.clientWidth

btnNleft.onclick=() => {
    newsList.scrollTo({
        top:0,
        left:(scrollAmountNews-=scrollPerClickNews),
        behavior:'smooth'
    })
    if(scrollAmountNews < 0){
        scrollAmountNews=0
    }

}

btnNright.onclick=() => {
    if(scrollAmountNews < newsList.scrollWidth - newsList.clientWidth-1){
        newsList.scrollTo({
            top:0,
            left:(scrollAmountNews+=scrollPerClickNews),
            behavior:'smooth'
        })
    }
}
