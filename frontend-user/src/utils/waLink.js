const   No_Whatsapp = "6282112731108";

export const waLink = (
    message = "Halo PT. BMJ, saya ingin berkonsultasi dengan anda."
) => `https://wa.me/${No_Whatsapp}?text=${encodeURIComponent(message)}`