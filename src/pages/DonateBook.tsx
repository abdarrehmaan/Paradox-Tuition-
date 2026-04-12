import React, { useState } from 'react';
import { CheckCircle, BookHeart } from 'lucide-react';
import { supabase } from '../lib/supabase';

const DonateBook: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    book_title: '',
    subject_class: '',
    condition: '',
    pickup_address: '',
    additional_notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: dbError } = await supabase
        .from('book_donations')
        .insert([formData]);
      if (dbError) throw dbError;

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting donation:', err);
      setError(err.message || 'An error occurred while submitting your donation.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      full_name: '',
      phone: '',
      email: '',
      book_title: '',
      subject_class: '',
      condition: '',
      pickup_address: '',
      additional_notes: '',
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full border border-gray-100">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Donation Submitted!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for your generous contribution. We will contact you soon to arrange the pickup details.
          </p>
          <button onClick={resetForm} className="btn-primary w-full">
            Donate Another Book
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 tracking-tight">
            Donate a Book, Empower a Mind
          </h1>
          <p className="text-lg text-gray-600">
            Help us provide educational resources to students in need. Donate your used or new books today.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Info Banner */}
          <div className="bg-brand-blue/5 border-b border-brand-blue/10 p-6 md:p-8 flex items-start gap-4">
            <BookHeart className="w-8 h-8 text-brand-blue flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-brand-dark text-lg mb-1">Why Donate?</h3>
              <p className="text-gray-600 text-sm">
                Your old books can be a treasure for someone else. By donating, you are helping students who might not have access to quality educational materials. We will ensure your books reach the right hands.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8">
            {error && (
              <div className="rounded-md bg-red-50 p-4 border border-red-200">
                <p className="text-sm font-medium text-red-800">{error}</p>
              </div>
            )}

            {/* Donor Details */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-2">
                Your Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    required
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    type="text"
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="e.g. rajesh@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup Address *
                  </label>
                  <input
                    required
                    name="pickup_address"
                    value={formData.pickup_address}
                    onChange={handleChange}
                    type="text"
                    placeholder="Provide full address for pickup"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Book Details */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-2">
                Book Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Which school books? *
                  </label>
                  <input
                    required
                    name="book_title"
                    value={formData.book_title}
                    onChange={handleChange}
                    type="text"
                    placeholder="e.g. HC Verma Physics, Class 10 NCERT set"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Class Level *
                  </label>
                  <input
                    required
                    name="subject_class"
                    value={formData.subject_class}
                    onChange={handleChange}
                    type="text"
                    placeholder="e.g. Physics Class 12, Competitive Exams"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Book Condition *
                  </label>
                  <select
                    required
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  >
                    <option value="">Select Condition</option>
                    <option value="Like New">Like New</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair (Readable)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-2">
                Additional Notes
              </h3>
              <textarea
                name="additional_notes"
                value={formData.additional_notes}
                onChange={handleChange}
                rows={4}
                placeholder="Any preferred pickup time, or details about the books..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-6">
              <button
                disabled={loading}
                type="submit"
                className="w-full sm:w-auto btn-primary px-12 py-4 text-lg font-bold mx-auto flex items-center justify-center shadow-xl shadow-blue-500/20 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Donation Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateBook;
