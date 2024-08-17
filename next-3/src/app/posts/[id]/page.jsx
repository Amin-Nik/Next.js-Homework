import { fetchData } from "@/utils/dataFetcher";
import Card from "@/components/Card";

async function idPage({ params }) {
    const postData = await fetchData(`https://dummyjson.com/posts/${params.id}`);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>this is posts page id:{params.id}</h1>

            <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                <Card data={postData} height={500} key={postData.id} btnTrue={false} />
            </section>
        </>
    );
}

export default idPage;