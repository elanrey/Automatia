
document.addEventListener('DOMContentLoaded', function() {
    initializeFaqAccordion();
});

function initializeFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.closest('.faq-item');
      const faqAnswer = faqItem.querySelector('.faq-answer');
      const faqIcon = question.querySelector('.faq-icon');

      question.classList.toggle('active');
      faqAnswer.classList.toggle('show');

      if (faqAnswer.classList.contains('show')) {
        faqIcon.classList.remove('fa-chevron-down');
        faqIcon.classList.add('fa-chevron-up');
      } else {
        faqIcon.classList.remove('fa-chevron-up');
        faqIcon.classList.add('fa-chevron-down');
      }
    });
  });
}
