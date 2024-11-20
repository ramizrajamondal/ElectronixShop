import Banner from "./components/Banner"
import Cards from "./components/Cards"
import Category from "./components/Category"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Review from "./components/Review"
import Services from "./components/Services"

function App() {
  
  return (
    <main>
      <Header />
      <Hero />
      <Category />
      <Cards />
      <Services />
      <Products />
      <Banner />
      <Review />
      <Footer />
      <ContactForm />
    </main>
  )
}

export default App
