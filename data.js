const { name } = require("ejs")

const products = [
    { id: 1, name: 'Plante1', price: 100, description: 'lalalalalla', image: "/images/products/plante1.png"  },
    { id: 2, name: 'Plante2', price: 200, description: 'lalalalalla2', image: "/images/products/plante2.png"  },
    { id: 3, name: 'Plante3', price: 300, description: 'lalalalalla3', image: "/images/products/plante3.png"  },
    { id: 4, name: 'Plante4', price: 400, description: 'lalalalalla4', image: "/images/products/plante4.png"  },
    { id: 5, name: 'Plante5', price: 500, description: 'lalalalalla5', image: "/images/products/plante5.png"  },
    { id: 6, name: 'Plante6', price: 600, description: 'lalalalalla6', image: "/images/products/plante6.png"  },
    { id: 7, name: 'Plante7', price: 700, description: 'lalalalalla7', image: "/images/products/plante7.png"  },
    { id: 8, name: 'Plante8', price: 800, description: 'lalalalalla8', image: "/images/products/plante8.png"  },
]

const users =[
    { id: 1, username: 'Rose', eamil : 'rose.gmail.com', lastname: 'Tulipe', password: "I<3Flower", liked: [], plants: [], cart: [] },
]

module.exports = products, users