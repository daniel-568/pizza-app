const cart = {};

export default function handler(req, res) {
    // check req.body for which pizza.name is to be incremented
    const pizzaName = req.body.pizzaName
    if (pizzaName in cart) cart[pizzaName]++;
    else cart[pizzaName] = 1;
    res.status(200).json(cart)
}
