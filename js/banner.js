if(localStorage.getItem('cookieSeen') != 'shown'){
    document.querySelectorAll(".cookie-banner").delay(2000).fadeIn();
    localStorage.setItem('cookieSeen','shown')
}

document.querySelectorAll('.close').click(function(e) {
    document.querySelectorAll('.cookie-banner').fadeOut(); 
});