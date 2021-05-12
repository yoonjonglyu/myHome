import Axios from 'Axios';

class BlogApi {
    _REST_API_URL: string;

    constructor() {
        this._REST_API_URL = "https://isa-myblog.herokuapp.com/post/";
    };

    getAllTags = () => {
        return Axios.get(
            this._REST_API_URL + "tags"
        );
    };
    getPostList = (type: string) => {
        return Axios.get(
            `${this._REST_API_URL}${type}`
        );
    };
    getPostContents = (type: string, idx: string) => {
        return Axios.get(
            `${this._REST_API_URL}${type}?idx=${idx}`
        );
    };
    getTagPostList = (type: string, idx: string) => {
        return Axios.get(
            `${this._REST_API_URL}taglist?type=${type}&idx=${idx}`
        );
    };
}

export default new BlogApi();