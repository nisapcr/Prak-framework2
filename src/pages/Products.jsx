import productsData from "../data/products";
import { Link } from "react-router-dom";

export default function Products() {

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Products
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Code</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Brand</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Stock</th>
            </tr>
          </thead>

          <tbody>

            {productsData.map((item) => (

              <tr
                key={item.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-3">
                  {item.id}
                </td>

                <td className="p-3">

                  <Link
                    to={`/products/${item.id}`}
                    className="text-emerald-500 hover:text-emerald-600 font-semibold"
                  >
                    {item.title}
                  </Link>

                </td>

                <td className="p-3">
                  {item.code}
                </td>

                <td className="p-3">
                  {item.category}
                </td>

                <td className="p-3">
                  {item.brand}
                </td>

                <td className="p-3">
                  Rp {item.price.toLocaleString()}
                </td>

                <td className="p-3">
                  {item.stock}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}