function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center bg-slate-100 text-center px-6">

      <h1 className="text-6xl font-bold text-blue-700">
        Build Your Professional Resume
      </h1>

      <p className="mt-6 text-xl text-gray-600 max-w-2xl">
        Create ATS-friendly resumes in minutes using AI.
      </p>

      <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
        Get Started
      </button>

    </section>
  );
}

export default Hero;