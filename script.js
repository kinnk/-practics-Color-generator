
const columns = document.querySelectorAll('.column');
const copyAlert = document.querySelector('.copyAlert');

addEventListener('click',(event)=>{
    let click = event.target.dataset.type;
    if(click === 'lock'){
        event.target.classList.toggle('fa-lock-open');
        event.target.classList.toggle('fa-lock');
    }else if (click === 'copy'){
        copyHex(event.target.textContent);
        copyAlert.classList.toggle('active');
        setTimeout(()=>{ copyAlert.classList.toggle('active');},2000)
    }
})
addEventListener('keydown',(event) => {
    event.preventDefault();
    if (event.code.toLowerCase() === 'space'){
        setColor();
    }
})
// генерируем случаный hexcode цвета в 16 сс
function hexGenerator(){
    const code = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i++){
        hexCode +=(code.charAt(Math.floor(Math.random()*code.length)))
    }
    return hexCode;
}

function copyHex(text){
    navigator.clipboard.writeText(text);
}

function setColor(){
    columns.forEach(column => {
        const hexName = column.querySelector('h2');
        const color = hexGenerator();
        if (column.querySelector('i').classList.contains('fa-lock')){
            return
        }

        hexName.textContent = color;
        column.style.background = color;
    })
}setColor();
