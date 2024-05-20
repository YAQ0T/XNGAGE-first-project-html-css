let flag = 0;
function toggle() {
    if(!flag)document.getElementById("overlay").style.display = "block";
    else document.getElementById("overlay").style.display = "none";
    flag = !flag;
}
document.getElementById('burger-menu').addEventListener('click', ()=>{
    toggle();
})

document.getElementById('exit-burger-menu').addEventListener('click', ()=>{
    toggle();
})