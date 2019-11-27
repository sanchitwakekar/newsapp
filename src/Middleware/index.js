import { call, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_NEWS, GetNewsFail, GetNewsSuccess } from '../Actions/Actions';

const updateSearch = (NewsItem) => {
    return axios.get(NewsItem.NewsAPI)
        .then(response => response.data.articles)
};
function* GetNewsSaga(action) {
    try {
        let news = yield call(updateSearch, action.payload);
        yield put(GetNewsSuccess(news));
    } catch (e) {
        yield put(GetNewsFail(e));
    }
}
export function* RootSaga() {
    yield takeEvery(GET_NEWS, GetNewsSaga);
} 