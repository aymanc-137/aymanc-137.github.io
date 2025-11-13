// Anti-scraper contact reveal functionality
document.addEventListener('DOMContentLoaded', function() {
  const revealButton = document.getElementById('reveal-contact');
  const contactInfo = document.getElementById('contact-info');

  if (revealButton && contactInfo) {
    revealButton.addEventListener('click', function() {
      // Decode and reveal contact information
      const contactItems = contactInfo.querySelectorAll('.contact-item');

      contactItems.forEach(function(item) {
        const encoded = item.getAttribute('data-contact');
        if (encoded) {
          const decoded = atob(encoded);
          const parts = decoded.split('|');
          const type = parts[0];
          const value = parts[1];

          if (type === 'email') {
            item.href = 'mailto:' + value;
            item.querySelector('.contact-value').textContent = value;
          } else if (type === 'whatsapp') {
            item.href = 'https://wa.me/' + value;
          } else if (type === 'tel') {
            item.href = 'tel:' + value;
            item.querySelector('.contact-value').textContent = value;
          }
        }
      });

      // Show contact info and hide button
      contactInfo.classList.remove('hidden');
      revealButton.style.display = 'none';
    });
  }
});
