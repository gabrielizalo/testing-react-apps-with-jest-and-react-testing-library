export function isUrl(url) {
    const myRegExp = new RegExp(
        /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/
    );
    return myRegExp.test(url);
}
