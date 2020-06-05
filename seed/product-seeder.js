var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [ 
   new Product({
   imagePath:'https://s1.gaming-cdn.com/images/products/1419/271x377/call-of-duty-infinite-warfare-cover.jpg',
   title:'Call of Duty',
   description:'its a good game probably the best in shooter games',
   price:5000
   }),
    new Product({
    imagePath:'https://media.contentapi.ea.com/content/dam/gin/common/packart/nfs-gen-packart.jpg',
    title:'Need for Speed',
    description:'its a good game probably the best in racing games',
    price:3000
    }),
    new Product({
    imagePath:'https://i.pinimg.com/originals/d8/dd/f8/d8ddf8f930beb6c407a444f938fb1e9f.jpg',
    title:'GTA V',
    description:'One of the best adventure games out there everybody ahve to try it atleast once',
    price:5500
    }),
    new Product({
    imagePath:'https://gametrex.com/wp-content/uploads/2019/07/Total-Overdose-Free-Download.jpg',
    title:'Total Over Dose',
    description:'its a good game probably the better in shooter games it has an odinary story with unique gameplay',
    price:1000
    }),
    new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
    title:'Witcher',
    description:'We can call this game all we can have treat for gammers ',
    price:3500
    }),
    new Product({
        imagePath:'https://images-na.ssl-images-amazon.com/images/I/51tvxl9PlcL._SX380_BO1,204,203,200_.jpg',
        title:'Assasins creed',
        description:'This game has a unique story which will include past and future in an epic adventure',
        price:3500
        })

];
var done =0;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done===products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}