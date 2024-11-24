import Link from 'next/link'

import styles from "@/app/styles/button.module.css";

interface ButtonProps {
  href: string
  icon: string
  label: string
}

export function Button({ href, icon, label }: ButtonProps) {

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button}`}
    >
      <i className={`bi bi-${icon}`}></i>
      <span>{label}</span>
    </Link>
  )
}