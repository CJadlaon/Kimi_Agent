import { Routes, Route } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { CustomCursor } from '@/components/CustomCursor'
import { HomePage } from '@/pages/HomePage'
import { GalleryPage } from '@/pages/GalleryPage'
import { ContactPage } from '@/pages/ContactPage'
import { ProjectDetail } from '@/pages/ProjectDetail'
import { useLenis } from '@/hooks/useLenis'

function App() {
  useLenis()

  return (
    <div className="relative">
      <CustomCursor />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
