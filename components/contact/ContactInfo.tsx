import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactInfo() {
  return (
    <section className="bg-black text-white py-16 border-t border-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="flex items-start gap-4 stagger-item">
            <Mail className="w-6 h-6 mt-1 flex-shrink-0 text-gray-300 group-hover:text-white transition-colors" />
            <div>
              <a
                href="mailto:info@clearvenio.com"
                className="text-white hover:text-gray-300 transition-colors font-medium group"
              >
                info@clearvenio.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 stagger-item">
            <Phone className="w-6 h-6 mt-1 flex-shrink-0 text-gray-300 group-hover:text-white transition-colors" />
            <div>
              <a
                href="tel:+1234567890"
                className="text-white hover:text-gray-300 transition-colors font-medium group"
              >
                +1(234)567890
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 stagger-item">
            <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-gray-300 group-hover:text-white transition-colors" />
            <div className="text-gray-300">
              <p>No. 10 Oritsha Crescent, Ikoyi, Abuja</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
