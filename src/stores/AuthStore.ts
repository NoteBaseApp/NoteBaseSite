export let JWTToken: string = "";

async function GetToken(): Promise<string> {
    try {
        var response = await fetch(`${import.meta.env.VITE_API_URL}/note/getbyperson`);
        var result = await response.json();
    }
    catch {
        return ""
    }

    return result
}