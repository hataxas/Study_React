const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less (${value.length} now)` : undefined
export const maxLength50 = maxLength(50);
export const maxLength30 = maxLength(30);

export const required = value => (value || typeof value === 'number' ? undefined : 'Field is required')
