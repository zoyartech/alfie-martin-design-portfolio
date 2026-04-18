import React, { useState, useEffect } from 'react';
import { Copy, Check, Code, Plus, Trash2, Sparkles } from 'lucide-react';

export default function JsonLdGenerator() {
  const [type, setType] = useState('Article');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    headline: '',
    description: '',
    authorName: '',
    datePublished: new Date().toISOString().split('T')[0],
    imageUrl: '',
    brand: '',
    price: '',
    currency: 'USD',
    applicationCategory: 'WebApplication',
    operatingSystem: 'Any'
  });
  const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFaqChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const addFaq = () => setFaqs([...faqs, { question: '', answer: '' }]);
  const removeFaq = (index) => setFaqs(faqs.filter((_, i) => i !== index));

  const generateJsonLd = () => {
    let schema = {
      "@context": "https://schema.org",
      "@type": type,
    };

    if (type === 'Article') {
      schema.headline = formData.headline || 'Your Article Title';
      schema.description = formData.description || 'A brief description of your article.';
      schema.author = {
        "@type": "Person",
        "name": formData.authorName || 'Author Name'
      };
      schema.datePublished = formData.datePublished;
      if (formData.imageUrl) schema.image = formData.imageUrl;
    } 
    else if (type === 'FAQPage') {
      schema.mainEntity = faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question || 'Your Question?',
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer || 'The answer goes here.'
        }
      }));
    }
    else if (type === 'Product') {
      schema.name = formData.headline || 'Product Name';
      schema.description = formData.description || 'Product description.';
      if (formData.brand) {
        schema.brand = { "@type": "Brand", "name": formData.brand };
      }
      if (formData.price) {
        schema.offers = {
          "@type": "Offer",
          "price": formData.price,
          "priceCurrency": formData.currency || 'USD'
        };
      }
    }
    else if (type === 'SoftwareApplication') {
      schema.name = formData.headline || 'App Name';
      schema.applicationCategory = formData.applicationCategory;
      schema.operatingSystem = formData.operatingSystem;
      if (formData.price) {
        schema.offers = {
          "@type": "Offer",
          "price": formData.price,
          "priceCurrency": formData.currency || 'USD'
        };
      }
    }

    return `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateJsonLd());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputClasses = "w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all";
  const labelClasses = "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5";

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden flex flex-col md:flex-row">
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-6 md:p-8 bg-slate-50 border-r border-slate-200">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Semantic Schema Generator</h3>
            <p className="text-sm text-slate-500">Structured data optimized for AI crawlers</p>
          </div>
        </div>

        <div className="mb-6">
          <label className={labelClasses}>Content Type</label>
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value)}
            className={inputClasses}
          >
            <option value="Article">Article / Blog Post</option>
            <option value="FAQPage">FAQ Page</option>
            <option value="Product">Product / E-commerce</option>
            <option value="SoftwareApplication">Software / SaaS</option>
          </select>
        </div>

        <div className="space-y-4">
          {type !== 'FAQPage' && (
            <div>
              <label className={labelClasses}>{type === 'Article' ? 'Headline' : 'Name'}</label>
              <input type="text" name="headline" value={formData.headline} onChange={handleInputChange} placeholder="Enter title..." className={inputClasses} />
            </div>
          )}

          {type === 'Article' && (
            <>
              <div>
                <label className={labelClasses}>Description</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} rows={2} placeholder="Brief summary..." className={inputClasses} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>Author Name</label>
                  <input type="text" name="authorName" value={formData.authorName} onChange={handleInputChange} placeholder="John Doe" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Date Published</label>
                  <input type="date" name="datePublished" value={formData.datePublished} onChange={handleInputChange} className={inputClasses} />
                </div>
              </div>
              <div>
                <label className={labelClasses}>Image URL</label>
                <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} placeholder="https://..." className={inputClasses} />
              </div>
            </>
          )}

          {type === 'FAQPage' && (
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="p-4 bg-white border border-slate-200 rounded-xl relative">
                  <button onClick={() => removeFaq(index)} className="absolute top-3 right-3 text-slate-400 hover:text-rose-500">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="mb-3">
                    <label className={labelClasses}>Question {index + 1}</label>
                    <input type="text" value={faq.question} onChange={(e) => handleFaqChange(index, 'question', e.target.value)} placeholder="What is SAO?" className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>Answer</label>
                    <textarea value={faq.answer} onChange={(e) => handleFaqChange(index, 'answer', e.target.value)} rows={2} placeholder="Search AI Optimization is..." className={inputClasses} />
                  </div>
                </div>
              ))}
              <button onClick={addFaq} className="w-full py-2.5 border-2 border-dashed border-slate-300 text-slate-500 rounded-xl font-medium text-sm hover:border-indigo-400 hover:text-indigo-600 transition-colors flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Add Question
              </button>
            </div>
          )}

          {type === 'Product' && (
            <>
              <div>
                <label className={labelClasses}>Description</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} rows={2} placeholder="Product description..." className={inputClasses} />
              </div>
              <div>
                <label className={labelClasses}>Brand</label>
                <input type="text" name="brand" value={formData.brand} onChange={handleInputChange} placeholder="Acme Corp" className={inputClasses} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>Price</label>
                  <input type="number" name="price" value={formData.price} onChange={handleInputChange} placeholder="99.99" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Currency</label>
                  <input type="text" name="currency" value={formData.currency} onChange={handleInputChange} placeholder="USD" className={inputClasses} />
                </div>
              </div>
            </>
          )}

          {type === 'SoftwareApplication' && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>Category</label>
                  <input type="text" name="applicationCategory" value={formData.applicationCategory} onChange={handleInputChange} placeholder="WebApplication" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Operating System</label>
                  <input type="text" name="operatingSystem" value={formData.operatingSystem} onChange={handleInputChange} placeholder="Any" className={inputClasses} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>Price</label>
                  <input type="number" name="price" value={formData.price} onChange={handleInputChange} placeholder="0.00" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Currency</label>
                  <input type="text" name="currency" value={formData.currency} onChange={handleInputChange} placeholder="USD" className={inputClasses} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Code Preview Section */}
      <div className="w-full md:w-1/2 bg-slate-900 text-slate-300 p-6 md:p-8 flex flex-col relative">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold tracking-wider uppercase text-slate-400 flex items-center gap-2">
            <Code className="w-4 h-4" /> Generated JSON-LD
          </h4>
          <button 
            onClick={handleCopy}
            className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1.5 transition-all ${
              copied ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>
        
        <div className="flex-1 bg-black/50 rounded-xl p-4 overflow-auto border border-slate-800 custom-scrollbar">
          <pre className="text-xs md:text-sm font-mono text-emerald-400 leading-relaxed whitespace-pre-wrap break-all">
            {generateJsonLd()}
          </pre>
        </div>
        
        <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
          <p className="text-xs text-blue-300 leading-relaxed">
            <strong>Why this matters for SAO:</strong> AI agents like ChatGPT, Perplexity, and Claude rely heavily on structured data to parse facts. Injecting semantic schemas directly into your page's <code>&lt;head&gt;</code> ensures agents correctly attribute entities, intent, and relationships without having to guess from raw text.
          </p>
        </div>
      </div>
    </div>
  );
}