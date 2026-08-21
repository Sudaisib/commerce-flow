interface Order {
    id: number;
    customerId: number;
    total: number;
}

const orders: Order[] = [];

export function createOrder(order: Order): void {
    orders.push(order);
}

