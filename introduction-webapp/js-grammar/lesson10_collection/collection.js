var classes = ['A', 'B', 'C', 'D'];

for (var grade = 1; grade < 4; grade++) {
    for (var i = 0; i < classes.length; i++) {
        document.write('<p>' + grade + ',', classes[i] + '</p>');
    }
}

var aka = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
for (var i = 0; i < aka.length; i++) {
    for (var j = 0; j < aka.length; j++) {
        document.write('<p>' + aka[i] + aka[j] + '</p>');
    }
}