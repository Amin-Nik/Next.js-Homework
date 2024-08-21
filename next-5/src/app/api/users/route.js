import data from './data.json';

export async function GET() {
    return Response.json(data);
}

export async function POST(req) {
    const body = await req.json();
    data.users.push(body);
    return Response.json(body);
}