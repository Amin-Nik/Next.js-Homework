import { fetchData } from "@/utils/dataFetcher";
import Card from "@/components/Card";

async function recipes() {
    const recipeData = await fetchData("https://dummyjson.com/recipes");

    return (
        <>
            <h1 style={{ textAlign: "center" }}>this is recipes page</h1>

            <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                {recipeData.recipes.map(data => {
                    return <Card data={data} PNum={4} height={600} key={data.id} navigateTo={`/recipes/${data.id}`} />
                })}
            </section>
        </>
    );
}

export default recipes;