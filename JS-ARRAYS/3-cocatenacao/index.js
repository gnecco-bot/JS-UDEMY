// ... rest (rest operation) -> ... spread (spread operation)

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], 'luz'); // concat() permite colocar strs no meio
const a4 = [...a1, ...a2]; // spread operation, permite colocar strs no meio
console.log(a3);
console.log(a4);