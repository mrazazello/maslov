import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Layout } from './common/Layout/Layout'
import { PageBackground } from './common/PageBackground/PageBackground'
import { Footer } from './common/Footer/Footer'
import { Header } from './common/Header/Header'
import { CasesPage } from './pages/CasesPage'
import { HomePage } from './pages/HomePage'
import { InvestPage } from './pages/InvestPage'
import { PolitikaPage } from './pages/PolitikaPage'
import { SellPage } from './pages/SellPage'

function App() {

  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<PageBackground image="home"><HomePage /></PageBackground>} />
          <Route path="/invest" element={<PageBackground image="invest"><InvestPage /></PageBackground>} />
          <Route path="/cases" element={<PageBackground image="cases"><CasesPage /></PageBackground>} />
          <Route path="/sell" element={<PageBackground image="sell"><SellPage /></PageBackground>} />
          <Route path="/politika" element={<PolitikaPage />} />
        </Routes>
      </Layout>
      <Footer />
      <Toaster position="top-center" />
    </>
  )
}

export default App
