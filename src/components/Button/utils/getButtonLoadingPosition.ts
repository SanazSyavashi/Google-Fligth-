export const getButtonLoadingPosition = (
  hasStartIcon: boolean,
  hasEndIcon: boolean,
): 'start' | 'end' | 'center' => {
  if (hasStartIcon) return 'start';

  if (hasEndIcon) return 'end';

  return 'center';
};
