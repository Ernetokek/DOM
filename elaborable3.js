function ChangeColor(){
    var colores = ['purple','white','brown','black','green']
    var cam1 = Math.floor(Math.random()* colores.length);
    var cam2 = Math.floor(Math.random()* colores.length);
    var cam3 = Math.floor(Math.random()* colores.length);

    var c1 = document.getElementsByClassName('c1');
    console.log(c1[0]);
    var elemento = c1[0];
    elemento.style.backgroundColor = colores[cam1];

    var c2 = document.getElementsByClassName('c2');
    console.log(c2[0]);
    var elemento2 = c2[0];
    elemento2.style.backgroundColor = colores[cam2];

    var c3 = document.getElementsByClassName('c3');
    console.log(c3[0]);
    var elemento3 = c3[0];
    elemento3.style.backgroundColor = colores[cam3];
}