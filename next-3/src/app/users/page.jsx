import { fetchData } from "@/utils/dataFetcher";
import Card from "@/components/Card";

async function users() {
    const userData = await fetchData("https://dummyjson.com/users");

    return (
        <>
            <h1 style={{ textAlign: "center" }}>this is users page</h1>

            <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                {userData.users.map(data => {
                    return <Card data={data} PNum={6} height={400} key={data.id} navigateTo={`/users/${data.id}`} />
                })}
            </section>
        </>
    );
}

export default users;