const Footer = () => {
    return (
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto text-center text-white">
          &copy; {new Date().getFullYear()} News Blog. All rights reserved.
        </div>
      </footer>
    )
  }
  
  export default Footer