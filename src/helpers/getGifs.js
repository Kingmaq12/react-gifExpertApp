export const getGifs = async (category) => {
        
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=AQ2mUdXtZ0xRBkNhg0n4SS9npIjB78k4`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}