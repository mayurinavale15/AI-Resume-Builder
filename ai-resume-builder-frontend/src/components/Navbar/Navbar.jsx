function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          AI Resume Builder
        </h1>

        <ul className="flex gap-8 font-medium">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Templates</li>
          <li className="cursor-pointer hover:text-blue-600">Features</li>
          <li className="cursor-pointer hover:text-blue-600">Login</li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;