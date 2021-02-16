
const addActive = (element) => {
    element.classList.add('active');
}
const removeActive = () => {
    [...document.querySelectorAll('[data-name]')].map(item=>{
        item.classList.remove('active');
    })
}
export {addActive,removeActive}