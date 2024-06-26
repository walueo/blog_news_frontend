import RegisterForm from 'components/RegisterForm'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto py-8">
          <RegisterForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default RegisterPage
