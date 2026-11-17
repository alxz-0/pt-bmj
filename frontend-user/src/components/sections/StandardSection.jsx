import { FaCertificate, FaCheckCircle, FaShieldAlt, FaAward } from 'react-icons/fa';

export default function StandardsSection() {
  const standards = [
    {
      id: 1,
      title: "ASME BPVC Section IX - 2025",
      desc: "Kualifikasi Prosedur Pengelasan (WPS) & Laporan Kualifikasi Prosedur (PQR).",
      icon: <FaAward className="text-3xl text-[#c41e2c]" />
    },
    {
      id: 2,
      title: "ASTM-D-A123",
      desc: "Standar internasional untuk spesifikasi lapisan zinc (hot-dip) pada produk besi dan baja.",
      icon: <FaShieldAlt className="text-3xl text-[#c41e2c]" />
    },
    {
      id: 3,
      title: "BS-729",
      desc: "Standar British untuk persyaratan hot dip galvanizing pada komponen logam.",
      icon: <FaCertificate className="text-3xl text-[#c41e2c]" />
    },
    {
      id: 4,
      title: "JIS-H0401",
      desc: "Standar Jepang untuk pengujian lapisan galvanis dan ketebalan korosi.",
      icon: <FaCheckCircle className="text-3xl text-[#c41e2c]" />
    }
  ];

  return (
    /* Menggunakan bg-[#0e2b4b] agar dijamin biru gelap */
    <section className="py-24 bg-[#0e2b4b] relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#c41e2c]/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4">
            Standar Mutu & Kualifikasi
          </h2>
          <div className="w-20 h-1.5 bg-[#c41e2c] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300">
            Kami berkomitmen pada standar teknis tertinggi, didukung oleh tenaga ahli bersertifikat dan prosedur pengelasan yang teruji.
          </p>
        </div>

        {/* Grid Standards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item) => (
            <div 
              key={item.id} 
              className="bg-white/10 border border-white/20 p-6 rounded-2xl hover:bg-white/15 hover:border-[#c41e2c]/50 transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform origin-left">
                {item.icon}
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Baris Sertifikasi Tambahan */}
        <div className="mt-16 text-center">
          <p className="text-white font-medium mb-4">
            Didukung penuh oleh tenaga ahli dengan Sertifikat Kompetensi (BNSP):
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm border border-white/20">Site Manager</span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm border border-white/20">Civil & Building Works</span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm border border-white/20">Groundwater Drilling</span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm border border-white/20">Road Work Implementer</span>
          </div>
        </div>

      </div>
    </section>
  );
}