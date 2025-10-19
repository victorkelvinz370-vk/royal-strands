export function Button({ children, className = '' }) {
  return (
    <button className={'inline-flex items-center justify-center rounded-2xl text-sm font-medium ' + className}>
      {children}
    </button>
  )
}
