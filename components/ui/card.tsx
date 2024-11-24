import { ReactNode } from 'react'

import styles from "@/app/styles/card.module.css";

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <section className={`rounded-lg shadow-md overflow-hidden ${className} ${styles.card}`}>
      {children}
    </section>
  )
}

export function CardHeader({ children, className = '' }: CardProps) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function CardContent({ children, className = '' }: CardProps) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>
}

export function CardTitle({ children, className = '' }: CardProps) {
  return <h3 className={`text-2xl font-bold ${className}`}>{children}</h3>
}

export function CardDescription({ children, className = '' }: CardProps) {
  return <p className={`${className}`}>{children}</p>
}