import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
    const products = [
        { id: 1, name: "Laptop", price: 40000, salePrice: 45000, image: "./img/pexels-life-of-pix-7974.jpg" },
        { id: 2, name: "Television", price: 30000, salePrice: 35000, image: "./img/images.jpeg" },
        { id: 3, name: "Washing Machine", price: 15000, salePrice: 18000 },
        { id: 4, name: "Bat", price: 5000, salePrice: 7000 },
        { id: 5, name: "Mobile", price: 20000, salePrice: 25000 }
    ];

    if (req.query.search) {
        const filterProducts = products.filter(product =>
            product.name.toLowerCase().includes(req.query.search.toLowerCase())
        );
        res.send(filterProducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
