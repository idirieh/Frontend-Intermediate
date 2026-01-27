document.querySelector('.search-bar').addEventListener('click', function() {
  const input = this.querySelector('input');
  input.focus(); // Good practice to focus first
  input.select();
});