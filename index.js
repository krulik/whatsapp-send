const LTR_MARK = '%E2%80%8E';
const PLUS_SIGN = '%2B';

const phone = document.querySelector('[name="phone"]');
phone.addEventListener('input', (e) => {
  phone.value = phone.value.replace(LTR_MARK, '');
  phone.value = phone.value.replace(PLUS_SIGN, '+');
});