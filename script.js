function startCountdown(id, hours, minutes, seconds) {
    const countdownElement = document.getElementById(id);

    function updateCountdown() {
        if (seconds === 0 && minutes === 0 && hours === 0) {
            countdownElement.textContent = "Sale Ended";
            clearInterval(interval);
            return;
        }
        if (seconds === 0) {
            if (minutes === 0) {
                hours -= 1;
                minutes = 59;
            } else {
                minutes -= 1;
            }
            seconds = 59;
        } else {
            seconds -= 1;
        }

        countdownElement.textContent = ${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')};
    }

    const interval = setInterval(updateCountdown, 1000);
}

// Initialize countdowns for two products
startCountdown('hours', 0, 10, 0); // 10 minutes
startCountdown('hours2', 0, 20, 0); // 20 minutes