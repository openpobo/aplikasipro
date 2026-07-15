import { layout } from "../../lib/render";

export async function onRequest(context) {
  const url = new URL(context.request.url);

  return layout({
    page: "page",
    title: "Update Terbaru p jajal",
    description: "Update terbaru p jajal",
    canonicalUrl: url.origin + url.pathname,
    content: `
      <h1>Update Terbaru jajal</h1>

      <p>Isi artikel...</p>
    `
  });
}
