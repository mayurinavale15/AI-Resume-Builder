function Templates() {

  const templates = [
    {
      id: 1,
      name: "Professional",
      color: "bg-blue-100"
    },
    {
      id: 2,
      name: "Modern",
      color: "bg-green-100"
    },
    {
      id: 3,
      name: "Creative",
      color: "bg-pink-100"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">

      <h2 className="text-4xl font-bold text-center mb-12">
        Resume Templates
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {templates.map((template) => (

          <div
            key={template.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >

            <div className={`${template.color} h-72 flex items-center justify-center text-2xl font-bold`}>
              {template.name}
            </div>

            <div className="p-6">

              <h3 className="text-2xl font-semibold">
                {template.name}
              </h3>

              <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                Use Template
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Templates;
