import { fetchData } from "@/utils/dataFetcher";
import Card from "@/components/Card";

async function idPage({ params }) {
    const recipesData = await fetchData(`https://dummyjson.com/recipes/${params.id}`);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>this is recipes page id:{params.id}</h1>

            <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                <Card data={recipesData} height={500} key={recipesData.id} btnTrue={false} />
            </section>
        </>
    );
}

export default idPage;