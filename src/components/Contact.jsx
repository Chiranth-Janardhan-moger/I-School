import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null


  const WEB3FORMS_ACCESS_KEY = "1d012e01-21b9-4e37-807e-a2ab89700026";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    // Validate before submitting
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    setIsSubmitting(true);

    // Prepare form data for Web3Forms
    const formPayload = new FormData();
    formPayload.append("access_key", WEB3FORMS_ACCESS_KEY);
    formPayload.append("name", formData.name);
    formPayload.append("phone", formData.phone);
    formPayload.append("message", formData.message);
    formPayload.append("from_name", "School Contact Form");
    formPayload.append("subject", "New Contact Form Submission");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm sm:text-base font-semibold text-blue-600 tracking-wide uppercase mb-2">
            I-School
          </p>
          <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
            CONTACT US
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 select-text">
          {/* Left Side - Contact Info */}
          <div className="space-y-8 lg:space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
                Send us a message <span className="text-3xl sm:text-4xl">📧</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-12">
                Feel free to reach out through contact form or find our contact
                information below. Your feedback, questions, and suggestions are
                important to us as we strive to provide exceptional service to
                our school community.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg sm:text-xl mb-1">
                    Email
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    eeipl793@theischool.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg sm:text-xl mb-1">
                    Mobile
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    +91 82966-30378
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg sm:text-xl mb-1">
                    Address
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    Site No.8, 12th Cross Road, Maruthi Layout
                    <br />
                    Dasarahalli, Bengaluru 560024
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden select-none">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-blue-100 rounded-tr-full opacity-50"></div>

            <form
              onSubmit={handleSubmit}
              className="relative z-10 space-y-6"
              noValidate
            >
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
                >
                  Your name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 sm:px-5 sm:py-4 border rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base sm:text-lg placeholder-gray-400 bg-gray-50 focus:bg-white ${
                    errors.name
                      ? "border-red-300 focus:ring-red-500"
                      : "border-gray-200"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-3 sm:px-5 sm:py-4 border rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base sm:text-lg placeholder-gray-400 bg-gray-50 focus:bg-white ${
                    errors.phone
                      ? "border-red-300 focus:ring-red-500"
                      : "border-gray-200"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
                >
                  Write your message here *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Enter your message (minimum 10 characters)"
                  className={`w-full px-4 py-3 sm:px-5 sm:py-4 border rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base sm:text-lg placeholder-gray-400 bg-gray-50 focus:bg-white resize-none ${
                    errors.message
                      ? "border-red-300 focus:ring-red-500"
                      : "border-gray-200"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 sm:py-5 px-8 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 text-base sm:text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin cursor-not-allowed"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit now
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm sm:text-base">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm sm:text-base">
                    Failed to send message. Please try again or contact us
                    directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
