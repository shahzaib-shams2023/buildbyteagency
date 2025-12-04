import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, User, ChevronLeft, Share2, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../constants';
import { LeadForm } from '../components/LeadForm';

const BlogDetail: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const post = BLOG_POSTS.find(p => p.id === blogId);
  const relatedPosts = BLOG_POSTS.filter(p => p.category === post?.category && p.id !== post?.id).slice(0, 2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 px-4">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-4">Article not found</h1>
        <Link to="/blog" className="text-brand-600 hover:text-brand-700 flex items-center font-medium">
          <ChevronLeft className="h-4 w-4 mr-2" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in bg-white">
      {/* Article Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-slate-900 text-white overflow-hidden">
        {/* Abstract Backgrounds */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link to="/blog" className="inline-flex items-center text-brand-300 hover:text-white mb-8 transition-colors text-sm font-semibold tracking-wide uppercase">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to Articles
          </Link>
          
          <div className="mb-6 flex justify-center">
            <span className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-xs font-bold text-brand-300 uppercase tracking-wide border border-white/10">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8 leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 text-sm font-medium">
            <div className="flex items-center gap-2">
               <div className="h-8 w-8 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-xs">
                 {post.author.charAt(0)}
               </div>
               <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative">
         {/* Overlapping Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Article Body */}
          <div className="lg:col-span-8">
            <article className="prose prose-lg prose-slate max-w-none">
               {/* Using dangerouslySetInnerHTML for the mock content. In production, use a sanitizer. */}
               <div 
                 dangerouslySetInnerHTML={{ __html: post.content }} 
                 className="
                   [&>h2]:text-2xl [&>h2]:font-display [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6
                   [&>p]:text-slate-600 [&>p]:leading-relaxed [&>p]:mb-6
                   [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:text-slate-600
                   [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:text-slate-600
                   [&>li]:mb-2
                   [&>code]:bg-slate-100 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-brand-600 [&>code]:text-sm [&>code]:font-mono
                 "
               />
            </article>

            {/* Share / Tags */}
            <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
               <div className="flex items-center gap-4">
                 <span className="text-slate-900 font-bold">Share this article:</span>
                 <button className="p-2 rounded-full bg-slate-50 text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-colors">
                   <Twitter className="h-5 w-5" />
                 </button>
                 <button className="p-2 rounded-full bg-slate-50 text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-colors">
                   <Linkedin className="h-5 w-5" />
                 </button>
                 <button className="p-2 rounded-full bg-slate-50 text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-colors">
                   <Share2 className="h-5 w-5" />
                 </button>
               </div>
            </div>

            {/* Author Bio */}
            <div className="bg-slate-50 rounded-2xl p-8 mt-12 border border-slate-100 flex items-center gap-6">
               <div className="h-20 w-20 rounded-full bg-brand-600 flex-shrink-0 flex items-center justify-center text-white font-display font-bold text-3xl">
                 {post.author.charAt(0)}
               </div>
               <div>
                 <h3 className="text-lg font-bold text-slate-900 mb-1">{post.author}</h3>
                 <p className="text-brand-600 font-medium text-sm mb-2">{post.authorRole || 'Contributor'}</p>
                 <p className="text-slate-600 text-sm">
                   Senior engineer and technical writer at BuiltByTe Agency. Passionate about scalable architecture and clean code.
                 </p>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
             {/* Newsletter Mini */}
             <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-bold mb-2 relative z-10">Get the newsletter</h3>
                <p className="text-slate-400 text-sm mb-4 relative z-10">Engineering insights delivered monthly.</p>
                <form className="relative z-10 space-y-3">
                  <input type="email" placeholder="Email address" className="w-full rounded-lg bg-slate-800 border-slate-700 text-white text-sm px-4 py-2" />
                  <button className="w-full rounded-lg bg-white text-slate-900 font-bold text-sm px-4 py-2 hover:bg-brand-50 transition-colors">Subscribe</button>
                </form>
             </div>

             {/* Related Posts */}
             {relatedPosts.length > 0 && (
               <div>
                 <h3 className="text-lg font-bold text-slate-900 mb-4">Related Articles</h3>
                 <div className="space-y-4">
                    {relatedPosts.map(p => (
                      <Link to={`/blog/${p.id}`} key={p.id} className="block group">
                         <div className="h-32 rounded-xl overflow-hidden mb-3">
                           <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                         </div>
                         <h4 className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-tight mb-1">
                           {p.title}
                         </h4>
                         <span className="text-xs text-slate-500">{p.date} • {p.readTime}</span>
                      </Link>
                    ))}
                 </div>
               </div>
             )}
          </div>

        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-slate-50 py-24 border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Need help with {post.category}?</h2>
           <p className="text-xl text-slate-600 mb-10">
             Our team of senior engineers can help you implement these patterns in your own systems.
           </p>
           <Link 
             to="/contact" 
             className="inline-flex items-center justify-center px-8 py-4 border border-transparent bg-slate-900 text-white font-bold rounded-full hover:bg-brand-600 transition-colors shadow-lg hover:shadow-xl"
           >
             Get in touch <ArrowRight className="ml-2 h-4 w-4" />
           </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;