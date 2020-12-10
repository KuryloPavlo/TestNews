import Const from '../actions/const';

const initialState = {
    news: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Const.news.save:
            return{
                ...state,
                news: action.payload,
            }
        default:
            return state;
    }
}