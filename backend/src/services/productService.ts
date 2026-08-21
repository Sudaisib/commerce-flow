interface Product {
    id: number;
    name: string;
    price: number;
}

export function calculateDiscount(
    product: Product,
    discount: number
): number {

    return product.price - discount;
}

