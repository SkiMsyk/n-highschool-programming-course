var myBirthTime = new Date(1990, 12, 23, 11, 11);

var r_list = [5, 10, 15]

function calc_circle_area(r) {
    var area = r * r * 3.14;
    return area;
}

for (var i = 0; i < r_list.length; i++) {
    console.log('here')
    document.write('<p>' + r_list[i] + ' : area = ' + calc_circle_area(r_list[i]) + '</p>');
}

function updateParagrah() {
    var now = new Date();
    var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
    document.getElementById('birth-time').innerText = 'since I was born ' + seconds + 'seconds';
}
setInterval(updateParagrah, 50 * 2);