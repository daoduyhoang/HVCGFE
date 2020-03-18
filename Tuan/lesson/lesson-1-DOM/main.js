// var a = document.getElementsByTagName('p');
// a[0].textContent = 'hello';
// var b = document.getElementsByClassName('text');
// var c = document.getElementById('text-2');
// var ul = document.querySelector('ul');
// console.log(ul);
var arrStudent = [
    { id: 1, name: "Tuan", age: 10 },
    { id: 2, name: "Hoang", age: 12 },
    { id: 1, name: "Hoan", age: 13 },
    { id: 1, name: "Minh", age: 15 },
]
var ul = document.querySelector('ul');


function getName() {
    var str = '';
    for (var i = 0; i < arrStudent.length; i++) {
        str += '<li>' + arrStudent[i].name + '</li>';
    }
    ul.innerHTML = str;
}
getName();