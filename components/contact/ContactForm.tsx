"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    reason: "",
    otherReason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        reason: "",
        otherReason: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="bg-gray-900 text-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="stagger-item">
              <label htmlFor="fullName" className="block font-semibold mb-3">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div className="stagger-item">
              <label htmlFor="email" className="block font-semibold mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-20 transition-all"
                placeholder="Your email"
              />
            </div>
          </div>

          {/* Reason for Contact */}
          <div className="stagger-item">
            <label className="block font-semibold mb-4">
              Why are you contacting us?
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="reason"
                  value="Web Design"
                  checked={formData.reason === "Web Design"}
                  onChange={handleChange}
                  className="w-5 h-5 accent-white cursor-pointer"
                />
                <span className="group-hover:text-gray-300 transition-colors">Web Design</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="reason"
                  value="Mobile App Design"
                  checked={formData.reason === "Mobile App Design"}
                  onChange={handleChange}
                  className="w-5 h-5 accent-white cursor-pointer"
                />
                <span className="group-hover:text-gray-300 transition-colors">Mobile App Design</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="reason"
                  value="Collaboration"
                  checked={formData.reason === "Collaboration"}
                  onChange={handleChange}
                  className="w-5 h-5 accent-white cursor-pointer"
                />
                <span className="group-hover:text-gray-300 transition-colors">Collaboration</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="reason"
                  value="Others"
                  checked={formData.reason === "Others"}
                  onChange={handleChange}
                  className="w-5 h-5 accent-white cursor-pointer"
                />
                <span className="group-hover:text-gray-300 transition-colors">Others</span>
              </label>
            </div>
          </div>

          {/* Message */}
          <div className="stagger-item">
            <label htmlFor="message" className="block font-semibold mb-3">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-20 transition-all resize-none"
              placeholder="Tell us more..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center stagger-item">
            <button
              type="submit"
              className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Submit
            </button>
          </div>

          {submitted && (
            <p className="text-center text-green-400 font-semibold animate-fadeIn">
              Thank you! We'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
