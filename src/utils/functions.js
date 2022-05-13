export const getObjectFromAPIFunction= async (urlAddress)=>{
    const result = await fetch(urlAddress, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return await result.json();
}