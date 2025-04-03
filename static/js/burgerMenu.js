document.getElementById('burger-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('main-nav').querySelector('ul').classList.toggle('active');
});