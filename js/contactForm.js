
document.addEventListener('DOMContentLoaded', function() {
    initializeContactForm();
});

function initializeContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', handleFormSubmit);

  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', clearFieldError);
  });
}

function validateField(event) {
  const field = event.target;
  const value = field.value.trim();
  const fieldName = field.name;
  let isValid = true;
  let errorMessage = '';

  clearFieldError(event);

  switch (fieldName) {
    case 'name':
      if (value.length < 2) {
        isValid = false;
        errorMessage = 'El nombre debe tener al menos 2 caracteres';
      }
      break;
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Por favor ingresa un email válido';
      }
      break;
    case 'message':
      if (value.length < 10) {
        isValid = false;
        errorMessage = 'El mensaje debe tener al menos 10 caracteres';
      }
      break;
  }

  if (!isValid) {
    showFieldError(fieldName, errorMessage);
  }

  return isValid;
}

function clearFieldError(event) {
  const fieldName = event.target.name;
  const errorElement = document.getElementById(`${fieldName}-error`);
  if (errorElement) {
    errorElement.textContent = '';
  }
}

function showFieldError(fieldName, message) {
  const errorElement = document.getElementById(`${fieldName}-error`);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

function validateForm(formData) {
  let isValid = true;
  const errors = {};

  if (formData.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email.trim())) {
    errors.email = 'Por favor ingresa un email válido';
    isValid = false;
  }

  if (formData.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
    isValid = false;
  }

  Object.keys(errors).forEach(field => {
    showFieldError(field, errors[field]);
  });

  return isValid;
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');
  const submitLoader = document.getElementById('submit-loader');

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  if (!validateForm(formData)) {
    return;
  }

  submitBtn.disabled = true;
  submitText.style.display = 'none';
  submitLoader.style.display = 'flex';

  try {
    const response = await fetch('https://www.automatia.cc/api/enviar-mensaje', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      showToast('¡Mensaje enviado!', 'Nos pondremos en contacto contigo pronto.', 'success');
      form.reset();
    } else {
      showToast('Error al enviar', 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.', 'error');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    showToast('Error al enviar', 'Hubo un problema de red o el servidor no responde. Revisa la consola para más detalles.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitText.style.display = 'inline';
    submitLoader.style.display = 'none';
  }
}

function showToast(title, description, type = 'success') {
  const toast = document.getElementById('toast');
  const toastIcon = document.getElementById('toast-icon');
  const toastTitle = document.getElementById('toast-title');
  const toastDescription = document.getElementById('toast-description');

  toastTitle.textContent = title;
  toastDescription.textContent = description;
  toastIcon.className = type === 'success' ? 'toast-icon fas fa-check-circle' : 'toast-icon fas fa-exclamation-circle';
  toast.className = `toast ${type}`;
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

document.addEventListener('click', function(e) {
  if (e.target.closest('.toast')) {
    hideToast();
  }
});
