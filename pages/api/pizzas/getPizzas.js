// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const pizzas = [
    {
        name: 'Plain',
        price: 9,
        desc: 'Classic, plain pizza - no frills'
    },
    {
        name: 'Pepperoni',
        price: 10,
        desc: 'Cheese with pepperoni'
    },
    {
        name: 'Hawaiian',
        price: 10,
        desc: 'If you like to live on the wild side'
    }
]

export default function handler(req, res) {
    res.status(200).json(pizzas)
  }
