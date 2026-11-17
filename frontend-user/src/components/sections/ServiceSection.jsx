import { FaFire, FaBoxOpen, FaTools, FaHardHat, FaCheck } from 'react-icons/fa';

export default function ServiceSection() {
  return (
    <section id="services" className="py-24 bg-bmj-light relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy-blue mb-4">
            Unit Bisnis & Layanan
          </h2>
          <div className="w-20 h-1.5 bg-industrial-red mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-bmj-muted">
            Kami menawarkan solusi terintegrasi untuk permasalahan dan improvement di industri Anda.
          </p>
        </div>

        {/* Grid Layanan */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Galvanizing */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-bmj-border hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-industrial-red/10 flex items-center justify-center text-industrial-red mb-6 group-hover:scale-110 transition-transform">
              <FaFire className="text-2xl" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy-blue mb-3">Hot Dip Galvanizing</h3>
            <p className="text-bmj-muted text-sm mb-4 line-clamp-2">
              Pengerjaan logam sesuai standar ASTM-D-A123, BS-729, dan JIS-H0401.
            </p>
            <ul className="text-sm text-bmj-dark space-y-2 mb-4">
              <li className="flex items-center gap-2"><FaCheck className="text-industrial-red text-xs"/> Street lighting & Guardrails</li>
              <li className="flex items-center gap-2"><FaCheck className="text-industrial-red text-xs"/> Tower Telekomunikasi</li>
              <li className="flex items-center gap-2"><FaCheck className="text-industrial-red text-xs"/> Transmisi Listrik & Cable Tray</li>
            </ul>
          </div>

          {/* Card 2: General Supply */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-bmj-border hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-industrial-red/10 flex items-center justify-center text-industrial-red mb-6 group-hover:scale-110 transition-transform">
              <FaBoxOpen className="text-2xl" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy-blue mb-3">General Supply</h3>
            <p className="text-bmj-muted text-sm mb-4 line-clamp-2">
              Penyediaan material dan perlengkapan industri berskala besar.
            </p>
            <ul className="text-sm text-bmj-dark space-y-2 mb-4">
              <li className="flex items-center gap-2"><FaCheck className="text-industrial-red text-xs"/> Safety & PPE</li>
              <li className="flex items-center gap-2"><FaCheck className="text-industrial-red text-xs"/> Mechanical (Seal, Bearing, Valve)</li>
              <li className="flex items-center gap-2"><FaCheck className="text-industrial-red text-xs"/> Electrical & Instruments</li>
            </ul>
          </div>

          {/* Card 3: Fabrikasi */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-bmj-border hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-industrial-red/10 flex items-center justify-center text-industrial-red mb-6 group-hover:scale-110 transition-transform">
              <FaTools className="text-2xl" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy-blue mb-3">Fabrication & Painting</h3>
            <p className="text-bmj-muted text-sm mb-4 line-clamp-2">
              Fabrikasi, sand blasting, dan painting untuk berbagai kebutuhan.
            </p>
            <ul className="text-sm text-bmj-dark space-y-2 mb-4">
              <li className="flex items-center gap-2"><FaCheck className="text-industrial-red text-xs"/> Tank (SS, FRP, Carbon Steel)</li>
              <li className="flex items-center gap-2"><FaCheck className="text-industrial-red text-xs"/> Vessel & Bejana Tekan</li>
              <li className="flex items-center gap-2"><FaCheck className="text-industrial-red text-xs"/> Struktur Bangunan</li>
            </ul>
          </div>

          {/* Card 4: Konstruksi & Labour */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-bmj-border hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-industrial-red/10 flex items-center justify-center text-industrial-red mb-6 group-hover:scale-110 transition-transform">
              <FaHardHat className="text-2xl" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy-blue mb-3">Construction & Labour</h3>
            <p className="text-bmj-muted text-sm mb-4 line-clamp-2">
              Layanan EPC, konstruksi sipil, mekanikal, elektrikal, dan penyediaan tenaga kerja.
            </p>
            <ul className="text-sm text-bmj-dark space-y-2 mb-4">
              <li className="flex items-center gap-2"><FaCheck className="text-industrial-red text-xs"/> EPC & Civil Construction</li>
              <li className="flex items-center gap-2"><FaCheck className="text-industrial-red text-xs"/> Piping & Mechanical</li>
              <li className="flex items-center gap-2"><FaCheck className="text-industrial-red text-xs"/> Labour Supply & Consultant</li>
            </ul>
          </div>

        </div>

        {/* 5 Pilar Value Proposition (Hal 7 PDF) */}
        <div className="mt-16 bg-navy-blue rounded-2xl p-6 sm:p-8 flex flex-wrap justify-center gap-6 sm:gap-12 text-white font-semibold text-sm sm:text-base shadow-lg">
          <div className="flex items-center gap-2"><FaCheck className="text-industrial-red"/> Qualified Material</div>
          <div className="flex items-center gap-2"><FaCheck className="text-industrial-red"/> Experienced Team</div>
          <div className="flex items-center gap-2"><FaCheck className="text-industrial-red"/> On Time Delivery</div>
          <div className="flex items-center gap-2"><FaCheck className="text-industrial-red"/> Customer Satisfaction</div>
        </div>

      </div>
    </section>
  );
}