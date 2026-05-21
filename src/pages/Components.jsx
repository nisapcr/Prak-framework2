import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Container from "../components/Container";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";

// IMPORT DATA DISPLAY COMPONENTS BARU
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";

export default function Components() {
  // Data Contoh untuk Tabel Produk
  const headers = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];

  const products = [
    { id: 1, name: "Laptop Asus", category: "Elektronik", price: "Rp 8.000.000" },
    { id: 2, name: "Sepatu Sport", category: "Fashion", price: "Rp 450.000" },
    { id: 3, name: "Jam Tangan", category: "Aksesoris", price: "Rp 799.000" },
  ];

  return (
    <Container>
      <PageHeader title="Components" />
      <p className="text-slate-500 mb-6">Ini halaman komponen praktikum.</p>

      {/* --- SECTION UTILITIES (BUTTON, BADGE, AVATAR) --- */}
      <div className="space-y-6 mb-12">
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Buttons</h3>
          <div className="flex flex-wrap gap-2">
            <Button>Simpan</Button>
            <Button type="secondary">Simpan</Button>
            <Button type="success">Simpan</Button>
            <Button type="danger">Simpan</Button>
            <Button type="warning">Simpan</Button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Badges</h3>
          <div className="flex flex-wrap gap-2">
            <Badge type="primary">Primary</Badge>
            <Badge type="secondary">Secondary</Badge>
            <Badge type="success">Success</Badge>
            <Badge type="danger">Danger</Badge>
            <Badge type="warning">Warning</Badge>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Avatars</h3>
          <div className="flex gap-2">
            <Avatar name="budi" />
            <Avatar name="joko" />
          </div>
        </div>
      </div>

      <hr className="border-slate-100 my-8" />

      {/* --- DATA DISPLAY COMPONENTS SECTION --- */}
      <div className="space-y-10 mb-12">
        <div className="bg-emerald-50/50 p-4 rounded-xl">
          <h2 className="text-xl font-black text-emerald-800">Data Display Components</h2>
          <p className="text-sm text-emerald-600">Digunakan untuk menampilkan informasi atau data kepada pengguna.</p>
        </div>

        {/* 1. KELOMPOK CARD */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">1. Card Standard</h3>
          <div className="max-w-md">
            <Card>
              <h2 className="text-xl font-bold mb-1">Judul Card</h2>
              <p className="text-gray-600 text-sm">Ini adalah isi dari card standard sebagai pembungkus informasi.</p>
            </Card>
          </div>
        </div>

        {/* 2. KELOMPOK PRODUCT CARD */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">2. Product Card</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProductCard
              image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              title="Sepatu Sport"
              category="Fashion"
              price="Rp 450.000"
              description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
            />

            <ProductCard
              image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              title="Smartphone"
              category="Elektronik"
              price="Rp 4.500.000"
              description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
            />
          </div>
        </div>

        {/* 3. KELOMPOK TABLE */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">3. Table Data</h3>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <Table headers={headers}>
              {products.map((product, index) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="border-b border-gray-100 px-4 py-3.5 text-sm text-gray-700">{index + 1}</td>
                  <td className="border-b border-gray-100 px-4 py-3.5 text-sm font-semibold text-slate-800">{product.name}</td>
                  <td className="border-b border-gray-100 px-4 py-3.5 text-sm">
                    <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md text-xs font-medium">{product.category}</span>
                  </td>
                  <td className="border-b border-gray-100 px-4 py-3.5 text-sm font-bold text-slate-900">{product.price}</td>
                  <td className="border-b border-gray-100 px-4 py-3.5 text-sm">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition">
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </Table>
          </div>
        </div>
      </div>

      {/* --- FOOTER CONTAINER SECTION --- */}
      <Container className="bg-gray-50 rounded-2xl p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">Daftar Produk Footer Info</h1>
        <p className="text-gray-600 text-sm">Berikut adalah rangkuman daftar produk terbaru pada sistem.</p>
      </Container>

      <Footer />
    </Container>
  );
}