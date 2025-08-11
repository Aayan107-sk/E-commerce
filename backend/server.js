
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
    { img: 'hero.jpg' , name: "product1" , price :"$20" ,}, 
    { img: 'hero.jpg' , name: "product1" , price :"$20" ,}, 
    { img: 'hero.jpg' , name: "product1" , price :"$20" ,}, 
    { img: 'hero.jpg' , name: "product1" , price :"$20" ,}, 
    { img: 'hero.jpg' , name: "product1" , price :"$20" ,}, 
    { img: 'hero.jpg' , name: "product1" , price :"$20" ,},

  ];

  res.json(product)
})


app.get('/api/electronics',(req,res) => {
   const product = [
    { img: 'hero.jpg' , name: "product1" , price:"$20" ,},
    { img: "product.jpg" , name: "product2" , price:"$210" ,},
    { img: 'product.jpg' , name: "product2" , price:"$210" ,},
    { img: 'product.jpg' , name: "product2" , price:"$210" ,},
    { img: 'product.jpg' , name: "product2" , price:"$210" ,},

  ];

  res.send(product)
})

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});