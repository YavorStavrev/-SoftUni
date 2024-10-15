function calculator() {
    let num1Element, num2Element, resultElement;

    return {
        init: function(selector1, selector2, resultSelector) {
            num1Element = document.querySelector(selector1);
            num2Element = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);
        },
        add: function() {
            const num1 = parseFloat(num1Element.value) || 0;
            const num2 = parseFloat(num2Element.value) || 0;
            resultElement.value = num1 + num2;
        },
        subtract: function() {
            const num1 = parseFloat(num1Element.value) || 0;
            const num2 = parseFloat(num2Element.value) || 0;
            resultElement.value = num2 - num1;
        }
    };
}
