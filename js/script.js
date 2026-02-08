
function goToQuestion(){
const name=document.getElementById("username").value;
if(name.trim()===""){alert("Please enter your name ❤️");return;}
localStorage.setItem("valentineName",name);
window.location.href="question.html";
}
function goToVideo(){window.location.href="video.html";}
window.onload=function(){
const name=localStorage.getItem("valentineName");
const nameSpan=document.getElementById("name");
if(name&&nameSpan){nameSpan.innerText=name;}
};
setInterval(()=>{
const heart=document.createElement("div");
heart.classList.add("heart");
heart.innerText="❤️";
heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=Math.random()*20+15+"px";
heart.style.animationDuration=Math.random()*3+4+"s";
document.body.appendChild(heart);
setTimeout(()=>{heart.remove();},7000);
},400);
const noBtn=document.getElementById("noBtn");
if(noBtn){
noBtn.addEventListener("mouseenter",moveNoBtn);
noBtn.addEventListener("touchstart",moveNoBtn);
}
function moveNoBtn(){
const x=Math.random()*200-100;
const y=Math.random()*100-50;
noBtn.style.transform=`translate(${x}px,${y}px)`;
}

// SHARE BUTTON LOGIC (WORKS 100%)
document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById("shareBtn");

  if (!shareBtn) return;

  shareBtn.addEventListener("click", () => {
    const name = localStorage.getItem("valentineName") || "Someone";
    const url = window.location.href;

    const message = `${name}, someone has a Valentine surprise for you 💖💌`;

    // ✅ Modern Mobile Share
    if (navigator.share) {
      navigator.share({
        title: "Be My Valentine 💘",
        text: message,
        url: url
      }).catch(() => {});
    } 
    // ✅ WhatsApp fallback (ALWAYS works)
    else {
      const whatsappURL =
        `https://wa.me/?text=${encodeURIComponent(message + " " + url)}`;
      window.open(whatsappURL, "_blank");
    }
  });
});
