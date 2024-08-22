import { fetchData } from "@/utils/dataFetcher";
import dynamic from "next/dynamic";

export async function generateMetadata({ params }) {
    return {
        title: `User number: ${params.id}`,
        description: `this is users page id: ${params.id}`
    }
}

const DynamicCard = dynamic(() => import("@/components/Card"), {
    loading: () => <p>Loading...</p>
});

async function idPage({ params }) {
    const userData = await fetchData(`http://localhost:3000/api/users/${params.id}`);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>this is users page id:{params.id}</h1>

            <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                <DynamicCard image={true} data={userData} height={500} key={userData.id} btnTrue={false} />
            </section>
        </>
    );
}

export default idPage;