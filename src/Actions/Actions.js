export const GET_NEWS = 'GET_NEWS';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_FAIL = 'GET_NEWS_FAIL';

export function GetNews(payload) {
    return { type: GET_NEWS, payload }
}

export function GetNewsSuccess(payload) {
    return { type: GET_NEWS_SUCCESS, payload }
}

export function GetNewsFail(payload) {
    return { type: GET_NEWS_FAIL, payload }
}

