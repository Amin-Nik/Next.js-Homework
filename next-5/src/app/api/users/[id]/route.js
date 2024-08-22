import data from '../data.json';

export async function GET(req, { params }) {
    const usersData = data.users.find((user) => user.id == params.id);
    return Response.json(usersData);
}

export async function PATCH(req, { params }) {
    const body = await req.json();
    const Index = data.users.findIndex((user) => user.id == params.id);
    data.users.splice(Index, 1, body);
    return Response.json(body);
}

export async function DELETE(req, { params }) {
    const Index = data.users.findIndex((user) => user.id == params.id);
    data.users.splice(Index, 1);
    return Response.json({ message: "Deleted" });
}