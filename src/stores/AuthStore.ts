export async function GetApiToken(UserMail: string): Promise<string> {

    let token = await fetch(`https://notebaseapi.joeyremmers.nl/auth`, {
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
        return response.text();
    })
    .then(parsedData => {
        return parsedData
    })
    .catch(error => {
        console.error('Error sending data:', error);
    });

    return token || "";
}