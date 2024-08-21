import data from '../data.json';

export async function GET(req, { params }) {
    const recipesData = data.recipes.find((recipe) => recipe.id == params.id);
    return Response.json(recipesData);
}