export function isEmail(email) {
    const myRegExp = new RegExp(/^[^@\s]+@[^@\s.]+\.[^@.\s]+$/);
    return myRegExp.test(email);
}
