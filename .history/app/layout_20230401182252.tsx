import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-screen bg-black'>
        <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        {children}
        </div>
      </body>
    </html>
  )
}
