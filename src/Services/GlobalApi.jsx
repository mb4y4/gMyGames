import axios from "axios";

const key = "ee0480904d97477b99f9fa38255edefc";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);
const getAllGames=axiosCreate.get('/games?key='+key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
// const searchGames = (searchTerm) => axiosCreate.get('/games?key=' + key + '&search=' + searchTerm);

const searchGames = (searchTerm) => {
    return axiosCreate.get('/games?key=' + key + '&search=' + searchTerm)
      .then(response => {
        // Handle the search results here
        return response.data; // You may want to return the data for further processing
      })
      .catch(error => {
        // Handle any errors here
        console.error("Error searching for games:", error);
        throw error; // You can rethrow the error or handle it as needed
      });

    }
export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId,
    searchGames
}