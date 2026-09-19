function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-5">

      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          {title}
        </h1>

        {children}

      </div>

    </div>
  );
}

export default AuthLayout;