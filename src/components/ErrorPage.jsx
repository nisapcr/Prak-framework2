export default function ErrorPage({ code, description, image }) {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center text-center">
      <img
        src={image || "https://cdn-icons-png.flaticon.com/512/2748/2748558.png"}
        className="w-64 mb-6"
      />
      <h1 className="text-6xl font-bold">{code}</h1>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
}