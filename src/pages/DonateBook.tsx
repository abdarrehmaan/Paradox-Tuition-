import React, { useState, useEffect } from 'react';
import { CheckCircle, BookHeart, BookOpen, MapPin, Book, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

const donateBookSchema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone must be at least 10 digits').regex(/^\d+$/, 'Only numbers allowed'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  book_title: z.string().min(2, 'Book title is required'),
  subject_class: z.string().min(2, 'Class/Subject is required'),
  condition: z.string().min(1, 'Please select a condition'),
  pickup_address: z.string().min(5, 'Please provide a full address'),
  additional_notes: z.string().optional(),
});

type DonateBookFormValues = z.infer<typeof donateBookSchema>;

const DonateBook: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'donate' | 'request'>('donate');
  const [books, setBooks] = useState<any[]>([]);
  const [loadingBooks, setLoadingBooks] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<DonateBookFormValues>({
    resolver: zodResolver(donateBookSchema),
    defaultValues: {
      full_name: '',
      phone: '',
      email: '',
      book_title: '',
      subject_class: '',
      condition: '',
      pickup_address: '',
      additional_notes: '',
    }
  });

  useEffect(() => {
    if (activeTab === 'request') {
      fetchBooks();
    }
  }, [activeTab]);

  const fetchBooks = async () => {
    setLoadingBooks(true);
    try {
      const { data, error } = await supabase
        .from('book_donations')
        .select('id, book_title, subject_class, pickup_address')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setBooks(data || []);
    } catch (err: any) {
      console.error('Error fetching books:', err);
      toast.error('Failed to load books');
    } finally {
      setLoadingBooks(false);
    }
  };

  const onSubmit = async (data: DonateBookFormValues) => {
    try {
      const { error: dbError } = await supabase
        .from('book_donations')
        .insert([data]);
      if (dbError) throw dbError;

      toast.success('Donation Request Submitted!', {
        description: 'Thank you for your generous contribution.',
      });
    } catch (err: any) {
      console.error('Error submitting donation:', err);
      toast.error('Submission Failed', {
        description: err.message || 'An error occurred while submitting your donation.',
      });
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full border border-gray-100">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Donation Submitted!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for your generous contribution. We will contact you soon to arrange the pickup details.
          </p>
          <button onClick={() => reset()} className="btn-primary w-full">
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
            Request or Donate a Book
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Help us provide educational resources to students in need. Donate your used books or find books you need.
          </p>

          <div className="inline-flex bg-white/60 p-1.5 rounded-xl border border-gray-200 shadow-sm backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('donate')}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeTab === 'donate'
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'text-gray-600 hover:text-brand-dark hover:bg-gray-50'
              }`}
            >
              Donate Books
            </button>
            <button
              onClick={() => setActiveTab('request')}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeTab === 'request'
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'text-gray-600 hover:text-brand-dark hover:bg-gray-50'
              }`}
            >
              Request Books
            </button>
          </div>
        </div>

        {activeTab === 'donate' ? (
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

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-10 space-y-8">
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
                    {...register('full_name')}
                    type="text"
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                  {errors.full_name && <p className="mt-1 text-sm text-red-500">{errors.full_name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="e.g. rajesh@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup Address *
                  </label>
                  <input
                    {...register('pickup_address')}
                    type="text"
                    placeholder="Provide full address for pickup"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                  {errors.pickup_address && <p className="mt-1 text-sm text-red-500">{errors.pickup_address.message}</p>}
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
                    {...register('book_title')}
                    type="text"
                    placeholder="e.g. HC Verma Physics, Class 10 NCERT set"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                  {errors.book_title && <p className="mt-1 text-sm text-red-500">{errors.book_title.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Class Level *
                  </label>
                  <input
                    {...register('subject_class')}
                    type="text"
                    placeholder="e.g. Physics Class 12, Competitive Exams"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  />
                  {errors.subject_class && <p className="mt-1 text-sm text-red-500">{errors.subject_class.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Book Condition *
                  </label>
                  <select
                    {...register('condition')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  >
                    <option value="">Select Condition</option>
                    <option value="Like New">Like New</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair (Readable)</option>
                  </select>
                  {errors.condition && <p className="mt-1 text-sm text-red-500">{errors.condition.message}</p>}
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-2">
                Additional Notes
              </h3>
              <textarea
                {...register('additional_notes')}
                rows={4}
                placeholder="Any preferred pickup time, or details about the books..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-6">
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full sm:w-auto btn-primary px-12 py-4 text-lg font-bold mx-auto flex items-center justify-center shadow-xl shadow-blue-500/20 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Donation Request'}
              </button>
            </div>
          </form>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-6 md:p-8">
              <div className="flex items-center justify-between gap-3 mb-6 border-b border-gray-100 pb-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-brand-blue" />
                  <h2 className="text-2xl font-bold text-brand-dark">Available Books for Request</h2>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-center sm:items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full hidden sm:block">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 text-lg">Found a book you need?</h3>
                    <p className="text-sm text-green-700 mt-0.5">Contact us on WhatsApp at <strong>+91 9278493998</strong> to request it. This is totally free, type message now!</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/919278493998?text=Hi%2C%20I%20want%20to%20request%20a%20book%20from%20the%20donations."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2 whitespace-nowrap shadow-sm hover:shadow-md w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
              
              {loadingBooks ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue"></div>
                </div>
              ) : books.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-100">
                  <Book className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 font-medium">No books available at the moment.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {books.map((book) => (
                    <div key={book.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                      <div className="flex-grow">
                        <h3 className="font-bold text-lg text-brand-dark mb-3 leading-tight">{book.book_title}</h3>
                        <div className="space-y-2.5 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-5">
                          <div className="flex items-start gap-2.5">
                            <Book className="w-4 h-4 mt-0.5 text-brand-blue flex-shrink-0" />
                            <div>
                              <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Subject & Class</span>
                              <span className="font-medium text-gray-800">{book.subject_class}</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <MapPin className="w-4 h-4 mt-0.5 text-brand-blue flex-shrink-0" />
                            <div>
                              <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Pickup Location</span>
                              <span className="font-medium text-gray-800">{book.pickup_address}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <a
                          href={`https://wa.me/919278493998?text=${encodeURIComponent(`Hi, I am interested in the donated book: "${book.book_title}" for class/subject: ${book.subject_class}. Is it still available?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#075E54] font-semibold py-2.5 rounded-lg border border-[#25D366]/30 transition-colors flex items-center justify-center gap-2 text-sm"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Request this book via WhatsApp
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonateBook;
