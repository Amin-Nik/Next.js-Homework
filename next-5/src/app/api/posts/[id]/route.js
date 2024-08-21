import data from '../data.json';

export async function GET(req, { params }) {
    const postData = data.posts.find((post) => post.id == params.id);
    return Response.json(postData);
}