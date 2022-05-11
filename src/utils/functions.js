export const getObjectFromAPIFunction= async ()=>{
    const urlAddress = 'https://jsonplaceholder.typicode.com/users';
    const result = await fetch(urlAddress, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return await result.json();
}