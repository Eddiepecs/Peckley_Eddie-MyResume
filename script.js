function toggleSocialLinks() {
    var socialLinks = document.querySelector('.social-links');
    socialLinks.classList.toggle('hidden');
  }
  document.querySelector('header').addEventListener('click', toggleSocialLinks);