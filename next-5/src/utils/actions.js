"use server"

import { revalidateTag } from "next/cache"

export async function postOrPatchData(url, body, method) {
    await fetch(url, {
        method: method.toUpperCase(),
        body: JSON.stringify(body),
    });
    revalidateTag("reload");
}

export async function deleteData(url) {
    try {
        await fetch(url, { method: "DELETE" });
        revalidateTag("reload");
    } catch (error) {

        console.log(error);
    }
}
