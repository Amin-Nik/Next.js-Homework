import data from '../data.json';

export async function GET(req, { params }) {
    const postData = data.posts.find((post) => post.id == params.id);
    return Response.json(postData);
}

export async function PATCH(req, { params }) {
    const body = await req.json();
    const postIndex = data.posts.findIndex((post) => post.id == params.id);
    data.posts.splice(postIndex, 1, body);
    return Response.json(body);
}

export async function DELETE(req, { params }) {
    const body = await req.json();
    const postIndex = data.posts.findIndex((post) => post.id == params.id);
    data.posts.splice(postIndex, 1);
    return Response.json({ message: "Deleted" });
}