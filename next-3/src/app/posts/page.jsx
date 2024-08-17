import { fetchData } from "@/utils/dataFetcher";
import Card from "@/components/Card";

async function posts() {
    const postData = await fetchData("https://dummyjson.com/posts");

    return (
        <>
            <h1 style={{ textAlign: "center" }}>this is posts page</h1>

            <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                {postData.posts.map(data => {
                    return <Card data={data} PNum={3} height={500} key={data.id} navigateTo={`/posts/${data.id}`} />
                })}
            </section>
        </>
    );
}

export default posts;