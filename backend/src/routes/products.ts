interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        price: 1200
    },
    {
        id: 2,
        name: "Smartphone",
        price: 800
    }
];

export function getProducts(): Product[] {
    return products;
}

