import data from '../data.json';

export async function GET(req, { params }) {
    const recipesData = data.recipes.find((recipe) => recipe.id == params.id);
    return Response.json(recipesData);
}

export async function PATCH(req, { params }) {
    const body = await req.json();
    const Index = data.recipes.findIndex((recipe) => recipe.id == params.id);
    data.recipes.splice(Index, 1, body);
    return Response.json(body);
}

export async function DELETE(req, { params }) {
    const Index = data.recipes.findIndex((recipe) => recipe.id == params.id);
    data.recipes.splice(Index, 1);
    return Response.json({ message: "Deleted" });
}