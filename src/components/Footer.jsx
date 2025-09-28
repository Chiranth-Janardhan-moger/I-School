import { Phone, Mail, MapPin, Globe, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About / School Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">iSchool</h3>
          <p className="text-sm">
            Inspiring young minds to learn, grow, and shine every day.
          </p>
          
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-8 h-8" />  Site No.8, 12th Cross Road, Maruthi Layout
                    Dasarahalli, Bengaluru 560024
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 82966 30378
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> eeipl793@theischool.com
            </li>
            <li className="flex items-cent er gap-2">
              <Globe className="w-4 h-4" /> www.ischool.com
            </li>
          </ul>
        </div>

        {/* Opening Hours / Quick Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Info</h3>
          <ul className="space-y-2 text-sm">
            <li>Monday - Friday: 9:00 AM - 2:00 PM</li>
            <li>Saturday: 9:00 AM - 11:00 AM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Google Map with Pin */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Location</h3>
          <div className="w-full h-40 rounded-lg overflow-hidden shadow-lg">
            <iframe
  title="I-School Location"
  src="https://www.google.com/maps?q=13.058076,77.606399&hl=en&z=18&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/30 pt-4 text-center text-sm opacity-80">
        © {new Date().getFullYear()} I-School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
