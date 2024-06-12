import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          News Blog
        </Link>
        <div>
          <Link href="/login" className="text-white mr-4">
            Login
          </Link>
          <Link href="/register" className="text-white">
            Register
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar