const MAX_LEN = 6;

export function genrateNumber() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let ans = '';
    for (let i = 0; i < MAX_LEN; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        ans += chars[randomIndex];
    }
    return ans;
}

console.log(genrateNumber());
