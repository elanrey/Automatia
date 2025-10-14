function showToast(title, description, type = 'success') {
  const toast = document.getElementById('toast');
  
  if (!toast) {
    return;
  }

  const toastTitle = toast.querySelector('.toast-title');
  const toastDescription = toast.querySelector('.toast-description');
  const toastIcon = toast.querySelector('.toast-icon');

  if (!toastTitle || !toastDescription || !toastIcon) {
    return;
  }

  toastTitle.textContent = title;
  toastDescription.textContent = description;

  // Reset classes safely
  toast.classList.remove('success', 'error');

  // Add current type class
  toast.classList.add(type);

  toastIcon.className = 'toast-icon'; // Reset icon class
  if (type === 'success') {
    toastIcon.classList.add('fas', 'fa-check-circle');
  } else {
    toastIcon.classList.add('fas', 'fa-exclamation-circle');
  }

  // Show the toast
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
    const closeButton = toast.querySelector('.toast-close');
    if(closeButton) {
        closeButton.addEventListener('click', () => hideToast());
    }
  }
}
