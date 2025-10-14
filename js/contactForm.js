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
      const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

  const payload = {
    nombre: formData.name,
    mail: formData.email,
    mensaje: formData.message
  };

  try {
    const response = await fetch('https://www.automatia.cc/api/v1/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      showToast('¡Mensaje enviado!', 'Nos pondremos en contacto contigo pronto.', 'success');
      form.reset();
    } else {
      const errorData = await response.json().catch(() => ({ message: 'No se pudo leer el cuerpo del error' }));
      showToast('Error del Servidor', `Error ${response.status}: ${errorData.message || 'Inténtalo de nuevo.'}`, 'error');
    }
  } catch (error) {
    showToast('Error de Red', `No se pudo enviar el mensaje. Detalle: ${error.message}.`, 'error');
  } finally {
    submitBtn.disabled = false;
    submitText.style.display = 'inline';
    submitLoader.style.display = 'none';
  }
}