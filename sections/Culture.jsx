import React from 'react';
import './Culture.css';

const Culture = () => {
  return (
    <div className="culture-page">
      {/* Hero Section */}
      <section 
        className="culture-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/culture.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="culture-hero-content">
          <h1 className="culture-title">Sikkimese Culture</h1>
          <p className="culture-subtitle">A Tapestry of Traditions, Faith, and Harmony</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="culture-content-section">
        <div className="container">
          <div className="culture-grid">
            <div className="culture-text-content">
              <h2>Rich Cultural Heritage of Sikkim</h2>
              
              <p>
                Nestled in the Eastern Himalayas, Sikkim boasts a cultural heritage as diverse and 
                magnificent as its breathtaking landscapes. The culture of Sikkim is a beautiful 
                amalgamation of its three main ethnic communities - the Lepchas, Bhutias, and Nepalis, 
                each contributing unique traditions, languages, and customs that create the vibrant 
                tapestry of Sikkimese identity.
              </p>

              <h3>Ethnic Diversity and Harmony</h3>
              <p>
                The indigenous Lepchas, believed to be the original inhabitants of Sikkim, have a 
                profound connection with nature, evident in their animistic beliefs and rich oral 
                traditions. The Bhutias, who migrated from Tibet, brought with them Tibetan Buddhism, 
                which became the predominant religion and significantly influenced Sikkim's spiritual 
                landscape. The Nepali community, arriving later, contributed their Hindu traditions, 
                agricultural practices, and vibrant festivals, creating a unique cultural synthesis 
                that defines modern Sikkim.
              </p>

              <h3>Religious Practices and Spirituality</h3>
              <p>
                Sikkim is a living example of religious harmony where Buddhism and Hinduism coexist 
                peacefully. The state is dotted with ancient monasteries (gompas) that serve as centers 
                of Buddhist learning and spiritual practice. Rumtek Monastery, one of the most important 
                seats of the Kagyupa sect, and Pemayangtse Monastery, among the oldest in Sikkim, stand 
                as architectural marvels and spiritual sanctuaries. Hindu temples dedicated to various 
                deities coexist with these Buddhist institutions, reflecting the state's secular character.
              </p>

              <h3>Festivals and Celebrations</h3>
              <p>
                The cultural calendar of Sikkim is marked by numerous festivals celebrated with great 
                enthusiasm. Losar (Tibetan New Year), Saga Dawa (commemorating Buddha's birth, 
                enlightenment, and parinirvana), and Dasain (Hindu festival) are celebrated with equal 
                fervor. Traditional dances like the mask dance (Cham) performed during religious festivals 
                are not just artistic expressions but spiritual offerings, believed to ward off evil 
                spirits and bring blessings to the community.
              </p>

              <h3>Traditional Arts and Crafts</h3>
              <p>
                Sikkimese craftsmanship reflects the region's cultural richness. Thangka painting 
                (religious scroll paintings), wood carving, carpet weaving, and handloom products 
                showcase exceptional skill and artistic sensibility. The distinctive Sikkimese 
                bamboo craft, practiced mainly by Lepcha artisans, produces utilitarian and decorative 
                items that demonstrate sustainable use of natural resources.
              </p>

              <h3>Culinary Traditions</h3>
              <p>
                Sikkimese cuisine mirrors its cultural diversity, blending Tibetan, Nepali, and Lepcha 
                influences. Staples include momos (dumplings), thukpa (noodle soup), gundruk (fermented 
                leafy greens), and traditional beverages like chhang (millet beer). The cuisine emphasizes 
                locally sourced ingredients and traditional cooking methods that have been preserved 
                through generations.
              </p>

              <h3>Preservation and Modernization</h3>
              <p>
                Despite modernization, Sikkim has successfully preserved its cultural heritage through 
                community initiatives and government support. Traditional architecture, seen in the 
                design of monasteries and homes, continues to influence contemporary building styles. 
                The younger generation is increasingly engaged in learning traditional arts, music, and 
                dances, ensuring that Sikkim's rich cultural legacy continues to thrive in the modern era.
              </p>

              <div className="culture-highlights">
                <h3>Cultural Highlights</h3>
                <ul>
                  <li>Three main ethnic communities: Lepchas, Bhutias, and Nepalis</li>
                  <li>Peaceful coexistence of Buddhism and Hinduism</li>
                  <li>Ancient monasteries with priceless religious artifacts</li>
                  <li>Vibrant festivals celebrated throughout the year</li>
                  <li>Rich tradition of handicrafts and performing arts</li>
                  <li>Unique culinary heritage blending multiple influences</li>
                </ul>
              </div>
            </div>

            <div className="culture-visual-content">
              <div className="culture-image-card">
                <img src="/images/losar.jpg" alt="Traditional Sikkimese Dance" />
                <p>Traditional Cham dance performed during religious festivals</p>
              </div>
              
              <div className="culture-image-card">
                <img src="/images/rumtek-monastery.jpg" alt="Sikkimese Monastery" />
                <p>Ancient monasteries dot the Himalayan landscape</p>
              </div>
              
              <div className="culture-image-card">
                <img src="/images/tsongmo.jpg" alt="Sikkimese Handicrafts" />
                <p>Traditional thangka paintings and handicrafts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Culture;
