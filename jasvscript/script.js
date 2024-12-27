$(document).ready(function () {
    $('#head_content').load('assets/header.html');
    $('#foot_content').load('assets/footer.html');
    
    console.log("jsquery is working")
});


//header reponsive js 
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
  }


  //for fetching header in each page
  fetch('../assets/header.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('head_content').innerHTML = data;
  })
  .catch(error => console.error('Error loading header:', error));

  

  //for fetching footer in each page


  fetch('../assets/footer.html') // Path to your footer file
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not OK');
          }
          return response.text();
      })
      .then(data => {
          document.getElementById('foot_content').innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));

