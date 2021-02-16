import getElement from './getElement.js';
import initialize from './initialize.js';
 const searchUtils = () =>{
    const form = getElement('.search-form');
    
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
       const text = document.getElementById('value').value;
        initialize(text);

    });
    
 }
 export default searchUtils;