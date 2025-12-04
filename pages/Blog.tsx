import React, { useState } from 'react';
import { ArrowRight, Search, Clock, ChevronRight, Mail, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../constants';

const BlogHero: React.FC = () => (
  <section className="bg-slate-900 text-white py-24 lg:py-32 relative overflow-hidden">
     {/* Abstract Backgrounds */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-brand-800/20 blur-3xl"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-8 leading-tight">
        Insights on building <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">reliable systems</span>
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 font-light">
        Articles, guides, and case studies from our senior engineering team.
      </h2>
      <a 
        href="#posts" 
        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-slate-900 bg-white hover:bg-brand-50 transition-colors shadow-lg"
      >
        Explore articles
      </a>
    </div>
  </section>
);

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 p-8 rounded-2xl border border-green-100 text-center">
        <CheckCircle2 className="h-10 w-10 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-900 mb-2">Subscribed successfully!</h3>
        <p className="text-slate-600">You'll receive our latest insights soon.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-green-700 hover:text-green-800 underline font-semibold"
        >
          Add another email
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl"></div>
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <div className="p-2 bg-slate-800 rounded-lg text-brand-400">
          <Mail className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold">Get updates</h3>
      </div>
      <p className="text-slate-400 mb-6 relative z-10">
        Practical engineering advice delivered to your inbox. No spam.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 relative z-10">
        <input 
          type="email" 
          placeholder="your@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
        />
        <button 
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-lg text-slate-900 bg-white hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white disabled:opacity-70 transition-all"
        >
          {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      <p className="text-xs text-slate-500 mt-4 relative z-10">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

const BlogGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <section id="posts" className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Filter (Mobile / Desktop Horizontal) */}
            <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
               <div className="flex flex-nowrap gap-3">
                {BLOG_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                      activeCategory === category
                        ? 'bg-slate-900 text-white shadow-lg'
                        : 'bg-slate-50 text-slate-600 border border-slate-200 hover:border-brand-300 hover:text-brand-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-brand-100 transition-all duration-300 group hover:-translate-y-1 cursor-pointer">
                  <div className="h-52 overflow-hidden relative">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-brand-600 uppercase tracking-wide shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center text-xs font-medium text-slate-500 mb-4 space-x-2">
                       <span>{post.date}</span>
                       <span>•</span>
                       <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> {post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-auto">
                      <div className="text-xs font-bold text-slate-900">
                        By {post.author}
                      </div>
                      <span className="text-sm font-bold text-brand-600 hover:text-brand-800 flex items-center">
                        Read article <ChevronRight className="ml-1 h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-24 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
                <p className="text-slate-500 text-lg">No articles found in this category.</p>
                <button 
                  onClick={() => setActiveCategory("All")}
                  className="mt-4 text-brand-600 font-bold hover:underline"
                >
                  View all articles
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            <NewsletterSection />
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="text-lg font-bold text-slate-900 mb-6">Popular topics</h3>
               <div className="flex flex-wrap gap-2">
                 {['DevOps', 'Scaling', 'Legacy Modernization', 'React', 'Cloud Cost', 'AI Agents'].map((topic, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-100 text-slate-600 text-sm rounded-lg hover:bg-slate-100 hover:border-slate-300 cursor-pointer transition-colors font-medium">
                      #{topic}
                    </span>
                 ))}
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const BlogCta: React.FC = () => (
  <section className="py-24 bg-white border-t border-slate-200 text-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Ready to apply these insights?</h2>
      <p className="text-xl text-slate-600 mb-10">
        Start a conversation with our team and get a tailored solution for your project.
      </p>
      <a 
        href="/#contact"
        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-slate-900 hover:bg-brand-600 transition-all shadow-xl"
      >
        Get estimate <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </div>
  </section>
);

const Blog: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <BlogHero />
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-slate-100"></div>
        <BlogGrid />
      </div>
      <BlogCta />
    </div>
  );
};

export default Blog;