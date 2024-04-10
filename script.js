function respuestas() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20;
    // Pregunta 1
    if (document.getElementById("P1a").checked == true) {
        p1 = 1;
    } else {
        p1 = 0;
    }
   // Pregunta 2
   if (document.getElementById("P2b").checked== true) {
    p2 = 1;
    } else {
    p2 = 0;
    }
    // Pregunta 3
    if (document.getElementById("P3b").checked == true) {
        p3 = 1;
    } else {
        p3 = 0;
    } 
    // Pregunta 4
    if (document.getElementById("P4c").checked == true) {
        p4 = 1;
    } else {
        p4 = 0;
    }
    // Pregunta 5
    if (document.getElementById("P5b").checked == true) {
        p5 = 1;
    } else {
        p5 = 0;
    }
    // Pregunta 6
    if (document.getElementById("P6a").checked == true) {
        p6 = 1;
    } else {
        p6 = 0;
    }
    // Pregunta 7
    if (document.getElementById("P7a").checked == true) {
        p7 = 1;
    } else {
        p7 = 0;
    }
    // Pregunta 8
    if (document.getElementById("P8a").checked == true){
        p8 = 1;
    } else {
        p8 = 0;
    }
    // Pregunta 9
    if (document.getElementById("P9a").checked == true){
        p9 = 1;
    } else {
        p9 = 0;
    }

    // Pregunta 10
    if (document.getElementById("P10c").checked == true){
        p10 = 1;
    } else {
        p10 = 0;
    }
    // Pregunta 11
    if (document.getElementById("P11c").checked == true){
        p11 = 1;
    } else {
        p11 = 0;
    }

    // Pregunta 12
    if (document.getElementById("P12a").checked == true){
        p12 = 1;
    } else {
        p12 = 0;
    }

    // Pregunta 13
    if (document.getElementById("P13a").checked == true){
        p13 = 1;
    } else {
        p13 = 0;
    }

    // Pregunta 14
    if (document.getElementById("P14d").checked == true){
        p14 = 1;
    } else {
        p14 = 0;
    }
    // Pregunta 15
    if (document.getElementById("P15c").checked == true){
        p15 = 1;
    } else {
        p15 = 0;
    }

    // Pregunta 16
    if (document.getElementById("P16c").checked == true){
        p16 = 1;
    } else {
        p16 = 0;
    }
    // Pregunta 17
    if (document.getElementById("P17a").checked == true){
        p17 = 1;
    } else {
        p17 = 0;
    }
    // Pregunta 18
    if (document.getElementById("P18d").checked == true){
        p18 = 1;
    } else {
        p18 = 0;
    }

    // Pregunta 19
    if (document.getElementById("P19b").checked == true){
        p19 = 1;
     } else {
        p19 = 0;
    }
     // Pregunta 20
    if (document.getElementById("P20c").checked == true){
        p20 = 1;
    } else {
        p20 = 0;
    }    
    var res = (p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12 + p13 + p14 + p15 + p16 + p17 + p18 + p19 + p20);
    if(res < 14){
        alert("Tu Puntaje no alcanza la nota requerida, Tu nota es de : " +res + " Estudia un poco mas..." )
    } else {
        if(res > 14 ){
            alert("Tu puntaje alcanzo la nota requerida, Tu nota es de : " +res + " Sigue Mejorando");
        } else{
         if(res > 18 ){
            alert("Tu puntaje sobrepaso la nota requerida, Tu nota es de : " +res + " Muy Bien");
            }

        }
        
    }
    
}
