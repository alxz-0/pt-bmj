import { FaWhatsapp, FaCheckCircle, FaCalendarAlt, FaAward, FaHandshake } from 'react-icons/fa';
import Button from '../ui/Button';
import { waLink } from '../../utils/waLink';

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-bmj-light pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Dekorasi Background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-industrial-red/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-navy-blue/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Kiri: Teks & CTA */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-blue/5 border border-navy-blue/10 text-navy-blue font-semibold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-industrial-red animate-pulse"></span>
              Berpengalaman Sejak 2007
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-navy-blue leading-[1.15] mb-6">
              Build Stronger,<br />
              <span className="text-industrial-red">Create Greater Value</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-bmj-muted font-medium mb-6">
              Hot Dip Galvanizing Specialist & Construction
            </p>
            
            <p className="text-bmj-muted mb-8 leading-relaxed max-w-lg">
              PT. Brayat Makmur Jaya (BMJ) adalah mitra terpercaya Anda dalam solusi galvanis, konstruksi, engineering, dan general supply dengan standar internasional.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="#contact" variant="primary">
                Konsultasi Gratis
              </Button>
              <Button href={waLink()} target="_blank" variant="outline">
                <FaWhatsapp className="text-xl" /> Hubungi WhatsApp
              </Button>
            </div>
          </div>

          {/* Kanan: Kotak Statistik */}
          <div className="relative lg:ml-auto w-full max-w-md">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-navy-blue/5 border border-bmj-border relative z-10">
              <div className="space-y-6">
                
                {/* Stat 1 */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-industrial-red/10 flex items-center justify-center text-industrial-red shrink-0">
                    <FaCalendarAlt className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-heading font-extrabold text-navy-blue">17+</h3>
                    <p className="text-bmj-muted font-medium">Tahun Pengalaman</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-industrial-red/10 flex items-center justify-center text-industrial-red shrink-0">
                    <FaAward className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-extrabold text-navy-blue">ASTM / BS / JIS</h3>
                    <p className="text-bmj-muted font-medium">Standar Internasional</p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-industrial-red/10 flex items-center justify-center text-industrial-red shrink-0">
                    <FaHandshake className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-heading font-extrabold text-navy-blue">100+</h3>
                    <p className="text-bmj-muted font-medium">Proyek & Klien Besar</p>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Aksen Kotak Belakang */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-navy-blue to-industrial-red rounded-3xl opacity-5 blur-lg z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
}