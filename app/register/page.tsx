import RegisterForm from 'app/components/RegisterForm'

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto py-8">
          <RegisterForm />
        </div>
      </main>
    </div>
  )
}

export default RegisterPage
