import { currentUser } from "@clerk/nextjs";
import { get } from "./StripeServiceProvider"
import type { User } from "@clerk/nextjs/api";

export const getInvoices = async () => {
    const user: User | null = await currentUser();
    const email = user?.emailAddresses[0].emailAddress

    const customer = await get(`customers?email=${email}`);
    const invoices = await get(`invoices?customer=${customer.data[0].id}`);
    return invoices.data;
}