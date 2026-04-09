import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  		/*Inisialisasi DataForm*/
		const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};
  // /** Deklrasai state **/
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");
  // /** Deklrasai Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLowerCase().includes(_searchTerm) ||
    framework.details.releaseYear.toString().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });
  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];
  return (
    <div className="p-10 min-h-screen bg-gradient-to-br from-pink-100 via-white to-rose-100">
      {/* Search & Filter */}
      <div className="max-w-2xl mx-auto mb-8 space-y-4">
        <input
          type="text"
          name="searchTerm"
          placeholder="🔍 Search framework..."
          className="w-full px-4 py-3 rounded-xl border border-pink-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
          onChange={handleChange}
        />

        <select
          name="selectedTag"
          className="w-full px-4 py-3 rounded-xl border border-pink-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
          onChange={handleChange}
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* List */}
      {filteredFrameworks.map((item) => (
        <div
          key={item.id}
          className="max-w-2xl mx-auto mb-6 p-6 rounded-3xl bg-white/90 backdrop-blur border border-pink-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
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
            <span className="mx-2 text-pink-200">•</span>
            {item.details.releaseYear}
          </p>

          <p className="text-pink-500 underline">
            <a
              href={item.details.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-pink-400 text-pink-500 font-medium transition-all duration-300 hover:bg-pink-500 hover:text-white hover:border-pink-500 hover:no-underline"
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
