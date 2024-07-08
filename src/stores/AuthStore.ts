export async function GetApiToken(UserMail: string): Promise<string> {
    try {
        var response = ((await fetch(`${import.meta.env.VITE_API_URL}/login`, {
            body: UserMail
        })));
        return await response.json();
    }
    catch {
        return ""
    }
}