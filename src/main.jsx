import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'

import Works from './pages/Works.jsx'
import NotFound from './pages/404.jsx'
import Journal from './pages/Journal.jsx'
import Entry from './pages/Entry.jsx'

function Layout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">{children}</main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<App />} />
          <Route path="/works" element={<Works />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<Entry />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)

