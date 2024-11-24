export default function arrayOfLength(length: number): undefined[] {
  return Array.from({ length: Math.floor(length) }, () => undefined);
}
