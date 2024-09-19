export const isEmailValid = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isPhoneValid = (phone: string) => {
  const phoneRegex = /^\d{10,}$/;
  return phoneRegex.test(phone);
};
