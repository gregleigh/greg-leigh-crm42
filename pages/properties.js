import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Properties() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Greg Leigh Real Estate CRM - Properties</title>
        <meta name="description" content="AI-Optimized Real Estate CRM with WhatsApp Integration" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
      </Head>

      <div className={styles.appContainer}>
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
              <div className={styles.profileImage}>
                <img alt="Greg Leigh" src="/images/greg_profile.jpeg" width="60" height="60" />
              </div>
              <div className={styles.titleContainer}>
                <h1>Greg Leigh Real Estate</h1>
                <p>Professional Real Estate Services</p>
              </div>
            </div>
            <nav className={styles.navigation}>
              <ul>
                <li className={styles.navItem}>
                  <Link href="/">
                    <a><i className="fas fa-house"></i> Home</a>
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="/dashboard">
                    <a><i className="fas fa-chart-line"></i> Dashboard</a>
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="/contacts">
                    <a><i className="fas fa-address-book"></i> Contacts</a>
                  </Link>
                </li>
                <li className={`${styles.navItem} ${styles.active}`}>
                  <Link href="/properties">
                    <a><i className="fas fa-building"></i> Properties</a>
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="/marketing">
                    <a><i className="fas fa-bullhorn"></i> Marketing</a>
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="/whatsapp">
                    <a><i className="fas fa-comments"></i> WhatsApp</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        <main className={styles.mainContent}>
          <div className={styles.pageTitle}>
            <h1>Properties Management</h1>
            <p>Manage your real estate listings and property database</p>
          </div>
          
          <div className={styles.propertiesContainer}>
            <div className={styles.propertiesFilters}>
              <div className={styles.searchBox}>
                <input type="text" placeholder="Search properties..." />
                <button><i className="fas fa-search"></i></button>
              </div>
              <div className={styles.filterOptions}>
                <select>
                  <option>All Types</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Townhouse</option>
                  <option>Land</option>
                  <option>Commercial</option>
                </select>
                <select>
                  <option>All Locations</option>
                  <option>Thornlands</option>
                  <option>Raby Bay</option>
                  <option>Cleveland</option>
                  <option>Redland Bay</option>
                  <option>Holland Park</option>
                </select>
                <select>
                  <option>All Price Ranges</option>
                  <option>Under $500k</option>
                  <option>$500k - $750k</option>
                  <option>$750k - $1M</option>
                  <option>$1M - $1.5M</option>
                  <option>$1.5M+</option>
                </select>
                <button className={styles.filterButton}>Apply Filters</button>
              </div>
            </div>
            
            <div className={styles.propertiesList}>
              <div className={styles.propertyItem}>
                <div className={styles.propertyImage}>
                  <div className={styles.propertyImagePlaceholder}>
                    <span>Waterfront Home</span>
                  </div>
                </div>
                <div className={styles.propertyDetails}>
                  <h3>4 Bedroom Waterfront Home</h3>
                  <p className={styles.propertyAddress}>123 Marine Drive, Raby Bay</p>
                  <div className={styles.propertyFeatures}>
                    <span><i className="fas fa-bed"></i> 4</span>
                    <span><i className="fas fa-bath"></i> 3</span>
                    <span><i className="fas fa-car"></i> 2</span>
                    <span><i className="fas fa-ruler-combined"></i> 650m²</span>
                  </div>
                  <div className={styles.propertyTags}>
                    <span className={`${styles.tag} ${styles.waterfront}`}>Waterfront</span>
                    <span className={styles.tag}>Luxury</span>
                  </div>
                </div>
                <div className={styles.propertyPrice}>
                  <h4>$1,850,000</h4>
                  <p>Listed 3 days ago</p>
                </div>
                <div className={styles.propertyActions}>
                  <button className={`${styles.actionButton} ${styles.edit}`}><i className="fas fa-edit"></i></button>
                  <button className={`${styles.actionButton} ${styles.share}`}><i className="fas fa-share-alt"></i></button>
                  <button className={`${styles.actionButton} ${styles.delete}`}><i className="fas fa-trash"></i></button>
                </div>
              </div>
              
              <div className={styles.propertyItem}>
                <div className={styles.propertyImage}>
                  <div className={styles.propertyImagePlaceholder}>
                    <span>Family Home</span>
                  </div>
                </div>
                <div className={styles.propertyDetails}>
                  <h3>Modern Family Home</h3>
                  <p className={styles.propertyAddress}>45 Panorama Drive, Thornlands</p>
                  <div className={styles.propertyFeatures}>
                    <span><i className="fas fa-bed"></i> 4</span>
                    <span><i className="fas fa-bath"></i> 2</span>
                    <span><i className="fas fa-car"></i> 2</span>
                    <span><i className="fas fa-ruler-combined"></i> 520m²</span>
                  </div>
                  <div className={styles.propertyTags}>
                    <span className={styles.tag}>Family</span>
                    <span className={styles.tag}>Modern</span>
                  </div>
                </div>
                <div className={styles.propertyPrice}>
                  <h4>$785,000</h4>
                  <p>Listed 1 week ago</p>
                </div>
                <div className={styles.propertyActions}>
                  <button className={`${styles.actionButton} ${styles.edit}`}><i className="fas fa-edit"></i></button>
                  <button className={`${styles.actionButton} ${styles.share}`}><i className="fas fa-share-alt"></i></button>
                  <button className={`${styles.actionButton} ${styles.delete}`}><i className="fas fa-trash"></i></button>
                </div>
              </div>
              
              <div className={styles.propertyItem}>
                <div className={styles.propertyImage}>
                  <div className={styles.propertyImagePlaceholder}>
                    <span>Investment Property</span>
                  </div>
                </div>
                <div className={styles.propertyDetails}>
                  <h3>Investment Townhouse</h3>
                  <p className={styles.propertyAddress}>12/78 Shore Street, Cleveland</p>
                  <div className={styles.propertyFeatures}>
                    <span><i className="fas fa-bed"></i> 3</span>
                    <span><i className="fas fa-bath"></i> 2</span>
                    <span><i className="fas fa-car"></i> 1</span>
                    <span><i className="fas fa-ruler-combined"></i> 180m²</span>
                  </div>
                  <div className={styles.propertyTags}>
                    <span className={styles.tag}>Investment</span>
                    <span className={styles.tag}>Townhouse</span>
                  </div>
                </div>
                <div className={styles.propertyPrice}>
                  <h4>$595,000</h4>
                  <p>Listed 2 weeks ago</p>
                </div>
                <div className={styles.propertyActions}>
                  <button className={`${styles.actionButton} ${styles.edit}`}><i className="fas fa-edit"></i></button>
                  <button className={`${styles.actionButton} ${styles.share}`}><i className="fas fa-share-alt"></i></button>
                  <button className={`${styles.actionButton} ${styles.delete}`}><i className="fas fa-trash"></i></button>
                </div>
              </div>
              
              <div className={styles.propertyItem}>
                <div className={styles.propertyImage}>
                  <div className={styles.propertyImagePlaceholder}>
                    <span>Luxury Apartment</span>
                  </div>
                </div>
                <div className={styles.propertyDetails}>
                  <h3>Luxury Waterfront Apartment</h3>
                  <p className={styles.propertyAddress}>8/25 Masthead Drive, Raby Bay</p>
                  <div className={styles.propertyFeatures}>
                    <span><i className="fas fa-bed"></i> 3</span>
                    <span><i className="fas fa-bath"></i> 2</span>
                    <span><i className="fas fa-car"></i> 2</span>
                    <span><i className="fas fa-ruler-combined"></i> 210m²</span>
                  </div>
                  <div className={styles.propertyTags}>
                    <span className={`${styles.tag} ${styles.waterfront}`}>Waterfront</span>
                    <span className={styles.tag}>Luxury</span>
                  </div>
                </div>
                <div className={styles.propertyPrice}>
                  <h4>$1,250,000</h4>
                  <p>Listed 3 weeks ago</p>
                </div>
                <div className={styles.propertyActions}>
                  <button className={`${styles.actionButton} ${styles.edit}`}><i className="fas fa-edit"></i></button>
                  <button className={`${styles.actionButton} ${styles.share}`}><i className="fas fa-share-alt"></i></button>
                  <button className={`${styles.actionButton} ${styles.delete}`}><i className="fas fa-trash"></i></button>
                </div>
              </div>
            </div>
            
            <div className={styles.pagination}>
              <button className={`${styles.paginationButton} ${styles.active}`}>1</button>
              <button className={styles.paginationButton}>2</button>
              <button className={styles.paginationButton}>3</button>
              <button className={styles.paginationButton}>4</button>
              <button className={styles.paginationButton}>5</button>
              <button className={styles.paginationButton}>Next</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
