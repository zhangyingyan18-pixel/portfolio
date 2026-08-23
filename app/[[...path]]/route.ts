import { documentForPath } from "../routes";

type RouteContext = {
  params: Promise<{ path?: string[] }> | { path?: string[] };
};

export async function GET(_request: Request, context: RouteContext) {
  const params = await context.params;
  const path = params.path?.length ? `/${params.path.join("/")}` : "/";
  const html = documentForPath(path);

  if (!html) {
    return new Response("Not Found", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
