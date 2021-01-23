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
    getPostList = (type : string) => {
        return axios.get(
            `${this._REST_API_URL}${type}`
        );
    };
    getPostContents = (type : string, idx : number) => {
        return axios.get(
            `${this._REST_API_URL}${type}?idx=${idx}`
        );
    };
}

export default new BlogApi();