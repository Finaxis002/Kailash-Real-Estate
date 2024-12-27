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


  