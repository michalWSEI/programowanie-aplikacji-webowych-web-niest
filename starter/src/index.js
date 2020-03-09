const inputElements = document.querySelectorAll('.inputs__item');
const displayElement = document.querySelector('.display__inputValue');
inputElements.forEach(element => {
    element.addEventListener('change', (e) => {
        const inputType = e.currentTarget.placeholder;
        const inputValue = e.currentTarget.value;
        let resultValue;
        switch (inputType) {
            case 'suma [example: 2+4+4]': {
                const inputValueArr = inputValue.split('+');
                let sum = 0;
                inputValueArr.map(item => {
                    sum += parseInt(item);
                });
                resultValue = sum;
                break;
            }
            case 'srednia [example: 2,3,4,5]': {
                const inputValueArr = inputValue.split(',');
                let sum = 0;
                inputValueArr.map((item) => {
                    sum += parseInt(item);
                });
                resultValue = (sum / inputValueArr.length);
                break;
            }
            case 'min [example: 2,5,3,2]': {
                const inputValueArr = inputValue
                    .split(',')
                    .map(item => parseInt(item))
                    .sort((a, b) => {
                    if (a > b)
                        return 1;
                    if (a < b)
                        return -1;
                    return 0;
                });
                const min = inputValueArr[0];
                resultValue = min;
                break;
            }
            case 'max [example: 3,5,3,2]': {
                const inputValueArr = inputValue
                    .split(',')
                    .map(item => parseInt(item))
                    .sort((a, b) => {
                    if (a > b)
                        return 1;
                    if (a < b)
                        return -1;
                    return 0;
                });
                const max = inputValueArr[inputValueArr.length - 1];
                resultValue = max;
                break;
            }
        }
        displayElement.innerHTML = !!resultValue
            ? resultValue
            : inputValue;
    });
});
//# sourceMappingURL=index.js.map