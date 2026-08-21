interface CustomerProfile {
    id: number;
    fullName: string;
    email: string;
}

export function getCustomerProfile(
    id: number
): CustomerProfile {

    return {
        id,
        fullName: "CommerceFlow Customer",
        email: "zainab@example.com"
    };
}\

