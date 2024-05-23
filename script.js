const downloadBtn = document.querySelector(".download-btn");
const fileLink = "https://drive.google.com/drive/folders/18bwWg8iCIJtF12acRUsG45ebiz1LxuDp?usp=sharing";


const initTimer = () => {
if(downloadBtn.classList.contains("disable-timer")) {
return location.href = fileLink;
}
let timer = downloadBtn.dataset.timer;
downloadBtn.classList.add("timer");
downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
const initCounter = setInterval(() => {
if(timer > 0) {
    timer--;
    return downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
}
clearInterval(initCounter);
location.href = fileLink;
downloadBtn.innerText = "Your file is downloading...";
setTimeout(() => {
    downloadBtn.classList.replace("timer", "disable-timer");
    downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                             <span class="text">Download Again</span>`;
}, 3000);
}, 1000);
}
downloadBtn.addEventListener("click", initTimer);

const text = document.querySelector(".txt3");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";

}
let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length){
        conmplete();
        return;
    }
}

function conmplete(){
    clearInterval(timer);
    timer =null;
}
