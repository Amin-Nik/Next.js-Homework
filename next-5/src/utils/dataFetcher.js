export async function fetchData(url) {
    try {
        const res = await fetch(url, { next: { tags: ["reload"] } });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}