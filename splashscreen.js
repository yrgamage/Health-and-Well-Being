setTimeout(() => {
  document.body.style.backgroundColor = '#fff'; 
  setTimeout(() => {
    document.querySelector('.loader-container').style.display = 'none'; 

    window.location.href = 'home.html';
  }, 1000); 
}, 4000); 