// import { Link } from 'react-router-dom'; // (Bisa diabaikan jika belum pakai router, kita pakai <a> saja dulu)

export default function Button({ href, onClick, variant = 'primary', children, className = '', target }) {
  const baseStyle = "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1";
  
  const variants = {
    primary: "bg-industrial-red text-white hover:bg-red-800 hover:shadow-lg hover:shadow-industrial-red/30",
    outline: "border-2 border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white",
    whatsapp: "bg-[#25D366] text-[#0e2b1f] hover:bg-[#1ebe5a] hover:shadow-lg hover:shadow-[#25D366]/30"
  };

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : ''} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}