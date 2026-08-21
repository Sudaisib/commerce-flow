interface OrderHistory {
    orderId: number;
    customerId: number;
}

const orderHistory: OrderHistory[] = [];

export function getOrderHistory(
    customerId: number
): OrderHistory[] {

    return orderHistory.filter(
        order => order.customerId === customerId
    );
}

