export async function POST(req) {
  const data = await req.json();
  return Response.json({ message: 'Form submitted successfully!', data });
}

export async function GET() {
  return Response.json({ message: 'This route only supports POST' }, { status: 405 });
}
