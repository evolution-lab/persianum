const englishNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const persiaNums = ['٠', '١', '٢', '٣', '٤', '٥', '٦' ,'٧', '٨', '٩'];

module.exports = (num) => {
    let str = num + '';
    let newStr = '';

    for(let i = 0; i < str.length; i++) {
        let elem = str[i];

        if(parseInt(elem)) {
            elem = persiaNums[englishNums.indexOf(elem)];
        }

        newStr += elem;
    }

    return newStr;
};