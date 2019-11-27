import { GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_FAIL } from '../Actions/Actions';
const initialState = {
    NewsArticles: [],
    NewsType: '',
}
export function NewsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS: {
            return {
                ...state,
                NewsType: action.payload,
            }
        }
        case GET_NEWS_SUCCESS: {
            return {
                ...state,
                NewsArticles: action.payload,
            }
        }
        case GET_NEWS_FAIL: {
            return {
                ...state,                
            }
        }
        default:
            break;
    }
}