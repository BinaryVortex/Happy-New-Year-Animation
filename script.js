//Set the date we're counting down to 
var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

//Update the count down every 1 sec
var x = setInterval(function(){

    //Get today's date and time
    var now = new Date().getTime();

    //Find the distance between now and the count down date
    var distance = countDownDate - now;

    //Time calculations for days, hours, minutes and seconds
    var days = Math.floor (distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor ((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor ((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor ((distance % (1000 * 60)) / 1000);

    //Output the result to an element
    document.getElementById("days").innerHTML = days + "<br><span>days</span>";
    document.getElementById("hours").innerHTML = hours + "<br><span>hours</span>";
    document.getElementById("minutes").innerHTML = minutes + "<br><span>minutes</span>";
    document.getElementById("seconds").innerHTML = seconds + "<br><span>seconds</span>";

    //When the count down is over
    if(distance < 0){
        clearInterval(x);
        document.getElementById("time").style.display = "none";
        document.querySelector("h1").className = "new-year";

        //firework animation
        const fireworkCount = 350;
        const fireworkContainer = document.getElementById("firework-container");

        for(let i = 0; i < fireworkCount; i++){
            const firework = document.createElement("div");
            firework.classList.add("firework");
            fireworkContainer.appendChild(firework);

            animateFirework(firework);
        }

        function animateFirework(firework){
            const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"];
            const color = colors[Math.floor(Math.random() * colors.length)];
            firework.style.backgroundColor = color;

            //Calculate random starting position and size for the firework
            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight;
            const startSize = Math.random() * 3 + 1;
            firework.style.left = startX + "px";
            firework.style.top =startY + "px";
            firework.style.transform = `scale(${startSize})`;

            //Calculate random ending position and size for the fire work
            const endX = Math.random() * window.innerWidth;
            const endY = Math.random() * window.innerHeight;
            const endSize = Math.random() * 3 + 1;

  // Animate the firework
  const duration = Math.random() * 3 + 3; // duration between 3 and 6 seconds
firework.animate(
    [
    {
        transform: `translate(${startX - endX}px, ${startY - endY}px) scale(${startSize})`,
    },
    {
        transform: `translate(${-endX}px, ${-endY}px) scale(${endSize})`,
    },
    ],
    {
      duration: duration * 1000,
    easing: "ease-out",
    fill: "both",
    }
    ).onfinish = function() {
    animateFirework(firework);
    };
    }

    }   
}, 1000);
