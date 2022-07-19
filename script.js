const horas = document.getElementById ('horas'); //const porque sempre irá armazenar horas
const minutos = document.getElementById('min');
const segundos = document.getElementById ('seg');

//Toda a função está dentro do setInterval
const relogio = setInterval(function time() { //setInterval vai executar a função várias vezes de um determinado tempo

    let dateToday = new Date ();  //manipula data e hora
    let hr = dateToday.getHours(); // atribui a var hr as horas
    let min = dateToday.getMinutes(); // atribui a var min os minutos
    let seg = dateToday.getSeconds(); // atribui a var seg os segundos

    //adiciona o valor 0 a hr, min e seg, caso o valor for menor que 10
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    // muda a imagem conforme o horário passa
    if (hr >= 0 && hr <12) { 

        document.body.style.backgroundImage = "url('../imagens/foto-manha.jpg')";

    } else if (hr >=12 && hr <= 18){

        document.body.style.backgroundImage = "url('../imagens/foto-tarde.jpg')";
         
    }else {
        document.body.style.backgroundImage = "url('../imagens/foto-noite.jpg')"; 
    }
    //mostra na tela o horario 
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg; 

})