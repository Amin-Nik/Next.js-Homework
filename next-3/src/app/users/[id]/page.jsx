import { fetchData } from "@/utils/dataFetcher";
import Card from "@/components/Card";

async function idPage({ params }) {
    const userData = await fetchData(`https://dummyjson.com/users/${params.id}`);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>this is users page id:{params.id}</h1>

            <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                <Card data={userData} height={500} key={userData.id} btnTrue={false} />
            </section>
        </>
    );
}

export default idPage;