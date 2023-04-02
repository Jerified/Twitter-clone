import './globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'Twitter',
  description: 'Welcome to Twitter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-black">
        <div className="container h-full mx-auto xl:px-30 max-w-6xl">
          <div className="grid grid-cols-4 h-full">
            <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
              {children}
              </div>
          </div>
        </div>
      </body>
    </html>
  );
}
