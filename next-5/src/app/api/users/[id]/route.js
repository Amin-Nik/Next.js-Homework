import data from '../data.json';

export async function GET(req, { params }) {
    const usersData = data.users.find((user) => user.id == params.id);
    return Response.json(usersData);
}