import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"; 

export default {
  getArticles: function(searchTerm) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm);
  }
};
