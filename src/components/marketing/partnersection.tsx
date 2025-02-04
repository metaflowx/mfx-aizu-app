const PartnersSection: React.FC = () => {
    const partners = [
      { name: 'Cloudflare', logo: '/path-to-cloudflare-logo.png' },
      { name: 'CoinStats', logo: '/path-to-coinstats-logo.png' },
    ];
  
    return (
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Our Partners</h2>
          <div className="flex justify-center space-x-8 mt-8">
            {partners.map((partner, index) => (
              <img
                key={index}
                src={partner.logo}
                alt={partner.name}
                className="h-12"
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PartnersSection;
  