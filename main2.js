/*Contact Us Page -  Animation*/
const input = document.querySelectorAll('.input');

function focusFun()
{
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFun()
{
    let parent = this.parentNode;
    if(this.value == "")
    {
    parent.classList.remove("focus");
    }
}
input.forEach((input) => {
    input.addEventListener("focus", focusFun);
    input.addEventListener("blur", blurFun);
})