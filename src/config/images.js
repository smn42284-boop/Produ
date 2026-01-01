// Simple version to get you started
const S3_BASE_URL = 'https://aisolution-website-smn.s3.eu-north-1.amazonaws.com';

export const imagePaths = {
  // Products
  products: {
    aiAnalytics: `${S3_BASE_URL}/products/ai-analytics-dashboard.jpg`,
    one: `${S3_BASE_URL}/products/one.jpg`,
    two: `${S3_BASE_URL}/products/two.jpeg`,
    three: `${S3_BASE_URL}/products/three.png`,
    four: `${S3_BASE_URL}/products/four.jpeg`,
    five: `${S3_BASE_URL}/products/five.jpeg`,
    six: `${S3_BASE_URL}/products/six.jpeg`,
    seven: `${S3_BASE_URL}/products/seven.webp`,
    eight: `${S3_BASE_URL}/products/eight.jpg`,
    nine :`${S3_BASE_URL}/products/nine.jpg`,
    ten: `${S3_BASE_URL}/products/ten.jpg`,
    eleven: `${S3_BASE_URL}/products/eleven.jpeg`,
  },
  
  team: {
    sarah: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahChen&background=4169E1',
    michael: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MichaelRodriguez&background=4169E1',
    james: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JamesWilson&background=4169E1',
    lisa: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LisaThompson&background=4169E1',
  },
  
  // Events - Using Unsplash as placeholder
  events: {
    one: `${S3_BASE_URL}/events/one.jpeg`,
   two: `${S3_BASE_URL}/events/two.png`,
    three: `${S3_BASE_URL}/events/three.jpg`,
     four: `${S3_BASE_URL}/events/four.jpeg`,
     five: `${S3_BASE_URL}/events/five.avif`,
     six: `${S3_BASE_URL}/events/six.jpg`,
     seven:`${S3_BASE_URL}/events/seven.jpg`,
     eight: `${S3_BASE_URL}/events/eight.webp`,
     nine: `${S3_BASE_URL}/events/nine.jpg`,
     ten: `${S3_BASE_URL}/events/ten.webp`,
     eleven: `${S3_BASE_URL}/events/eleven.jpeg`,
     twelve: `${S3_BASE_URL}/events/twelve.webp`,
     thirteen: `${S3_BASE_URL}/events/thirteen.jpg`,
     fourteen: `${S3_BASE_URL}/events/fourteen.jpeg`,
     fifteen: `${S3_BASE_URL}/events/fiftenn.webp`,
     sixteen: `${S3_BASE_URL}/events/sixteen.jpeg`,
     seventeen: `${S3_BASE_URL}/events/seventeen.webp`,
     eighteen: `${S3_BASE_URL}/events/eighteen.jpeg`,
     nineteen: `${S3_BASE_URL}/events/nineteen.webp`,
     twenty: `${S3_BASE_URL}/events/healthcare-analytics.webp`,
     tone: `${S3_BASE_URL}/events/tone.jpeg`,
     ttwo: `${S3_BASE_URL}/events/ttwo.jpeg`,
     tthree: `${S3_BASE_URL}/events/tthree.webp`,
     tfour: `${S3_BASE_URL}/events/tfour.jpeg`,
     tfive: `${S3_BASE_URL}/events/ffive.jpg`,
     tsix: `${S3_BASE_URL}/events/tsix.webp`,
     tseven: `${S3_BASE_URL}/events/tseven.jpeg`,
     teight: `${S3_BASE_URL}/events/teight.jpg`

  },
  
  // Articles - Using Unsplash
  articles: {
    one: `${S3_BASE_URL}/articles/aone.webp`,
    two: `${S3_BASE_URL}/articles/two.webp`,
    three: `${S3_BASE_URL}/articles/three.jpg`,
     four: `${S3_BASE_URL}/articles/four.webp`,
     five: `${S3_BASE_URL}/articles/five.webp`,
     six: `${S3_BASE_URL}/articles/six.jpg`,
     seven:`${S3_BASE_URL}/articles/seven.webp`,
     eight: `${S3_BASE_URL}/articles/eight.jpg`,
     nine: `${S3_BASE_URL}/articles/nine.png`,
     ten: `${S3_BASE_URL}/articles/ten.jpg`,
     eleven: `${S3_BASE_URL}/articles/eleven.jpg`,
     twelve: `${S3_BASE_URL}/articles/twelve.png`,
  },
  industries: {
    one: `${S3_BASE_URL}/industries/one.jpeg`,
    two: `${S3_BASE_URL}/industries/two.avif`,
    three: `${S3_BASE_URL}/industries/three.jpg`,
     four: `${S3_BASE_URL}/industries/four.webp`,
     five: `${S3_BASE_URL}/industries/five.jpg`,
  },
  people:{
    sarah:  `${S3_BASE_URL}/people/sarah.jpeg`,
    micheal:  `${S3_BASE_URL}/people/micheal.jpeg`,
    james:  `${S3_BASE_URL}/people/james.avif`,
    lisa:  `${S3_BASE_URL}/people/lisa.avif`,
    david:  `${S3_BASE_URL}/people/david.jpeg`,
    emma:  `${S3_BASE_URL}/people/emma.jpg`,
    page: `${S3_BASE_URL}/people/page.webp`,
},
  
  // Company
  company: {
    logo: '/images/logo.png', // Keep local logo
    heroBg: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=2000&h=800&fit=crop',
  },
};

// Fallback emojis
export const fallbackImages = {
  product: '📊',
  team: '👤',
  event: '📅',
  article: '📝',
  default: '🖼️',
};