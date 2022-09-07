const toggles = document.querySelectorAll('.faq-toggle') 
// get all items
console.log(toggles);
//chaque item va appeler le eventListner pour detecter le changement 

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // si lelemnt "visible" est défini, le supprimer, sinon, l'ajouter
        toggle.parentElement.classList.toggle('active')
    })
})