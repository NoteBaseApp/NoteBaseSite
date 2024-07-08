import { redirect } from "@sveltejs/kit";
import { isUserLoggedIn } from "$lib"

export function load() {
    if (!isUserLoggedIn)
    {
        redirect(302,"/login");
    }
}