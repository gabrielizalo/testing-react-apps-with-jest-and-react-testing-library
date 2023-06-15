import {isUrl} from "./isUrl";

it('should return true when valid url', function () {
    expect(isUrl("https://www.google.com")).toBe(true);
});

it('should return false when invalid url', function () {
    expect(isUrl("google")).toBe(false);
});
