// ==============================
// Premium Music Player
// ==============================

const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");
const icon = playBtn.querySelector("i");

playBtn.addEventListener("click", () => {

    if(song.paused){

        song.play();

        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");

    }else{

        song.pause();

        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");

    }

});

song.addEventListener("ended", () => {

    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");

});

// ==============================
// Anniversary Counter
// Change this date!
// ==============================

// Format: Year, Month-1, Day
const firstDay = new Date(2025, 6, 20);

function updateCounter(){

    const today = new Date();

    const diff = today - firstDay;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("timeTogether").innerHTML =
        days + " Days Together ❤️";

}

updateCounter();

setInterval(updateCounter,60000);

// ==============================
// Fade Animation
// ==============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

},{threshold:.2});

document.querySelectorAll(".gallery,.love-letter,.music-section,.counter,footer")
.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(60px)";

    section.style.transition="1s ease";

    observer.observe(section);

});

// ==============================
// Golden Floating Particles
// ==============================

const particles = document.querySelector(".particles");

for(let i=0;i<40;i++){

    const dot = document.createElement("span");

    dot.style.position="absolute";
    dot.style.width="4px";
    dot.style.height="4px";
    dot.style.borderRadius="50%";
    dot.style.background="#D4AF37";

    dot.style.left=Math.random()*100+"%";
    dot.style.top=Math.random()*100+"%";

    dot.style.opacity=Math.random();

    dot.style.animation=`float ${5+Math.random()*8}s linear infinite`;

    particles.appendChild(dot);

}

// Create animation dynamically

const style=document.createElement("style");

style.innerHTML=`

@keyframes float{

0%{

transform:translateY(0px);

opacity:0;

}

50%{

opacity:1;

}

100%{

transform:translateY(-250px);

opacity:0;

}

}

`;

document.head.appendChild(style);
