const circleSelection = document.querySelector('.circles');
const circles = document.querySelectorAll('.circle');
const progressCircles = document.querySelectorAll('.progress');
const progressText = document.querySelectorAll('.circles h1');
let bol = false;
window.addEventListener("scroll", function () {
    if (window.pageYOffset > circleSelection.offsetTop - 600 && bol === false) {
        for (let i = 0; i < circles.length; i++) {
            let radius = progressCircles[i].r.baseVal.value;
            let circumference = radius * 2 * Math.PI;
            progressCircles[i].style.strokeDasharray = circumference;
            function setProgress(percent) {
                progressCircles[i].style.strokeDashoffset = circumference - (percent / 100) * circumference;

            }
            const progress = circles[i].CDATA_SECTION_NODE.prog;
            progressText[i].innerHTML = progress + "%";
            setProgress(progress);
            bol = true;
        }
    }
});