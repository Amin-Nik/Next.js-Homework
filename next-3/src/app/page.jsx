import { fetchData } from '../utils/dataFetcher';

export default async function Home() {

  const userData = await fetchData("https://dummyjson.com/users");
  const postData = await fetchData("https://dummyjson.com/posts");
  const recipeData = await fetchData("https://dummyjson.com/recipes");

  return (
    <>
      <h1>this is home page</h1>
      <br /><br />
      <section>
        <h2>this is users first name:</h2>
        <ul>
          {
            userData.users.map((data, index) => {
              return <li key={index}>
                {data.firstName}
              </li>
            })
          }
        </ul>
      </section>
      <hr /><hr />
      <section>
        <h2>this is posts title:</h2>
        <ul>
          {
            postData.posts.map((data, index) => {
              return <li key={index}>
                {data.title}
              </li>
            })
          }
        </ul>
      </section>
      <hr /><hr />
      <section>
        <h2>this is recipes name:</h2>
        <ul>
          {
            recipeData.recipes.map((data, index) => {
              return <li key={index}>
                {data.name}
              </li>
            })
          }
        </ul>
      </section>
    </>
  );
}
