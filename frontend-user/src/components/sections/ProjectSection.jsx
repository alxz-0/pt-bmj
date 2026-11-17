import { FaBuilding, FaCheckCircle, FaIndustry, FaHardHat } from 'react-icons/fa';

export default function ProjectSection() {
  const clients = [
    "PT Krakatau Engineering",
    "PT Krakatau Baja Konstruksi",
    "PT Lotte Chemical Titan Nusantara",
    "PT Latinusa Tbk",
    "PT Indonesia Power",
    "PT Wijaya Karya",
    "PT Hutama Karya",
    "PT Pembangunan Perumahan"
  ];

  const projectSectors = [
    { title: "Infrastruktur & Jembatan", icon: <FaHardHat /> },
    { title: "Industri Kimia & Petrokimia", icon: <FaIndustry /> },
    { title: "Pembangkit Listrik & Transmisi", icon: <FaBuilding /> },
    { title: "Fasilitas Manufaktur", icon: <FaBuilding /> }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy-blue mb-4">
            Rekam Jejak & Klien Kami
          </h2>
          <div className="w-20 h-1.5 bg-industrial-red mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-bmj-muted">
            Kepercayaan adalah fondasi kami. Kami bangga telah menjadi mitra bagi perusahaan-perusahaan terkemuka di Indonesia dalam berbagai proyek strategis.
          </p>
        </div>

        {/* Grid Klien */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-bmj-light border border-bmj-border p-6 rounded-2xl flex items-center gap-4 hover:shadow-lg hover:border-industrial-red/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-navy-blue group-hover:text-industrial-red shadow-sm transition-colors shrink-0">
                <FaBuilding size={18} />
              </div>
              <h3 className="font-heading font-bold text-navy-blue text-sm sm:text-base leading-tight">
                {client}
              </h3>
            </div>
          ))}
        </div>

        {/* Sektor Proyek */}
        <div className="bg-navy-blue rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          {/* Dekorasi */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-industrial-red/10 rounded-bl-full blur-2xl"></div>
          
          <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
                Pengalaman Lintas Sektor
              </h3>
              <p className="text-bmj-light/80 leading-relaxed mb-6">
                Dari struktur baja untuk jembatan tol, fabrikasi tangki untuk industri kimia, hingga instalasi mekanikal untuk pembangkit listrik. Kami siap mengeksekusi proyek dengan presisi tinggi dan standar keselamatan yang ketat.
              </p>
              <div className="flex items-center gap-3 text-industrial-red font-bold">
                <FaCheckCircle /> Qualified Material
                <span className="text-white/30">|</span>
                <FaCheckCircle /> On Time Delivery
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {projectSectors.map((sector, index) => (
                <div key={index} className="bg-white/10 border border-white/10 p-4 rounded-xl flex items-center gap-3 text-white">
                  <div className="text-industrial-red text-xl">
                    {sector.icon}
                  </div>
                  <span className="text-sm font-medium">{sector.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}