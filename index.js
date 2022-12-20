var lis=document.querySelector('.list-group-item:nth-child(2)');
lis.style.backgroundColor='green';
var lis2=document.querySelector('.list-group-item:nth-child(3)');
lis2.style.display='none';

var lis3=document.querySelectorAll('.list-group-item');
lis3[1].style.color='green';
var list4=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var i=0;i<list4.length;i++){
    list4[i].style.backgroundColor='green';
}
