import Form from "@/components/Form";
import { fetchData } from "@/utils/dataFetcher";
import dynamic from "next/dynamic";

export const metadata = {
    title: "Recipes",
    description: "this is recipes page"
}

const DynamicCard = dynamic(() => import("@/components/Card"), {
    loading: () => <p>Loading...</p>
});

async function recipes() {
    const recipeData = await fetchData("http://localhost:3000/api/recipes");

    return (
        <>
            <h1 style={{ textAlign: "center" }}>this is recipes page</h1>
            <Form name="name" btnText="Post" />

            <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                {recipeData.recipes.map(data => {
                    return <DynamicCard isAdmin={true} data={data} PNum={4} height={600} key={data.id} navigateTo={`/admin/recipes/${data.id}`} image={true} />
                })}
            </section>
        </>
    );
}

export default recipes;