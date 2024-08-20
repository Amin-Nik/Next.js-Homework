import { Suspense } from 'react';
import { fetchData } from '../utils/dataFetcher';

export const metadata = {
  title: "Home",
  description: "this is home page"
}

export default async function Home() {

  const userData = await fetchData("https://dummyjson.com/users");
  const postData = await fetchData("https://dummyjson.com/posts");
  const recipeData = await fetchData("https://dummyjson.com/recipes");

  return (
    <>
      <h1 style={{ textAlign: "center" }}>this is home page</h1>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
        <Suspense fallback={<p>Loading users...</p>}>
          <section>
            <h2>this is users first name:</h2>
            <ul>
              {
                userData.users.map((data) => {
                  return <li key={data.id}>
                    {data.firstName}
                  </li>
                })
              }
            </ul>
          </section>
        </Suspense>
        <hr /><hr />
        <Suspense fallback={<p>Loading posts...</p>}>
          <section>
            <h2>this is posts title:</h2>
            <ul>
              {
                postData.posts.map((data) => {
                  return <li key={data.id}>
                    {data.title}
                  </li>
                })
              }
            </ul>
          </section>
        </Suspense>
        <hr /><hr />
        <Suspense fallback={<p>Loading recipes...</p>}>
          <section>
            <h2>this is recipes name:</h2>
            <ul>
              {
                recipeData.recipes.map((data) => {
                  return <li key={data.id}>
                    {data.name}
                  </li>
                })
              }
            </ul>
          </section>
        </Suspense>
      </div>
    </>
  );
}
