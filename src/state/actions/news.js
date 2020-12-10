import Const from './const';
import * as API from '../../data/api';

export const loadNews = () => (dispatch, getState) => {
    API.fetchNews()
        .then(resp => {
            console.log(resp);
            dispatch({
                type: Const.news.save,
                payload: resp.news,
            });
        })
}