import type { PageLoad } from '../$types';
import { page } from "$app/stores";
import { authToken } from "$lib";
import { GetApiToken } from '../../stores/AuthStore';

export const load = (async () => {
    // page.subscribe(async (page) => {
    //     const userMail = page.data.session?.user?.email

    //     if  (userMail != undefined)
    //     {
    //         authToken.set( await GetApiToken(userMail) )
    //     }
    // })
    await authToken.set( await GetApiToken("joeyjoeyremmers@gmail.com") )
    return {};
}) satisfies PageLoad;