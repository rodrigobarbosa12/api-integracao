const maskPhone = (phone: string) => {
  if (phone.length === 13) {
    return phone.replace(/^(\d{2})(\d{2})(\d{5})(\d{4}).*/, '+$1 ($2) $3-$4');
  }

  if (phone.length === 11) {
    return phone.replace(/^(\d{2})(\d{5})(\d{4}).*/, '+55 ($1) $2-$3');
  }

  return phone.replace(/^(\d{2})(\d{4})(\d{4}).*/, '+55 ($1) $2-$3');
};

export default maskPhone;
