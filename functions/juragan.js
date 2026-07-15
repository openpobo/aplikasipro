import { layout } from "../lib/render";
import { canonical } from "../lib/config";

export async function onRequest(context) {

  return await layout({
    page: "page",
    title: "Update Terbaru Juragan",
    description: "Update terbaru  Juragan",
    canonical: canonical("/juragan"),

    content: `
<h1>Update Terbaru  Juragan</h1>

<p>Isi artikel sangat panjang....</p>

<h2>Versi 2.0</h2>

<p>...</p>

<h2>Download</h2>

<p>...</p>
`
  });

}
