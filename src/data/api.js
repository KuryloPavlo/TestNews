const resp = require('./testNews.json'); 

export const fetchNews = () => {
    return new Promise((resolve) => {
        resolve(resp)
    })
}