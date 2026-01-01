// pages/ArticleSingle.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft,
  faCalendarAlt,
  faUser,
  faClock,
  faEye,
  faTag,
  faShareAlt,
  faBookmark,
  faQuoteRight,
  faChartLine,
  faBrain,
  faShieldAlt,
  faHandshake,
  faChevronRight,
  faBars,
  faPrint,
  faEnvelope,
  faTwitter,
  faLinkedin,
  faFacebook,
  faComment,
  faListOl,
  faBookOpen
} from '@fortawesome/free-solid-svg-icons';


const ArticleSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showTableOfContents, setShowTableOfContents] = useState(false);

  // Professional article data
  const articlesData = {
    3: {
      id: 3,
      title: 'AI-Solution: Guiding Towards More Ethical Products',
      subtitle: 'A Comprehensive Framework for Responsible AI Development in the Enterprise',
      excerpt: 'Exploring the ethical considerations in AI development and how to create responsible AI systems that balance innovation with accountability.',
      category: 'ETHICS & GOVERNANCE',
      author: 'Dr. James Wilson',
      authorRole: 'Chief Ethics Officer at AI-Solution',
      authorBio: 'Dr. Wilson leads the ethical AI practice at AI-Solution, with over 15 years of experience in technology ethics. He has published extensively on responsible AI and advises regulatory bodies worldwide.',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
      date: 'January 5, 2025',
      readTime: '10 min read',
      views: '1,842',
      tags: ['AI Ethics', 'Responsible AI', 'Governance', 'Regulatory Compliance', 'Algorithmic Fairness'],
      
      // Professional article structure
      content: {
        dek: 'As artificial intelligence becomes increasingly integrated into business operations, organizations face mounting pressure to develop AI systems that are not only effective but also ethically sound. This article presents a comprehensive framework for building responsible AI products.',
        
        introduction: `The rapid advancement of artificial intelligence presents both unprecedented opportunities and significant ethical challenges. Recent surveys indicate that 78% of consumers express concern about AI ethics, while 64% of business leaders admit their organizations lack comprehensive ethical guidelines for AI development. At AI-Solution, we've spent the last three years developing and refining a practical framework that addresses these concerns without stifling innovation.`,
        
        sections: [
          {
            id: 'ethical-imperative',
            title: 'The Ethical Imperative in Modern AI Development',
            subtitle: 'Why Ethical Considerations Are No Longer Optional',
            content: `The conversation around AI ethics has evolved dramatically over the past five years. What was once considered a niche academic discussion has become a mainstream business concern. Several factors have driven this shift:

**Regulatory Pressure**: The European Union's AI Act (2024) and similar legislation in the United States have established clear legal requirements for high-risk AI systems. Companies deploying AI in sectors like healthcare, finance, and employment now face substantial penalties for non-compliance.

**Consumer Expectations**: A 2024 study by the Ethical Technology Institute found that 83% of consumers are more likely to trust companies that transparently address their AI ethics policies. This represents a 42% increase from just two years ago.

**Investor Scrutiny**: ESG (Environmental, Social, and Governance) criteria now regularly include AI ethics assessments. Investment firms managing over $30 trillion in assets have incorporated AI ethics into their evaluation frameworks.

**Competitive Advantage**: Early adopters of ethical AI frameworks report 29% higher customer satisfaction and 23% lower regulatory compliance costs compared to their peers.`,
            stats: [
              { value: '83%', label: 'of consumers trust ethical AI companies more' },
              { value: '42%', label: 'increase in ethical concerns since 2022' },
              { value: '$30T', label: 'in assets considering AI ethics' }
            ]
          },
          {
            id: 'four-pillar-framework',
            title: 'The Four-Pillar Ethical Framework',
            subtitle: 'A Practical Approach to Responsible AI',
            content: `Based on our work with over 200 enterprise clients, we've developed a comprehensive framework built on four foundational pillars. Each pillar includes specific, actionable guidelines:

### 1. **Transparency & Explainability**
Effective transparency goes beyond simply documenting algorithms. It involves:
- **Model Documentation**: Comprehensive records of training data, objectives, and limitations
- **Explainability Requirements**: Systems must provide human-understandable explanations for significant decisions
- **Regular Disclosure**: Quarterly transparency reports detailing AI system performance and limitations

### 2. **Fairness & Bias Mitigation**
Our approach to fairness includes:
- **Pre-deployment Bias Audits**: Statistical analysis of potential disparate impacts across protected classes
- **Continuous Monitoring**: Real-time detection of emerging bias patterns
- **Diverse Development Teams**: Ensuring representation across gender, race, and socioeconomic backgrounds

### 3. **Privacy & Data Stewardship**
Privacy considerations extend beyond legal compliance:
- **Data Minimization**: Collecting only essential data for specific, legitimate purposes
- **Purpose Limitation**: Clear documentation of data usage intentions
- **User Control Mechanisms**: Granular consent management and data deletion capabilities

### 4. **Accountability & Governance**
Accountability requires clear structures:
- **Human Oversight**: Defined roles and responsibilities for AI system monitoring
- **Incident Response Protocols**: Established procedures for addressing ethical concerns
- **Third-Party Audits**: Regular independent assessments of ethical compliance`,
            highlight: `"Ethical AI isn't about adding constraints—it's about building better systems from the ground up. Our framework shows that responsible development actually enhances both performance and trust."`
          },
          {
            id: 'implementation-case-study',
            title: 'Implementation in Practice: The Sunderland Hospital Case Study',
            subtitle: 'Applying Ethical Principles in Healthcare AI',
            content: `Our most comprehensive implementation of this framework occurred with Sunderland Private Hospital, where we deployed an AI diagnostic system across five hospital branches. The project timeline and outcomes demonstrate the practical application of our ethical principles:

**Phase 1: Ethical Assessment (Months 1-2)**
- Conducted comprehensive risk assessment of diagnostic AI in healthcare
- Established multi-stakeholder ethics review board including clinicians, patients, and ethicists
- Developed specific ethical requirements for medical AI systems

**Phase 2: Framework Integration (Months 3-5)**
- Integrated bias detection algorithms trained on diverse medical imaging datasets
- Implemented explainability features providing confidence scores and decision rationales
- Established continuous monitoring for demographic fairness across patient populations

**Phase 3: Deployment & Monitoring (Months 6-9)**
- Gradual rollout with extensive clinician training on system capabilities and limitations
- Established quarterly ethics reviews with documented outcomes
- Implemented patient consent protocols with clear explanations of AI involvement

**Results After 12 Months:**
- **Diagnostic Accuracy**: 99.7% with no statistically significant variation across demographic groups
- **Clinician Trust**: 94% of medical staff reported confidence in AI-assisted diagnoses
- **Ethical Compliance**: Zero ethical incidents reported during the first year of operation
- **Patient Satisfaction**: 96% approval rate for AI-assisted diagnostic processes`,
            pullQuote: `"The ethical framework wasn't just compliance—it became our competitive advantage. Our patients trust us more, and our clinicians work more effectively with AI support."`
          }
        ],
        
        keyInsights: [
          'Companies with comprehensive AI ethics programs experience 35% fewer regulatory interventions',
          'Ethical AI development increases long-term system reliability by 42%',
          'Organizations that prioritize AI ethics see 29% higher employee retention in technical roles',
          'Transparent AI systems demonstrate 47% higher user adoption rates'
        ],
        
        conclusion: `The journey toward ethical AI is not a destination but a continuous process of improvement. Our experience demonstrates that ethical considerations, when integrated thoughtfully into the development lifecycle, enhance rather than hinder technological progress.

The framework presented here provides a practical starting point, but successful implementation requires ongoing commitment. As AI technologies continue to evolve, so too must our approaches to ensuring they serve humanity's best interests.

At AI-Solution, we remain committed to advancing both the capabilities and the ethical foundations of artificial intelligence. The future of AI must be not only intelligent but also responsible, transparent, and equitable.`
      },
      
      // Publication details
      publication: {
        name: 'AI-Solution Insights',
        issue: 'Volume 7, Issue 3',
        doi: '10.1002/aisol.2025.003'
      },
      
      // References
      references: [
        'European Commission. (2024). Artificial Intelligence Act: Final Text.',
        'Ethical Technology Institute. (2024). Global AI Ethics Survey: Consumer Perspectives.',
        'Wilson, J. et al. (2024). "Framework for Responsible AI Development." Journal of AI Ethics.',
        'Sunderland Private Hospital. (2024). Annual Report on AI Diagnostic Implementation.'
      ]
    }
  };

  useEffect(() => {
    setArticle(articlesData[3]);
    
    // Related articles
    setRelatedArticles([
      {
        id: 1,
        title: 'The Regulatory Landscape of AI in 2025',
        category: 'GOVERNANCE',
        readTime: '9 min read',
        excerpt: 'Understanding new AI regulations and compliance requirements across major markets.'
      },
      {
        id: 5,
        title: 'AI in Healthcare: Balancing Innovation with Patient Safety',
        category: 'HEALTHCARE',
        readTime: '14 min read',
        excerpt: 'How medical institutions are implementing AI while maintaining ethical standards.'
      },
      {
        id: 9,
        title: 'Building Trust in AI Systems: A Technical Guide',
        category: 'TECHNICAL',
        readTime: '11 min read',
        excerpt: 'Technical approaches to explainability and transparency in complex AI models.'
      }
    ]);
  }, [id]);

  const handleBookmark = () => setIsBookmarked(!isBookmarked);
  
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Header */}
      <header className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/articles" className="text-gray-700 hover:text-blue-600 transition-colors">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                All Articles
              </Link>
              <div className="hidden md:block text-sm text-gray-500">
                {article?.publication.name} • {article?.publication.issue}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button onClick={handlePrint} className="text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faPrint} />
              </button>
              <button onClick={handleBookmark} className={`p-2 ${isBookmarked ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                <FontAwesomeIcon icon={faBookmark} />
              </button>
              <button onClick={() => setShowTableOfContents(!showTableOfContents)} className="md:hidden text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout - Classic Publication Style */}
      <div className="container mx-auto px-4 max-w-6xl py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Article Content - 2/3 width */}
          <main className="lg:w-2/3">
            
            {/* Article Header */}
            <header className="mb-12">
              <div className="mb-6">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
                  {article?.category}
                </span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-gray-500">{article?.publication.issue}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                {article?.title}
              </h1>
              
              <h2 className="text-xl text-gray-600 mb-8 leading-relaxed font-serif">
                {article?.subtitle}
              </h2>
              
              {/* Author & Meta Info */}
              <div className="flex flex-wrap items-center justify-between py-6 border-y border-gray-200 mb-8">
                <div className="flex items-center space-x-4">
                  <img
                    src={article?.authorImage}
                    alt={article?.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{article?.author}</div>
                    <div className="text-sm text-gray-600">{article?.authorRole}</div>
                  </div>
                </div>
                
                <div className="mt-4 lg:mt-0 text-sm text-gray-500">
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                      {article?.date}
                    </span>
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={faClock} className="mr-2" />
                      {article?.readTime}
                    </span>
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={faEye} className="mr-2" />
                      {article?.views} views
                    </span>
                  </div>
                </div>
              </div>
            </header>
            
            {/* Article Content */}
            <article className="prose prose-lg max-w-none font-serif">
              
              {/* Dek */}
              <div className="text-xl text-gray-700 italic mb-12 leading-relaxed border-l-4 border-gray-300 pl-6 py-2">
                {article?.content.dek}
              </div>
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg leading-relaxed mb-6">
                  {article?.content.introduction}
                </p>
              </div>
              
              {/* Sections */}
              {article?.content.sections.map((section, index) => (
                <div key={section.id} className="mb-16 scroll-mt-8" id={section.id}>
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-gray-300 mr-4">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {section.title}
                        </h2>
                        {section.subtitle && (
                          <h3 className="text-lg text-gray-600 font-normal">
                            {section.subtitle}
                          </h3>
                        )}
                      </div>
                    </div>
                    
                    {/* Section Content */}
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      {section.content.split('\n\n').map((paragraph, pIndex) => {
                        if (paragraph.startsWith('###')) {
                          return (
                            <h4 key={pIndex} className="text-xl font-bold text-gray-900 mt-8 mb-4">
                              {paragraph.replace('### ', '')}
                            </h4>
                          );
                        }
                        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                          return (
                            <p key={pIndex} className="font-bold text-gray-900">
                              {paragraph.replace(/\*\*/g, '')}
                            </p>
                          );
                        }
                        return (
                          <p key={pIndex} className="leading-relaxed">
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>
                    
                    {/* Stats Grid */}
                    {section.stats && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                        {section.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="bg-gray-50 p-6 rounded-lg text-center">
                            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Pull Quote */}
                    {section.pullQuote && (
                      <div className="my-12 pl-8 border-l-4 border-blue-500">
                        <FontAwesomeIcon icon={faQuoteRight} className="text-3xl text-blue-300 mb-4" />
                        <blockquote className="text-2xl text-gray-700 italic leading-relaxed">
                          "{section.pullQuote}"
                        </blockquote>
                      </div>
                    )}
                    
                    {/* Highlight */}
                    {section.highlight && (
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                        <div className="flex">
                          <FontAwesomeIcon icon={faBrain} className="text-yellow-500 mt-1 mr-4" />
                          <div>
                            <p className="text-gray-700 leading-relaxed">{section.highlight}</p>
                            <p className="text-sm text-gray-600 mt-2">— Dr. James Wilson</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Key Insights */}
              <div className="bg-gray-50 rounded-xl p-8 my-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <FontAwesomeIcon icon={faChartLine} className="mr-3 text-blue-500" />
                  Key Research Insights
                </h3>
                <ul className="space-y-4">
                  {article?.content.keyInsights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Conclusion */}
              <div className="my-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
                  Conclusion
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-6">
                  {article?.content.conclusion.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* References */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">References</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
                  {article?.references.map((ref, index) => (
                    <li key={index} className="leading-relaxed">
                      {ref}
                    </li>
                  ))}
                </ol>
              </div>
              
              {/* DOI */}
              <div className="mt-8 text-sm text-gray-500">
                DOI: <span className="font-mono">{article?.publication.doi}</span>
              </div>
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {article?.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Social Sharing */}
           
              
            </article>
            
            {/* Author Bio */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <div className="flex items-start space-x-6">
                <img
                  src={article?.authorImage}
                  alt={article?.author}
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">About the Author</h3>
                  <h4 className="text-gray-900 font-semibold mb-1">{article?.author}</h4>
                  <p className="text-gray-600 mb-3">{article?.authorRole}</p>
                  <p className="text-gray-700">{article?.authorBio}</p>
                </div>
              </div>
            </div>
            
          </main>
          
          {/* Sidebar - 1/3 width */}
          <aside className="lg:w-1/3">
            
            {/* Table of Contents - Sticky */}
            <div className={`sticky top-8 ${showTableOfContents ? 'block' : 'hidden lg:block'}`}>
              
              {/* Table of Contents */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faListOl} className="mr-2" />
                  Contents
                </h3>
                <nav className="space-y-2">
                  <a href="#ethical-imperative" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    01. The Ethical Imperative in Modern AI Development
                  </a>
                  <a href="#four-pillar-framework" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    02. The Four-Pillar Ethical Framework
                  </a>
                  <a href="#implementation-case-study" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    03. Implementation in Practice: Case Study
                  </a>
                </nav>
              </div>
              
              {/* Publication Info */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Publication Details</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">Journal</dt>
                    <dd className="font-medium text-gray-900">{article?.publication.name}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Issue</dt>
                    <dd className="font-medium text-gray-900">{article?.publication.issue}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Publication Date</dt>
                    <dd className="font-medium text-gray-900">{article?.date}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Reading Time</dt>
                    <dd className="font-medium text-gray-900">{article?.readTime}</dd>
                  </div>
                </dl>
              </div>
              
              {/* Related Articles */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                  Recommended Reading
                </h3>
                <div className="space-y-6">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.id}
                      to={`/articles/${related.id}`}
                      className="block group"
                    >
                      <div className="border-l-2 border-transparent group-hover:border-blue-500 pl-4 transition-all">
                        <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                          {related.category}
                        </div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {related.excerpt}
                        </p>
                        <div className="text-xs text-gray-500 mt-2">
                          {related.readTime}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Newsletter CTA */}
              <div className="mt-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 text-white">
                <h3 className="font-bold text-white mb-3">Stay Informed</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Subscribe to receive expert insights on AI ethics and governance.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded text-gray-900 text-sm"
                  />
                  <button className="w-full bg-white text-gray-900 hover:bg-gray-100 py-2 rounded text-sm font-medium transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
              
            </div>
            
          </aside>
          
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 {article?.publication.name}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-600">
              <Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-600">Terms of Use</Link>
              <Link to="/contact" className="hover:text-blue-600">Contact</Link>
              <Link to="/submit-article" className="hover:text-blue-600">Submit Article</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArticleSingle;
