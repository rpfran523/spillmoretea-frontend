import SEOHead from '../components/SEO/SEOHead';

export default function Home() {
  return (
    <>
      <SEOHead 
        title="Spill More Tea - Your Daily Tea Culture & Lifestyle Blog"
        description="Discover the world of tea culture, brewing techniques, reviews, and lifestyle content. From green tea benefits to ceremony traditions - spill more tea with us!"
        type="website"
      />
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f0fdf4',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <header style={{
          backgroundColor: '#10b981',
          color: 'white',
          padding: '2rem 0',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            margin: '0 0 1rem 0'
          }}>
            🍵 Spill More Tea
          </h1>
          <p style={{
            fontSize: '1.25rem',
            opacity: '0.9',
            margin: '0'
          }}>
            Your Daily Tea Culture & Lifestyle Blog
          </p>
        </header>
        
        <main style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>
          <section style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#065f46',
              marginBottom: '1rem'
            }}>
              Welcome to the World of Tea
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#374151',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Discover brewing techniques, explore tea culture from around the world, 
              and join our community of tea enthusiasts. From ceremonial traditions 
              to modern wellness trends - we're here to spill all the tea!
            </p>
          </section>
          
          <section style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#065f46',
                marginBottom: '1rem'
              }}>
                🌿 Tea Reviews
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                In-depth reviews of teas from around the world, 
                from premium loose leaf to everyday favorites.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#065f46',
                marginBottom: '1rem'
              }}>
                ☕ Brewing Guides
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Master the art of tea brewing with our detailed guides, 
                from traditional methods to modern techniques.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#065f46',
                marginBottom: '1rem'
              }}>
                🏮 Tea Culture
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Explore the rich history and cultural significance 
                of tea ceremonies and traditions worldwide.
              </p>
            </div>
          </section>
          
          <section style={{
            backgroundColor: 'white',
            padding: '3rem 2rem',
            borderRadius: '0.5rem',
            textAlign: 'center',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#065f46',
              marginBottom: '1rem'
            }}>
              Ready to Spill More Tea?
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              marginBottom: '2rem'
            }}>
              Join our community and stay updated with the latest tea trends, 
              brewing tips, and cultural insights.
            </p>
            <a href="/posts" style={{
              display: 'inline-block',
              backgroundColor: '#10b981',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.125rem',
              transition: 'background-color 0.2s'
            }}>
              Explore Tea Posts
            </a>
          </section>
        </main>
        
        <footer style={{
          backgroundColor: '#065f46',
          color: 'white',
          textAlign: 'center',
          padding: '2rem 0'
        }}>
          <p>&copy; 2024 Spill More Tea. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
