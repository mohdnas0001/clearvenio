import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Clarity is our Craft</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our driving force is helping brands stand out, stay consistent,
              and stay understood to the target audience. Whether you are
              launching, evolving, or rebuilding, we bring spark to your ideas
              and direction to your brand.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Refund policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  F.A.Q
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Social media</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">
              Kindly subscribe to our newsletter to get latest updates on our
              services.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white text-black placeholder-gray-500 text-sm focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Clearvenio {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
