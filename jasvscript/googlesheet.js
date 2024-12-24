const scriptURL = 'https://script.google.com/macros/s/AKfycbzCf439Z1Kei3WjLd7mnKJVV5aUnU-3flgs8Wid0eZqm7Bb8N3gKqD5N8k933xCuTMU/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e =>{
    e.preventDefault();
    fetch(scriptURL, {method: 'POST' , body: new FormData(form)})
     .then(response => alert("Thankyou! your form is submitted successfully"))
     .then(() => {window.location.reload();})
     .catch(error => console.error('Error!', error.message))
})



