import { AnalyticsProvider } from '../src/context/AnalyticsContext'
import AppLayout from '../src/layout/AppLayout'
import './globals.css'

export const metadata = {
  title: 'Jeffrey Canoy - Portfolio',
  description: 'Full Stack Software Engineer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsProvider>
          <AppLayout>{children}</AppLayout>
        </AnalyticsProvider>
      </body>
    </html>
  )
}
