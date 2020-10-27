/**
 * Random new IDCard no
 * @return: An object that contains key of formatted idcard no and un-formatted
 * @tutorial: https://lertsirikarn.blogspot.com/p/thai-id-number-generator.html?m=1
 */
const randomIdCard = () => {
    let d1 = Math.floor(Math.random() * 10);
    let d2 = Math.floor(Math.random() * 10);
    let d3 = Math.floor(Math.random() * 10);
    let d4 = Math.floor(Math.random() * 10);
    let d5 = Math.floor(Math.random() * 10);
    let d6 = Math.floor(Math.random() * 10);
    let d7 = Math.floor(Math.random() * 10);
    let d8 = Math.floor(Math.random() * 10);
    let d9 = Math.floor(Math.random() * 10);
    let d10 = Math.floor(Math.random() * 10);
    let d11 = Math.floor(Math.random() * 10);
    let d12 = Math.floor(Math.random() * 10);
    let d13;
    let n13 = 11 - (((d1 * 13) + (d2 * 12) + (d3 * 11) + (d4 * 10) + (d5 * 9) + (d6 * 8) + (d7 * 7) + (d8 * 6) + (d9 * 5) + (d10 * 4) + (d11 * 3) + (d12 * 2)) % 11);
    if (n13 == 10) {
        d13 = 0;
    } else if (n13 == 11) {
        d13 = 1;
    } else {
        d13 = n13;
    }

    return {
        "unformatted": `${d1}${d2}${d3}${d4}${d5}${d6}${d7}${d8}${d9}${d10}${d11}${d12}${d13}`,
        "formatted": `${d1}-${d2}${d3}${d4}${d5}-${d6}${d7}${d8}${d9}${d10}-${d11}${d12}-${d13}`
    }
}