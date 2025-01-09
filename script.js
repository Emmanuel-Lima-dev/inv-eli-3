        // Establece la fecha de finalización para la cuenta regresiva (Ejemplo: 25 de enero de 2025, 11:00 AM)
        const targetDate = new Date("January 25, 2025 11:00:00").getTime();

        // Actualiza la cuenta regresiva cada segundo
        const interval = setInterval(function() {
            // Obtiene la fecha y hora actuales
            const now = new Date().getTime();

            // Calcula la diferencia entre la fecha de destino y la fecha actual
            const timeLeft = targetDate - now;

            // Calcula los días, horas, minutos y segundos restantes
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            let newSeconds;

            if (seconds < 10) {
                newSeconds = "0" + seconds.toString();
            } else {
                newSeconds = seconds.toString()
            }



            // Muestra la cuenta regresiva en el div
            document.getElementById("countdown").innerHTML ="Faltan " + days + " dias <br> " + hours + ":" + minutes + ":" +
            newSeconds;

            // Si la cuenta regresiva llega a 0, detén el temporizador
            if (timeLeft < 0) {
                clearInterval(interval);
                document.getElementById("countdown").innerHTML = "¡Evento comenzado!";
            }
        }, 1000);

        const confeti = document.querySelector(".confeti")
        setTimeout(()=>{confeti.classList.add("hidden")}, 3000)
        