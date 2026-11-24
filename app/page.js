'use client'
import { KartuProfil } from "./components/KartuProfil";

export default function Home() {
  return (
    <main className="Halaman">
      <h1>Kartu Profil Interaktif</h1>
      <p>Latihan React hari pertama.</p>

      {/* Ganti teks di dalam tanda kutip dengan data dirimu sendiri */}
      <KartuProfil 
        nama="Sahlan Syahputra Lubis" 
        kelas="XII RPL 1" 
        hobi="olahraga" 
      />
    </main>
  );
}
