export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-6-6 6 6-6 6'}/></svg>;
}
export function Mark() { return <svg className="brand-mark" width="32" height="32" viewBox="0 0 40 40" aria-hidden="true"><path d="M11 5h27l-4 9H19l-3 6h15l-4 8H13l-3 8H0z" fill="currentColor"/></svg>; }
