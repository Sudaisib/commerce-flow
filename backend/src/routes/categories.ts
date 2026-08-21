interface Category {
    id: number;
    name: string;
}

const categories: Category[] = [
    {
        id: 1,
        name: "Electronics"
    },
    {
        id: 2,
        name: "Fashion"
    }
];

export function getCategories(): Category[] {
    return categories;
}

