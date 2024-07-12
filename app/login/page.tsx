import LoginForm from 'app/components/LoginForm'

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto py-8">
          <LoginForm />
        </div>
      </main>
    </div>
  )
}

export default LoginPage
