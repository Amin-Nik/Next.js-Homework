import Form from "@/components/Form";
import { fetchData } from "@/utils/dataFetcher";
import dynamic from "next/dynamic";

export const metadata = {
    title: "Users",
    description: "this is users page"
}

const DynamicCard = dynamic(() => import("@/components/Card"), {
    loading: () => <p>Loading...</p>
});

async function users() {
    const userData = await fetchData("http://localhost:3000/api/users");

    return (
        <>
            <h1 style={{ textAlign: "center" }}>this is users page</h1>
            <Form name="firstName" btnText="Post" url="http://localhost:3000/api/users" method="post" />

            <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                {userData.users.map(data => {
                    return <DynamicCard deleteUrl={`http://localhost:3000/api/users/${data.id}`} isAdmin={true} image={true} data={data} PNum={6} height={400} key={data.id} navigateTo={`/admin/users/${data.id}`} />
                })}
            </section>
        </>
    );
}

export default users;