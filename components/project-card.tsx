
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import styles from "@/app/styles/card.module.css";

interface ProjectCardProps {
  title: string
  description: string
  link: string
}

export function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <Card className={`${styles.projectCard} group hover:shadow-lg`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription>{description}</CardDescription>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center transition-colors"
        >
          Подробнее
          <i className="bi bi-arrow-up-right ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </CardContent>
    </Card>
  )
}