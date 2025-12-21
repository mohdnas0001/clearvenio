export default function Refund() {
  return (
    <div>
      <section className="mt-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-20 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Refund Policy</h1>

          <div className="bg-white p-8 rounded-lg shadow-md space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                We stand behind the quality of our work. If you're not satisfied
                with our services, we offer a comprehensive refund policy to
                ensure your peace of mind.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Refund Eligibility</h2>
              <p className="text-gray-700 mb-4">
                Refunds are available under the following conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Request must be made within 30 days of service completion</li>
                <li>You must demonstrate that deliverables didn't meet agreed specifications</li>
                <li>We've been given reasonable opportunity to address concerns</li>
                <li>Services were not used as intended</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Refund Process</h2>
              <p className="text-gray-700 mb-4">
                To request a refund:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Contact us at refunds@clearvenio.com with details</li>
                <li>Our team will review your request within 5 business days</li>
                <li>If approved, refunds will be processed within 10 business days</li>
                <li>Refunds will be issued to the original payment method</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Exclusions</h2>
              <p className="text-gray-700 mb-4">
                Refunds may not be available for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Services that were completed as specified</li>
                <li>Changes in business direction or scope requirements</li>
                <li>Client-requested modifications after approval</li>
                <li>Requests made beyond the 30-day window</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Questions?</h2>
              <p className="text-gray-700">
                For any questions about our refund policy, please reach out to
                our team at{" "}
                <a
                  href="mailto:refunds@clearvenio.com"
                  className="text-black font-semibold hover:underline"
                >
                  refunds@clearvenio.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
