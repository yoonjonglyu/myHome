import axios from 'axios';

class BlogApi {
    _REST_API_URL : string

    constructor() {
        this._REST_API_URL = "https://isa-myblog.herokuapp.com/post/";
    }

    getAllTags =  () => {
        axios.get(this._REST_API_URL + "tags", ).then((res) => {
            console.log(res);
        })
    }
}

export default new BlogApi();