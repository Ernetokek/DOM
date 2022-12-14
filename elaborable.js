function changeColor(){

    var colores = ['black','purple','white','red','green','violet']
    var ramdom1 = Math.floor(Math.random()* colores.length);
    var ramdom2 = Math.floor(Math.random()* colores.length);
    var ramdom3 = Math.floor(Math.random()* colores.length);
    var ramdom4 = Math.floor(Math.random()* colores.length);
    var ramdom5 = Math.floor(Math.random()* colores.length);
    var ramdom6 = Math.floor(Math.random()* colores.length);

    var text1 = document.getElementById('obj1');
    console.log(text1);
    text1.style.color = colores[ramdom1];
    text1.innerHTML = 'texto de color '+colores[ramdom1];
    var text2 = document.getElementById('obj2');
    console.log(text2);
    text2.style.color = colores[ramdom2];
    text2.innerHTML = 'texto de color '+colores[ramdom2];
    var text3 = document.getElementById('obj3');
    console.log(text3);
    text3.style.color = colores[ramdom3];
    text3.innerHTML = 'texto de color '+colores[ramdom3];
    var text4 = document.getElementById('obj4');
    console.log(text4);
    text4.style.color = colores[ramdom4];
    text4.innerHTML = 'texto de color '+colores[ramdom4];
    var text5 = document.getElementById('obj5');
    console.log(text5);
    text5.style.color = colores[ramdom5];
    text5.innerHTML = 'texto de color '+colores[ramdom5];
    var text6 = document.getElementById('obj6');
    console.log(text6);
    text6.style.color = colores[ramdom6];
    text6.innerHTML = 'texto de color '+colores[ramdom6];
}