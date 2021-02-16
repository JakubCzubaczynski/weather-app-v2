import initialize from './src/initialize.js';


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const defaultParam = 'warsaw';
  
    initialize(defaultParam);
    
});