window.addEventListener("load",init)

function init(){
     audio = document.querySelector("audio")
    audio.volume = .3;
    audio.load()
    audio.autoplay = true
    audio.loop = true;

    var spans = document.getElementsByClassName("head_span")
    for(var i = 0; i<spans.length; i++){
        spans[i].style.animation = `elo_anim 4s ${.5*i}s ease-in-out infinite`
    }
    window.addEventListener("click",player)

    var regs = document.querySelectorAll(".regNow");
    regs.forEach(reg=>{
        reg.style.animation = "vibrate 0.5s linear infinite"
    })

    setInterval(() => {
        profile = document.querySelector("#profile")
        profile.innerText = devs[counter].name
        profile.href = devs[counter].link
        counter++;
        if(counter>=6)counter = 0;
    }, 2000);

}

function player(){
    if(flag){
        audio.play()
        flag = false;
    }
}

var flag = true

function fun(){
    setTimeout(() => {
        audio.play()
    }, 1);
}

const devs = [
    {"name":"Arpan Saini","link":"https://www.facebook.com/saini2.arpan"},
    {"name":"Sonali Singhal","link":"https://www.facebook.com/sonali.singhal.146"},
    {"name":"Aditya Gupta","link":"https://www.facebook.com/profile.php?id=100005132832450"},
    {"name":"Tushar Goyal","link":"https://www.facebook.com/tushar.goyal.3367174"},
    {"name":"Swarnim","link":"https://www.facebook.com/swarnim.rawat.750"},
    {"name":"Saurabh","link":"#"},
]

var counter = 0;

function c(){
    window.open('https://forms.gle/VJkvuUEQmiLQTEYt5', '_blank');
}