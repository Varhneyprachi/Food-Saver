export const FetchFoods = (email, accessToken) => {
    return fetch(`https://food-pulse-server.vercel.app/foods/my-foods?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}

export default FetchFoods;