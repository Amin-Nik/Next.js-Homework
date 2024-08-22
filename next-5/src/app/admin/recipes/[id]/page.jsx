import Form from "@/components/Form";
import { fetchData } from "@/utils/dataFetcher";
import dynamic from "next/dynamic";

export async function generateMetadata({ params }) {
    return {
        title: `Recipe number: ${params.id}`,
        description: `this is recipes page id: ${params.id}`
    }
}

const DynamicCard = dynamic(() => import("@/components/Card"), {
    loading: () => <p>Loading...</p>
});

async function idPage({ params }) {
    const recipesData = await fetchData(`http://localhost:3000/api/recipes/${params.id}`);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>this is recipes page id:{params.id}</h1>
            <Form name="name" btnText="Edit" url={`http://localhost:3000/api/recipes/${params.id}`} method="patch" id={params.id} />

            <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                <DynamicCard isAdmin={true} data={recipesData} height={500} key={recipesData.id} btnTrue={false} image={true} />
            </section>
        </>
    );
}

export default idPage;