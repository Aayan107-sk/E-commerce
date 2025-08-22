
import express from 'express';

const app =express();


// app.get('/', (req, res) => {
//    const product = [
    
//     { img: 'hero.jpg' , name: "product1" , price:"$20" ,},
//     { img: 'Wireless Headphones.jpg' , name: "Wireless Headphones" , price:"$210" ,},
//     { img: 'product.jpg' , name: "product2" , price:"$210" ,},
//     { img: 'product.jpg' , name: "product2" , price:"$210" ,},
//     { img: 'product.jpg' , name: "product2" , price:"$210" ,},
//     { img: 'product.jpg' , name: "product1" , price:"$20" ,},
//     { img: 'product.jpg' , name: "product2" , price:"$210" ,},
//     { img: 'product.jpg' , name: "product2" , price:"$210" ,},
//     { img: 'product.jpg' , name: "product2" , price:"$210" ,},
//     { img: 'product.jpg' , name: "product2" , price:"$210" ,},
    
    
//   ];
  
//   res.send(product);
// });

app.get('/api',(req,res) => {
   const product = [
    
    { img: 'hero.jpg' , name: "product1" , price :"$20" ,}, 
    { img: 'el.png' , name: "product1" , price:"$20" ,},
    { img: 'a.png ' , name: "product1" , price:"$20" ,},
    { img: 'goodHome.png' , name: "product1" , price:"$20" ,},
    { img: 'book.png' , name: "book" , price:"$20" ,},
    { img: 'sport.png' , name: "sports" , price:"$20" ,},
    { img: 'jew.png' , name: "jewelry" , price:"$20" ,},
  

  ];

  res.json(product)
})


app.get('/api/electronics',(req,res) => {
   const product = [
    { img: 'el.png' , name: "product1" , price:"$20" ,},
    { img: 'el.png' , name: "product1" , price:"$20" ,},
    { img: 'el.png' , name: "product1" , price:"$20" ,},
    { img: 'el.png' , name: "product1" , price:"$20" ,},
    { img: 'el.png' , name: "product1" , price:"$20" ,},
    { img: 'el.png' , name: "product1" , price:"$20" ,},
    { img: 'el.png' , name: "product1" , price:"$20" ,},
    { img: 'el.png' , name: "product1" , price:"$20" ,},
    { img: 'el.png' , name: "product1" , price:"$20" ,},
    { img: 'el.png' , name: "product1" , price:"$20" ,},
   
  ];

  res.send(product)
})

app.get('/api/apparel',(req,res) => {
   const product = [
    { img: 'a.png ' , name: "product1" , price:"$20" ,},
    { img: 'a.png ' , name: "product1" , price:"$20" ,},
    { img: 'a.png ' , name: "product1" , price:"$20" ,},
    { img: 'a.png ' , name: "product1" , price:"$20" ,},
    { img: 'a.png ' , name: "product1" , price:"$20" ,},
    { img: 'a.png ' , name: "product1" , price:"$20" ,},
    { img: 'a.png ' , name: "product1" , price:"$20" ,},
    { img: 'a.png ' , name: "product1" , price:"$20" ,},
    { img: 'a.png ' , name: "product1" , price:"$20" ,},
    { img: 'a.png ' , name: "product1" , price:"$20" ,},
    
    
  ];

  res.send(product)
})
app.get('/api/home-goods',(req,res) => {
   const product = [
    { img: 'goodHome.png' , name: "product1" , price:"$20" ,},
    { img: 'goodHome.png' , name: "product1" , price:"$20" ,},
    { img: 'goodHome.png' , name: "product1" , price:"$20" ,},
    { img: 'goodHome.png' , name: "product1" , price:"$20" ,},
    { img: 'goodHome.png' , name: "product1" , price:"$20" ,},
    { img: 'goodHome.png' , name: "product1" , price:"$20" ,},
    { img: 'goodHome.png' , name: "product1" , price:"$20" ,},
    { img: 'goodHome.png' , name: "product1" , price:"$20" ,},
    { img: 'goodHome.png' , name: "product1" , price:"$20" ,},
    { img: 'goodHome.png' , name: "product1" , price:"$20" ,},

  ];

  res.send(product)
})

app.get('/api/books',(req,res) => {
   const product = [
    { img: 'book.png' , name: "book" , price:"$20" ,},
    { img: 'book.png' , name: "book" , price:"$20" ,},
    { img: 'book.png' , name: "book" , price:"$20" ,},
    { img: 'book.png' , name: "book" , price:"$20" ,},
    { img: 'book.png' , name: "book" , price:"$20" ,},
    { img: 'book.png' , name: "book" , price:"$20" ,},
    { img: 'book.png' , name: "book" , price:"$20" ,},
    { img: 'book.png' , name: "book" , price:"$20" ,},
    { img: 'book.png' , name: "book" , price:"$20" ,},
    { img: 'book.png' , name: "book" , price:"$20" ,},
  ];

  res.send(product)
})

app.get('/api/sports',(req,res) => {
   const product = [
    { img: 'sport.png' , name: "sports" , price:"$20" ,},
    { img: 'sport.png' , name: "sports" , price:"$20" ,},
    { img: 'sport.png' , name: "sports" , price:"$20" ,},
    { img: 'sport.png' , name: "sports" , price:"$20" ,},
    { img: 'sport.png' , name: "sports" , price:"$20" ,},
    { img: 'sport.png' , name: "sports" , price:"$20" ,},
    { img: 'sport.png' , name: "sports" , price:"$20" ,},
    { img: 'sport.png' , name: "sports" , price:"$20" ,},
    { img: 'sport.png' , name: "sports" , price:"$20" ,},
    
  ];

  res.send(product)
})

app.get('/api/jewelry',(req,res) => {
   const product = [
    { img: 'jew.png' , name: "jewelry" , price:"$20" ,},
    { img: 'jew.png' , name: "jewelry" , price:"$20" ,},
    { img: 'jew.png' , name: "jewelry" , price:"$20" ,},
    { img: 'jew.png' , name: "jewelry" , price:"$20" ,},
    { img: 'jew.png' , name: "jewelry" , price:"$20" ,},
    { img: 'jew.png' , name: "jewelry" , price:"$20" ,},
    { img: 'jew.png' , name: "jewelry" , price:"$20" ,},
    { img: 'jew.png' , name: "jewelry" , price:"$20" ,},
    { img: 'jew.png' , name: "jewelry" , price:"$20" ,},
    { img: 'jew.png' , name: "jewelry" , price:"$20" ,},
  ];

  res.send(product)
})




const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});