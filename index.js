const axios = require('axios');
const cheerio = require('cheerio');

const getHtml = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%B2%B4%EB%A0%88%EB%AF%B8+%EB%A7%88%EC%B9%B4');
    }catch(err){
        console.error(err);
    }
};

getHtml().then((html) => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    console.log($bodyList.text());
});