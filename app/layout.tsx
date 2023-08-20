import type { Metadata } from 'next'
import { Styles } from './styles'

export const metadata: Metadata = {
  title: 'Join the team | HackSC',
  description: "Join HackSC's team of event organizers, innovators, hackers, as people revolutionizing the hackathon experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Styles />
      <body style={{padding: 0, margin: 0}}>{children}</body>
    </html>
  )
}
