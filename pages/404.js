import SEOHead from '../components/SEO/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead 
        title="Page Not Found - Spill More Tea"
        description="The page you're looking for doesn't exist. Explore our latest tea content and lifestyle articles."
      />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9fafb',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{
          maxWidth: '28rem',
          width: '100%',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <h1 style={{
            fontSize: '9rem',
            fontWeight: 'bold',
            color: '#e5e7eb',
            margin: '0'
          }}>404</h1>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>Page Not Found</h2>
          <p style={{
            color: '#6b7280',
            marginBottom: '2rem'
          }}>
            The page you're looking for doesn't exist. Here are some helpful links:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="/" style={{
              display: 'block',
              backgroundColor: '#10b981',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s'
            }}>
              Go Home
            </a>
            <a href="/posts" style={{
              display: 'block',
              backgroundColor: '#e5e7eb',
              color: '#1f2937',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s'
            }}>
              Browse Tea Posts
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
