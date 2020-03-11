const GIPHYURL = "http://api.giphy.com/v1/gifs/search";
const APIKEY = "EPL5t5XADanPi0qAZ8b7d2DWQhbUmirF";

// Things to do on document load
function start() {
  $("#search-button").on("click", giphySearch);
  $("#delete").on("click", deleteGifs)
}

//search giphy api with search term provided by the user
//call new gif function
async function giphySearch(event) {
  event.preventDefault();
  let searchTerm = $("#search").val();
  let response = await axios.get(
    GIPHYURL, 
    {params: {q: searchTerm, api_key: APIKEY}});
  
  // store the first gif ID from giphy
  let id = response.data.data[0].id;
  
  addNewGif(id);
}

//add new gif to the gallery
function addNewGif(id) {
  $("<img>")
    .attr("src", "https://media.giphy.com/media/" + id + "/giphy.gif")
    .appendTo("#gif-gallery");
}

//delete gifs from gallery
function deleteGifs() {
  $("img").remove();
}

$(start);