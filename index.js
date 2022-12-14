const axios = require('axios');
const cheerio = require('cheerio');
const parse = require('csv-parse/lib/sync');
const stringify = require('csv-stringify/lib/sync');
const fs = require('fs');

/** 체레미 마카 */
const getHtml = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%B2%B4%EB%A0%88%EB%AF%B8+%EB%A7%88%EC%B9%B4');
    }catch(err){
        console.error(err);
    }
};

getHtml().then((html) => {
    let homeCount = 0;
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-상단]체레미 마카, ' + countStr + '\n');
    console.log($bodyList.text());
    console.log(countStr);
});

/**이브 콘돔 */
const evecondomHtml = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%9D%B4%EB%B8%8C%EC%BD%98%EB%8F%94&oquery=%EC%9D%B4%EB%B8%8C%EC%A0%A4&tqi=h3KItdp0JywssOxYgSVsssssteV-068165');
    }catch(err){
        console.error(err);
    }
};

evecondomHtml().then((html) => {
    let homeCount = 0;
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-상단]이브콘돔, ' + countStr + '\n');
    console.log($bodyList.text());
    console.log(countStr);
});


/**이브컵 */
const evecupHtml = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%9D%B4%EB%B8%8C%EC%BB%B5&oquery=%EC%B2%B4%EB%A0%88%EB%AF%B8+%EB%A7%88%EC%B9%B4&tqi=h3LnJsprvhGssesUZR8ssssst%2FK-400671');
    }catch(err){
        console.error(err);
    }
};


evecupHtml().then((html) => {
    let homeCount = 0;
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-상단]이브컵, ' + countStr + '\n');
    console.log($bodyList.text());
    console.log(countStr);
});


/**이브젤 */
const evejelHtml = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%9D%B4%EB%B8%8C%EC%A0%A4&oquery=%EC%9D%B4%EB%B8%8C%EC%BB%B5&tqi=h3Ldswprvh8ssgopFZZssssstbC-466325');
    }catch(err){
        console.error(err);
    }
};

evejelHtml().then((html) => {
    let homeCount = 0;
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-상단]이브젤, ' + countStr + '\n');
    console.log($bodyList.text());
    console.log(countStr);
});



/** 체레미 마카 - 전체*/
const cheremiAll = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?display=15&f=&filetype=0&page=2&query=%EC%B2%B4%EB%A0%88%EB%AF%B8+%EB%A7%88%EC%B9%B4&research_url=&sm=tab_pge&start=1&where=web');
    }catch(err){
        console.error(err);
    }
};

cheremiAll().then((html) => {
    let homeCount = 0;
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-1페이지]체레미 마카, ' + countStr + '\n');
    console.log($bodyList.text());
    console.log(countStr);
});


/** 이브 콘돔 - 전체*/
const evecondomAll = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?display=15&f=&filetype=0&page=2&query=%EC%9D%B4%EB%B8%8C+%EC%BD%98%EB%8F%94&research_url=&sm=tab_pge&start=1&where=web');
    }catch(err){
        console.error(err);
    }
};

evecondomAll().then((html) => {
    let homeCount = 0;
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-1페이지]이브 콘돔, ' + countStr + '\n');
    console.log($bodyList.text());
    console.log(countStr);
});


/** 이브컵 - 전체*/
const evecupAll = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?display=15&f=&filetype=0&page=2&query=%EC%9D%B4%EB%B8%8C%EC%BB%B5&research_url=&sm=tab_pge&start=1&where=web');
    }catch(err){
        console.error(err);
    }
};

evecupAll().then((html) => {
    let homeCount = 0;
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-1페이지]이브컵, ' + countStr + '\n');
    console.log($bodyList.text());
    console.log(countStr);
});


/** 이브젤 - 전체*/
const evejelAll = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?display=15&f=&filetype=0&page=2&query=%EC%9D%B4%EB%B8%8C%EC%BB%B5&research_url=&sm=tab_pge&start=1&where=web');
    }catch(err){
        console.error(err);
    }
};

evejelAll().then((html) => {
    let homeCount = 0;
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-1페이지]이브젤, ' + countStr + '\n');
    console.log($bodyList.text());
    console.log(countStr);
});