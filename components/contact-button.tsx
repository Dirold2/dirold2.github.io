import Link from 'next/link'

interface ContactButtonProps {
  href: string
  icon: string
  label: string
}

export function ContactButton({ href, icon, label }: ContactButtonProps) {

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    >
      <i className={`bi bi-${icon}`}></i>
      <span>{label}</span>
    </Link>
  )
}

