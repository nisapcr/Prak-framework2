import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="p-10 min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200">
      {frameworkData.map((item) => (
        <div
          key={item.id}
          className="max-w-2xl mx-auto mb-6 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 tracking-tight">
            {item.name}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
            {item.description}
          </p>

          <p className="text-sm text-gray-400 mb-5">
            <span className="font-medium text-gray-700">
              {item.details.developer}
            </span>
            <span className="mx-2">•</span>
            {item.details.releaseYear}
          </p>

          <p className="text-blue-500 underline">
            <a
              href={item.details.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-400 text-blue-500 font-medium transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:no-underline"
            >
              Visit Official Website
              <span className="transition-transform duration-300 hover:translate-x-1">
                →
              </span>
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}