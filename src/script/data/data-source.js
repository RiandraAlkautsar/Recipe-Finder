class DataSource {
    static searchRecipe(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`maaf resep menu belum tersedia`);
                }
            })
    }
}

export default DataSource;