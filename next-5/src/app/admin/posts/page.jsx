import Form from "@/components/Form";
import { fetchData } from "@/utils/dataFetcher";
import dynamic from "next/dynamic";

export const metadata = {
    title: "Posts",
    description: "this is posts page"
}

const DynamicCard = dynamic(() => import("@/components/Card"), {
    loading: () => <p>Loading...</p>
});

async function posts() {
    const postData = await fetchData("http://localhost:3000/api/posts");

    return (
        <>
            <h1 style={{ textAlign: "center" }}>this is posts page</h1>
            <Form name="title" btnText="Post" />

            <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                {postData.posts.map(data => {
                    return <DynamicCard isAdmin={true} data={data} PNum={3} height={500} key={data.id} navigateTo={`/admin/posts/${data.id}`} />
                })}
            </section>
        </>
    );
}

export default posts;