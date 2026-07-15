import { layout } from "../lib/render";
import page from "../data/update-terbaru";
import { SITE, canonical } from "../lib/config";

export async function onRequest(context) {

    return await layout({
        page: "page",

        title: page.title,

        description: page.description,

        canonical: canonical("/update-terbaru"),

        content: page.content
    });

}
