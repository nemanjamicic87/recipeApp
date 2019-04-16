import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    // api key : f53d1f00e4a2407f07d66078c3d42904
// https://www.food2fork.com/api/search



    async getResults() {

        const key= "f53d1f00e4a2407f07d66078c3d42904";

        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        } catch (error) {
            alert(error);
        }
      
    }
   
}