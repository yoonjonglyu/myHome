import api from '../../api/blogApi';

function* getAllTags () {
    api.getAllTags()
}

export default getAllTags;