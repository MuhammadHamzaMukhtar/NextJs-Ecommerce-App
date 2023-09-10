export const get = async (uri: string) => {
    const api = await fetch(process.env.STRIPE_URI + '/' + uri, {
        method: "GET",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${process.env.STRIPE_SECRET_KEY}` },
        cache: "no-cache",
    });
    const result = await api.json()
    return result;
}