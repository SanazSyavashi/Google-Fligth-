export const getButtonVariant = (
  isPrimary: boolean,
  isSecondary: boolean,
): 'contained' | 'text' | 'outlined' => {
  if (isPrimary) return 'contained';

  if (isSecondary) return 'text';

  return 'outlined';
};
