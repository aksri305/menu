export const calculateTotalAmount = (baseAmount, discount) => {
  const total = baseAmount - (discount || 0);
  return total > 0 ? total : 0; // Ensure the total doesn't go negative
};

export const generateErrorMessage = (field) => `${field} is required.`;
