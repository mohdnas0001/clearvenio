export default function Privacy() {
  return (
    <div>
      <section className="mt-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-20 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Privacy Policy
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-md space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                At Clearvenio, we respect your privacy and are committed to
                protecting your personal data. This privacy policy outlines how
                we collect, use, and protect your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Contact information (name, email, phone number)</li>
                <li>Company and professional information</li>
                <li>Communication preferences</li>
                <li>Project details and requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
              <p className="text-gray-700 mb-4">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Respond to your inquiries and provide services</li>
                <li>Send newsletters and marketing communications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate security measures to protect your
                personal data against unauthorized access, alteration, or
                disclosure. However, no method of transmission over the internet
                is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this privacy policy, please
                contact us at{' '}
                <a
                  href="mailto:privacy@clearvenio.com"
                  className="text-black font-semibold hover:underline"
                >
                  privacy@clearvenio.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
