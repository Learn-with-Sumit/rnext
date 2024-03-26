export const dynamic = "force-dynamic"; // default = auto

export async function GET() {
    return new Response(new Date().toLocaleTimeString());
}
