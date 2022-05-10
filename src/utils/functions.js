export const getObjectFromAPIFunction= async ()=>{
    const urlAddress = 'https://jsonplaceholder.typicode.com/users';
    const result = await fetch(urlAddress, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await result.json();

    return data.map(element => element.name);
}