import ProjectThree from '../projectImages/babui-pakhi.PNG';
import ProjectTwo from '../projectImages/coffeeshop.png';
import ProjectOne from '../projectImages/hotel-reservation.PNG';
import ProjectFive from '../projectImages/myPortfolio.PNG';
import ProjectFour from '../projectImages/shodaimama.PNG';



const projects = [

    {
        id: 1,
        category:"Business",
        name: "Hotel Reservation Website",
        desc: 'The main objective of the Hotel Reservation System is to manage the details of Hotel, Payments, Rooms, Services and Customers.',
        img: ProjectOne,
        link1: 'https://github.com/asifhjahid/react-hotel-reservation-website',
        link2: 'https://hotel-reservation-09.netlify.app/',
    },
    {
        id:2,
        category: 'Portfolio',
        name:'My Portfolio',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
        img: ProjectFive,
        link1: 'https://github.com/asifhjahid/my-portfolio',
        link2: 'https://www.google.com',
    },
    
    
     {
        id:3,
        category: 'Business',
        name:"E-commerce website",
        desc:'Customers can purchase items from the comfort of their own homes or work place. Shopping is made easier and convenient for the customer through internet.',
        img:ProjectFour,
        link1: 'https://github.com/asifhjahid/react-e-commerce-site',
        link2: 'https://e-shodaimama.netlify.app',
      },
      {
        id:4,
        category: 'Business',
        name:'E-commerce website',
        desc:'Customers can purchase items from the comfort of their own homes or work place. Shopping is made easier and convenient for the customer through internet.',
        img:ProjectThree,
        link1: 'https://github.com/asifhjahid/Ecommerce-website-v2',
        link2: 'https://babuipakhi-a-dreamer.netlify.app/',
    },
      {
        id:5,
        category: 'Business',
        name:'CoffeeShop',
        desc:'Get online ordering, curbside pickup, local delivery, shipping & more—all in one product',
        img:ProjectTwo,
        link1: 'https://github.com/asifhjahid/simple-coffee-shop',
        link2: 'https://asifhjahid.github.io/simple-coffee-shop/',
    },
    
]

export default projects;