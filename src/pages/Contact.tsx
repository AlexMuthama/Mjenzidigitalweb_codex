import { useState, FormEvent } from 'react';
import { Mail, MessageCircle, Linkedin, Instagram, Send, CheckCircle, AlertCircle, ArrowUpRight, ArrowRight, Loader2 } from 'lucide-react';
import { contact } from '@/content';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const fieldLabels: Record<keyof FormState, string> = {
  name: 'Name',
  email: 'Email',
  subject: 'Subject',
  message: 'Message',
};

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
  const [networkError, setNetworkError] = useState(false);

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
      const firstInvalidField = Object.keys(validationErrors)[0];
      if (firstInvalidField) document.getElementById(firstInvalidField)?.focus();
      return;
    }

    setStatus('submitting');
    setErrorMsg('');
    setNetworkError(false);
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
      setNetworkError(true);
      setErrorMsg('Could not connect to the form service. Please try again or contact us directly by email:');
    }
  };

  const inputErrorClass = (field: keyof FormState) =>
    errors[field]
      ? 'input-field border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
      : 'input-field';

  return (
    <div className="animate-fade-in">
      {/* ─── HEADER ───────────────────────────────────────────── */}
      <section className="bg-brand-green text-forest-800 border-b border-forest-800/6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-50" />
        <div className="container-mj relative py-16 md:py-24">
          <span className="section-label">Contact</span>
          <h1 className="text-display-xl text-forest-800 mt-5 max-w-4xl">
            Tell us what your business needs
          </h1>
          <p className="text-lg text-charcoal-700 mt-6 max-w-2xl leading-relaxed">
            Mjenzi Digital welcomes enquiries from SMEs, startups, entrepreneurs and organisations looking for practical digital solutions - from websites and business systems to AI and workflow automation, dashboards, data analysis and digital marketing. Tell us what you are working on and what you would like to improve.
          </p>
          <a href="#enquiry-form" className="btn-primary mt-7">
            Start an enquiry
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* ─── CONTACT GRID ─────────────────────────────────────── */}
      <section id="enquiry-form" className="container-mj py-12 md:py-16 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="card p-7 md:p-8">
              <h2 id="enquiry-heading" className="text-display-md text-charcoal-900 mb-2">Send an enquiry</h2>
              <p className="text-sm text-charcoal-700 mb-6">
                Share a few details about what you need. After submission, the form will confirm whether your enquiry went through.
              </p>

              <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
                {status === 'submitting' ? 'Submitting your enquiry.' : ''}
              </p>

              {status === 'success' && (
                <div role="status" aria-live="polite" aria-atomic="true" className="mb-6 p-5 rounded-xl bg-lime-400/15 border border-lime-400/30 flex items-start gap-3 animate-fade-in">
                  <CheckCircle className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-forest-800">Enquiry submitted successfully</p>
                    <p className="text-sm text-charcoal-700 mt-1">
                      Thank you for getting in touch. Your enquiry has been submitted through the contact form.
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
                <div role="alert" aria-atomic="true" className="mb-6 p-5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-red-800">Could not send your message</p>
                    <p className="text-sm text-red-700 mt-1">
                      {errorMsg}{networkError && <> <a href={`mailto:${contact.email}`} className="font-semibold underline underline-offset-2">{contact.email}</a>.</>}
                    </p>
                  </div>
                </div>
              )}

              {status !== 'success' && (
                <form onSubmit={handleSubmit} noValidate aria-labelledby="enquiry-heading" aria-busy={status === 'submitting'} className="space-y-5">
                  {Object.keys(errors).length > 0 && (
                    <div role="alert" aria-atomic="true" className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                      <p className="font-semibold">Please check the following fields:</p>
                      <ul className="mt-2 list-inside list-disc space-y-1">
                        {Object.entries(errors).map(([field, message]) => (
                          <li key={field}>{fieldLabels[field as keyof FormState]}: {message}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-charcoal-900 mb-2">
                        Name <span className="text-forest-600" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
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
                        Email <span className="text-forest-600" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        required
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
                      Subject <span className="text-xs font-normal text-charcoal-700">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputErrorClass('subject')}
                      placeholder="e.g. Website or workflow automation"
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
                      Message <span className="text-forest-600" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
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
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <Send className="w-4 h-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Direct contact sidebar */}
          <div className="lg:col-span-5">
            <div className="pt-2 lg:pt-4">
              <h2 className="font-display font-semibold text-xl text-charcoal-900">
                Prefer direct contact?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-700">
                You can also reach Mjenzi Digital by email or WhatsApp.
              </p>

              <div className="mt-5 divide-y divide-forest-800/15 border-y border-forest-800/15">
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-4 py-5 transition-colors hover:text-forest-700"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-forest-800 text-lime-400">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-sage-400">Email</span>
                    <span className="block truncate font-medium text-charcoal-900 group-hover:text-forest-700">{contact.email}</span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 flex-shrink-0 text-forest-600" aria-hidden="true" />
                </a>

                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-5 transition-colors hover:text-forest-700"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-forest-800 text-lime-400">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-sage-400">WhatsApp</span>
                    <span className="block font-medium text-charcoal-900 group-hover:text-forest-700">{contact.whatsappDisplay}</span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 flex-shrink-0 text-forest-600" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-sage-400">
                  Connect on social
                </h3>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-forest-700 transition-colors hover:text-forest-900">
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-forest-700 transition-colors hover:text-forest-900">
                    <Instagram className="h-4 w-4" aria-hidden="true" />
                    Instagram
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
