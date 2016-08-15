/**
 * Created by Ant on 8/14/16.
 */
module.exports = function () {
    return {
        add: function (num1, num2) {
            console.log('the sum is: ', num1 + num2);
        },

        multiply: function (num1, num2) {
            console.log('the product is: ', num1 * num2);
        },

        square: function (num) {
            console.log('the square is: ', num * num);
        },

        random: function () {
            console.log('the random number is: ', Math.ceil(Math.random()*(35-1))+1);
        }
    }
}