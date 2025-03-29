function getElementWidth(content, padding, border) {
    return (
        getNumberFromString(content) +
        getNumberFromString(padding) * 2 +
        getNumberFromString(border) * 2
    );
}

function getNumberFromString(str) {
    return parseFloat(str.replace('px', ''));
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
