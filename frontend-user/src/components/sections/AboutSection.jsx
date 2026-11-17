import { FaBuilding, FaEye, FaBullseye, FaCheckCircle } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id="about" className="py-17 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy-blue mb-4">
            Tentang PT. BMJ
          </h2>
          <div className="w-20 h-1.5 bg-industrial-red mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Kolom Kiri: Sejarah Perusahaan */}
          <div className="bg-bmj-light p-8 sm:p-10 rounded-3xl border-l-8 border-industrial-red shadow-sm relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 text-navy-blue/5 group-hover:scale-110 transition-transform duration-500">
              <FaBuilding size={100} />
            </div>
            
            <h3 className="text-2xl font-heading font-bold text-navy-blue mb-6 flex items-center gap-3 relative z-10">
              <FaBuilding className="text-industrial-red" /> Perjalanan Kami
            </h3>
            
            <div className="space-y-5 relative z-10 text-bmj-dark leading-relaxed">
              <p>
                <strong>PT Brayat Makmur Jaya (BMJ)</strong>, yang mengawali langkahnya sebagai CV Brayat Makmur Jaya, resmi didirikan pada tahun <strong className="text-navy-blue">2007</strong> di Serang, Banten. Sebagai pionir yang telah berpengalaman selama hampir 17 tahun, fokus utama bisnis kami terletak pada penyediaan jasa pengerjaan logam spesialisasi <strong>Hot Dip Galvanizing</strong> dengan standar kualitas tinggi.
              </p>
              <p>
                Menjawab dinamika kebutuhan industri, pada tanggal <strong className="text-navy-blue">26 Agustus 2024</strong>, kami melakukan ekspansi strategis ke berbagai sektor baru. Saat ini, lini layanan kami mencakup <em>General Supply, Labour Supply, Construction, Engineering, Civil, Piping, Mechanical, serta jasa Consultant</em>.
              </p>
              <p>
                Kami berkomitmen penuh menghadirkan solusi terintegrasi dalam bidang construction, mechanical, serta Electrical & Instrument. Seluruh layanan ini didukung secara dinamis oleh tim <strong>Engineers</strong> dan tenaga ahli kompeten yang berdedikasi tinggi.
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Visi & Misi */}
          <div className="flex flex-col gap-6">
            
            {/* Kartu Visi */}
            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-navy-blue/5 border border-bmj-border hover:border-industrial-red/30 transition-colors">
              <h3 className="text-xl font-heading font-bold text-navy-blue mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-industrial-red/10 flex items-center justify-center text-industrial-red">
                  <FaEye />
                </div>
                Visi Kami
              </h3>
              <p className="text-bmj-dark leading-relaxed pl-13">
                Menjadi perusahaan manufaktur dan penyedia jasa pengerjaan logam galvanis terkemuka yang terpercaya, mengutamakan kualitas prima, serta berorientasi pada kepuasan pelanggan berkelanjutan.
              </p>
            </div>

            {/* Kartu Misi */}
            <div className="bg-navy-blue p-8 rounded-3xl shadow-xl shadow-navy-blue/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
              
              <h3 className="text-xl font-heading font-bold text-white mb-5 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-industrial-red">
                  <FaBullseye />
                </div>
                Misi Kami
              </h3>
              
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3 text-bmj-light/90 text-sm leading-relaxed">
                  <FaCheckCircle className="text-industrial-red mt-1 shrink-0" />
                  <span><strong>Menjamin Kualitas Produk Superior:</strong> Menyediakan produk dan jasa galvanis berkualitas tinggi yang memenuhi standar industri nasional maupun internasional.</span>
                </li>
                <li className="flex items-start gap-3 text-bmj-light/90 text-sm leading-relaxed">
                  <FaCheckCircle className="text-industrial-red mt-1 shrink-0" />
                  <span><strong>Menghadirkan Solusi Tepat Guna:</strong> Menyediakan strategi yang responsif dalam memberikan solusi inovatif atas setiap kebutuhan dan tantangan teknis pelanggan.</span>
                </li>
                <li className="flex items-start gap-3 text-bmj-light/90 text-sm leading-relaxed">
                  <FaCheckCircle className="text-industrial-red mt-1 shrink-0" />
                  <span><strong>Mendorong Inovasi Berkelanjutan:</strong> Melakukan pengembangan teknologi, peningkatan kompetensi SDM, dan efisiensi proses secara konsisten.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}