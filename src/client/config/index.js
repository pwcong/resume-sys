function checkBrowser() {
    let userAgent = window.navigator.userAgent; //取得浏览器的userAgent字符串

    let isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    } //判断是否Opera浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    } //判断是否IE浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "Firefox";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    } //判断是否Chrom浏览器
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    else{
        return "IE";
    }

}

function checkLanguage(){

    let language = navigator.language;

    switch(language){

        case 'zh-CN':
            return 'zh-CN';
        case 'en':
            return 'en';
        default:
            return 'zh-CN';

    }

}

export const browser = checkBrowser();
export const language = checkLanguage();