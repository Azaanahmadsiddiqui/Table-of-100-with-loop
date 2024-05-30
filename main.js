var printTable = function (num) {
    for (var i = 1; i <= 10; i++) {
        console.log("".concat(num, " * ").concat(i, " = ").concat(num * i));
    }
};
printTable(100);
