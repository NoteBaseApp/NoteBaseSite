export async function GetApiToken(UserMail: string): Promise<string> {
    console.log("GetApiToken " + UserMail);

    var response = ((await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
          },
        body: UserMail
    })));

    if (!response.ok)
    {
        console.log(response.statusText);
    }
    return await response.text();
}