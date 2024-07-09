export async function GetApiToken(UserMail: string): Promise<string> {
    console.log("GetApiToken " + UserMail);

    return fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(UserMail)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(parsedData => {
        return parsedData
    })
    .catch(error => {
        console.error('Error sending data:', error);
    });
}