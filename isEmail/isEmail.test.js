import { isEmail} from "./isEmail";

it('should return true when valid email', () => {
    const email = 'b@b.com';
    const result = isEmail(email);
    expect(result).toBe(true);
});

it('should return false when invalid email', () => {
    const email = 'b';
    const result = isEmail(email);
    expect(result).toBe(false);
});
