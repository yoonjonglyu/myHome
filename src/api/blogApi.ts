import axios from 'axios';

class BlogApi {
    _REST_API_URL : string;

    constructor() {
        this._REST_API_URL = "https://isa-myblog.herokuapp.com/post/";
    };

    getAllTags =  () => {
        return axios.get(
            this._REST_API_URL + "tags"
        );
    };
}

export default new BlogApi();