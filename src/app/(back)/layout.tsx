// import { Providers } from '@/redux/provider'
import './index.css';

export default function BackendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}