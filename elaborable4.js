window.onload = function() {
    var colores = ['black','purple','brown','yellow','violet', 'blue', 'AntiqueWhite', 'Aqua']
    var cam1 = Math.floor(Math.random()* colores.length);
    document.body.style.backgroundColor = colores[cam1];
} 