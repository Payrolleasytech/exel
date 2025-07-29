export function getInitials(fullName: string): string {
  const names = fullName.trim().split(/\s+/);
  const initials = names.slice(0, 2).map(name => name.charAt(0).toUpperCase()).join('');
  return initials;
}
