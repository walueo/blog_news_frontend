import LoginForm from 'components/LoginForm'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto py-8">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LoginPage
