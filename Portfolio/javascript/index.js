setTimeout(function() { 
    var preloader = document.getElementById('preloader'); 
    preloader.classList.add('fade');

    setTimeout(function() {
        preloader.style.opacity='0';
        preloader.style.zIndex = '-1';
    },2000);

},3000);