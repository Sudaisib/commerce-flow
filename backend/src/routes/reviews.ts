interface Review {
    productId: number;
    rating: number;
    comment: string;
}

const reviews: Review[] = [];

export function getReviews(): Review[] {
    return reviews;
}

