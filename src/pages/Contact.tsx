import { useState, FormEvent } from 'react';
import { Mail, MessageCircle, Linkedin, Instagram, Send, CheckCircle, AlertCircle, ArrowUpRight, Loader2 } from 'lucide-react';
import { contact } from '@/content';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!form.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!EMAIL_REGEX.test(form.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) {
      errs.subject = 'Please add a subject.';
    }
    if (!form.message.trim()) {
      errs.message = 'Please write a message.';
    } else if (form.message.trim().length < 10) {
      errs.message = 'Your message is a bit short - please add a little more detail.';
    }
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name as keyof FormState]) {
      setErrors({ ...errors, [name]: undefined });
    }
    if (status === 'error') {
      setStatus('idle');
      setErrorMsg('');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    setErrorMsg('');
    setErrors({});

    try {
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm(initialState);
      } else {
        setStatus('error');
        setErrorMsg('Something went wrong sending your message. Please try again, or contact us directly by email or WhatsApp.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Could not connect to the form service. Please email us directly at mjenzidigital@gmail.com.');
    }
  };

  const inputErrorClass = (field: keyof FormState) =>
    errors[field]
      ? 'input-field border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
      : 'input-field';

  return (
    <div className="animate-fade-in">
      {/* ─── HEADER ───────────────────────────────────────────── */}
      <section className="bg-ivory-300 border-b border-forest-800/6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-50" />
        <div className="container-mj relative py-16 md:py-24">
          <span className="section-label">Contact</span>
          <h1 className="text-display-xl text-charcoal-900 mt-5 max-w-4xl">
            Let us build something that matters
          </h1>
          <p className="text-lg text-charcoal-700 mt-6 max-w-2xl leading-relaxed">
            Whether you have a clear project in mind or are still exploring ideas, we would love to hear from you. Tell us about your business, your challenges, and what you are trying to achieve.
          </p>
        </div>
      </section>

      {/* ─── CONTACT GRID ─────────────────────────────────────── */}
      <section className="container-mj py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="card p-7 md:p-8">
              <h2 className="text-display-md text-charcoal-900 mb-2">Send a message</h2>
              <p className="text-sm text-charcoal-700 mb-6">
                Fill this out and our team will get back to you as soon as possible.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-5 rounded-xl bg-lime-400/15 border border-lime-400/30 flex items-start gap-3 animate-fade-in">
                  <CheckCircle className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-forest-800">Message sent successfully</p>
                    <p className="text-sm text-charcoal-700 mt-1">
                      Thank you for reaching out. Your message has been delivered and our team will be in touch soon.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-3 text-sm font-semibold text-forest-600 hover:text-forest-800 link-underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-800">Could not send your message</p>
                    <p className="text-sm text-red-700 mt-1">{errorMsg}</p>
                  </div>
                </div>
              )}

              {status !== 'success' && (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-charcoal-900 mb-2">
                        Name <span className="text-forest-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputErrorClass('name')}
                        placeholder="Your name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        disabled={status === 'submitting'}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-charcoal-900 mb-2">
                        Email <span className="text-forest-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputErrorClass('email')}
                        placeholder="you@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        disabled={status === 'submitting'}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-charcoal-900 mb-2">
                      Subject <span className="text-forest-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputErrorClass('subject')}
                      placeholder="What is this about?"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      disabled={status === 'submitting'}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-charcoal-900 mb-2">
                      Message <span className="text-forest-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputErrorClass('message')} resize-y`}
                      placeholder="Tell us about your project, challenge, or idea..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      disabled={status === 'submitting'}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary text-base w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Direct contact sidebar */}
          <div className="lg:col-span-5">
            <div className="card p-8">
              <h2 className="font-display font-semibold text-xl text-charcoal-900 mb-6">
                Other ways to reach us
              </h2>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-forest-800/10 hover:border-forest-600/30 hover:bg-forest-800/4 transition-all"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-forest-800 text-lime-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-sage-400 uppercase tracking-wider">Email</p>
                    <p className="text-charcoal-900 font-medium truncate">{contact.email}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-forest-600 ml-auto flex-shrink-0" />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-forest-800/10 hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#25D366] text-white flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-sage-400 uppercase tracking-wider">WhatsApp</p>
                    <p className="text-charcoal-900 font-medium truncate">{contact.whatsappDisplay}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-forest-600 ml-auto flex-shrink-0" />
                </a>

                {/* LinkedIn */}
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-forest-800/10 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5 transition-all"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#0A66C2] text-white flex-shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-sage-400 uppercase tracking-wider">LinkedIn</p>
                    <p className="text-charcoal-900 font-medium truncate">Connect on LinkedIn</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-forest-600 ml-auto flex-shrink-0" />
                </a>

                {/* Instagram */}
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-forest-800/10 hover:border-[#E1306C]/40 hover:bg-[#E1306C]/5 transition-all"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex-shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-sage-400 uppercase tracking-wider">Instagram</p>
                    <p className="text-charcoal-900 font-medium truncate">@alexx.muthama</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-forest-600 ml-auto flex-shrink-0" />
                </a>
              </div>
            </div>

            {/* Response time note */}
            <div className="mt-6 p-6 rounded-xl bg-forest-800 text-ivory-300">
              <p className="text-sm leading-relaxed">
                <span className="font-display font-semibold text-lime-400 block mb-2">Good to know</span>
                Our team typically responds within 1–2 business days. For urgent matters, WhatsApp is fastest. Every conversation starts with understanding your problem - no pressure, no sales pitch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
