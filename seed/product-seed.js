const product = require("../model/product")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/shoping", {useNewUrlParser:true, useUnifiedTopology: true, useUnifiedTopology: true })


const products = [new product({
    imgpath:"https://m.media-amazon.com/images/I/71cTCvSFJTL._AC_UL436_SEARCH212385_.jpg",
    title:"PUBG",
    description:"Multiplayer Game",
    price:120
 }),new product({
    imgpath:"https://m.media-amazon.com/images/I/71tYtbd1wUL._AC_UL436_SEARCH212385_.jpg",
    title:"FIFA 19",
    description:"Football",
    price:220

}),new product({
    imgpath:"https://m.media-amazon.com/images/I/51NMBH825HL._AC_UL436_SEARCH212385_.jpg",
    title:"GTA Vice city",
    description:"Rockstar Games",
    price:234

}),new product({
    imgpath:"https://m.media-amazon.com/images/I/61rAZbhTV4L._AC_UL436_SEARCH212385_.jpg",
    title:"GTA SA",
    description:"Rockstar Games",
    price:340

}),new product({
    imgpath:"https://m.media-amazon.com/images/I/616FBaxXHFL._AC_UL436_SEARCH212385_.jpg",
    title:"NFS Payback",
    description:"Eletronic Arts",
    price:675

}),
    new product({
        imgpath:"https://www.g2deal.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/c/a/call-of-duty-advanced-warfare.jpg",
        title:"Call of Duty",
        description:"Activision Publishing, Inc",
        price:453

    })
]
var done = 0
    for(var i=0; i < products.length; i++){
    products[i].save((error, result)=>{
    done++
    if (done === products.length){
        exit()
    }
})}
function exit(){
    mongoose.disconnect()
}
