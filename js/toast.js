function showToast(title, description, type = 'success') {
  const toast = document.getElementById('toast');
  console.log('Toast element:', toast);
  if (!toast) return;

  const toastTitle = toast.querySelector('.toast-title');
  const toastDescription = toast.querySelector('.toast-description');
  const toastIcon = toast.querySelector('.toast-icon');

  if (!toastTitle || !toastDescription || !toastIcon) {
    console.error('Toast elements not found');
    return;
  }

  toastTitle.textContent = title;
  toastDescription.textContent = description;

  toast.className = 'toast';
  toast.classList.add(type);

  toastIcon.className = 'toast-icon';
  if (type === 'success') {
    toastIcon.classList.add('fas', 'fa-check-circle');
  } else {
    toastIcon.classList.add('fas', 'fa-exclamation-circle');
  }

  toast.classList.add('show');

  setTimeout(() => {
    hideToast();
  }, 5000);
}

function hideToast() {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.classList.remove('show');
  }
}

function initializeToast() {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.addEventListener('click', (e) => {
      if (e.target.closest('.toast-close')) {
        hideToast();
      }
    });
  }
}
