import { fetchData } from "@/utils/dataFetcher";
import dynamic from "next/dynamic";

export async function generateMetadata({ params }) {
    return {
        title: `Post number: ${params.id}`,
        description: `this is posts page id: ${params.id}`
    }
}

const DynamicCard = dynamic(() => import("@/components/Card"), {
    loading: () => <p>Loading...</p>
});

async function idPage({ params }) {
    const postData = await fetchData(`https://dummyjson.com/posts/${params.id}`);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>this is posts page id:{params.id}</h1>

            <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                <DynamicCard data={postData} height={500} key={postData.id} btnTrue={false} />
            </section>
        </>
    );
}

export default idPage;