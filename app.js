var minus = document.querySelectorAll("#minus"),
    plus = document.querySelectorAll("#plus"),
    num = document.querySelectorAll("#num"),
    narxi = document.querySelectorAll("#narxi"),
    jami = document.querySelectorAll("#jami")
let result = document.querySelector(".result")


var a = 0;
var b = 0000
var c = [6000, 3500,3000]
console.log(plus);
let arr = [0, 0,0]
let arrB = [0, 0,0]

plus.forEach((item, index) => {
    console.log(item);
    item.addEventListener("click", function (e) {
        ++arr[index]
        a[index] = (a[index] < 10) ? + "0" + a[index] : a[index];
        num[index].innerHTML = arr[index];
        arrB[index] += c[index]
        jami[index].innerHTML = arrB[index]

        console.log(jami);
        let total = 0;
        for (let el of jami) {
            total += parseInt(el.innerHTML.split( ))
        }
        result.innerHTML = total
    })
})

minus.forEach((item, index) => {
    console.log(item);
    item.addEventListener("click", function (e) {
        --arr[index]
        a[index] = (a[index] < 10) ? "0" + a[index] : a[index];
        num[index].innerHTML = arr[index];
        arrB[index] -= c[index]
        jami[index].innerHTML = arrB[index]

        console.log(jami);
        let total = 0;
        for (let el of jami) {
            total += parseInt(el.innerHTML.split( ))
        }
        result.innerHTML = total
    })
})
