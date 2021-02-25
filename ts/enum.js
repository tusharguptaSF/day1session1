var checkColor;
(function (checkColor) {
    checkColor[checkColor["yello"] = 3] = "yello";
    checkColor[checkColor["Green"] = 4] = "Green";
    checkColor[checkColor["White"] = 5] = "White";
})(checkColor || (checkColor = {}));
var c = checkColor[4];
console.log(c);
