import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Contacts() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Greg Leigh Real Estate CRM - Contacts</title>
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
                <li className={`${styles.navItem} ${styles.active}`}>
                  <Link href="/contacts">
                    <a><i className="fas fa-address-book"></i> Contacts</a>
                  </Link>
                </li>
                <li className={styles.navItem}>
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
            <h1>Contacts Management</h1>
            <p>Manage your 4,000+ real estate contacts</p>
          </div>
          
          <div className={styles.contactsContainer}>
            <div className={styles.contactsFilters}>
              <div className={styles.searchBox}>
                <input type="text" placeholder="Search contacts..." />
                <button><i className="fas fa-search"></i></button>
              </div>
              <div className={styles.filterOptions}>
                <select>
                  <option>All Categories</option>
                  <option>Buyers</option>
                  <option>Sellers</option>
                  <option>Investors</option>
                  <option>First Home</option>
                  <option>Downsizers</option>
                </select>
                <select>
                  <option>All Locations</option>
                  <option>Thornlands</option>
                  <option>Raby Bay</option>
                  <option>Cleveland</option>
                  <option>Redland Bay</option>
                  <option>Holland Park</option>
                </select>
                <button className={styles.filterButton}>Apply Filters</button>
              </div>
            </div>
            
            <div className={styles.contactsList}>
              <div className={styles.contactItem}>
                <div className={styles.contactAvatar}>
                  <div className={styles.avatarPlaceholder}>DW</div>
                </div>
                <div className={styles.contactDetails}>
                  <h3>David Wilson</h3>
                  <p>Looking for waterfront property in Raby Bay</p>
                  <div className={styles.contactTags}>
                    <span className={`${styles.tag} ${styles.waterfront}`}>Waterfront</span>
                    <span className={`${styles.tag} ${styles.investor}`}>Investor</span>
                  </div>
                </div>
                <div className={styles.contactScore}>
                  <div className={`${styles.scoreBadge} ${styles.high}`}>92</div>
                </div>
                <div className={styles.contactActions}>
                  <a href="https://wa.me/0466805992" className={`${styles.actionButton} ${styles.whatsapp}`}><i className="fas fa-comments"></i></a>
                  <button className={`${styles.actionButton} ${styles.email}`}><i className="fas fa-envelope"></i></button>
                  <button className={`${styles.actionButton} ${styles.edit}`}><i className="fas fa-edit"></i></button>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactAvatar}>
                  <div className={styles.avatarPlaceholder}>JL</div>
                </div>
                <div className={styles.contactDetails}>
                  <h3>Jennifer Lee</h3>
                  <p>Interested in 4 bedroom family home in Thornlands</p>
                  <div className={styles.contactTags}>
                    <span className={styles.tag}>First Home</span>
                    <span className={styles.tag}>Family</span>
                  </div>
                </div>
                <div className={styles.contactScore}>
                  <div className={`${styles.scoreBadge} ${styles.high}`}>87</div>
                </div>
                <div className={styles.contactActions}>
                  <a href="https://wa.me/0466805992" className={`${styles.actionButton} ${styles.whatsapp}`}><i className="fas fa-comments"></i></a>
                  <button className={`${styles.actionButton} ${styles.email}`}><i className="fas fa-envelope"></i></button>
                  <button className={`${styles.actionButton} ${styles.edit}`}><i className="fas fa-edit"></i></button>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactAvatar}>
                  <div className={styles.avatarPlaceholder}>RT</div>
                </div>
                <div className={styles.contactDetails}>
                  <h3>Robert Taylor</h3>
                  <p>Looking for investment property under $650k</p>
                  <div className={styles.contactTags}>
                    <span className={`${styles.tag} ${styles.investor}`}>Investor</span>
                    <span className={styles.tag}>Budget Buyer</span>
                  </div>
                </div>
                <div className={styles.contactScore}>
                  <div className={`${styles.scoreBadge} ${styles.high}`}>76</div>
                </div>
                <div className={styles.contactActions}>
                  <a href="https://wa.me/0466805992" className={`${styles.actionButton} ${styles.whatsapp}`}><i className="fas fa-comments"></i></a>
                  <button className={`${styles.actionButton} ${styles.email}`}><i className="fas fa-envelope"></i></button>
                  <button className={`${styles.actionButton} ${styles.edit}`}><i className="fas fa-edit"></i></button>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactAvatar}>
                  <div className={styles.avatarPlaceholder}>AC</div>
                </div>
                <div className={styles.contactDetails}>
                  <h3>Amanda Clark</h3>
                  <p>Interested in townhouses in Cleveland</p>
                  <div className={styles.contactTags}>
                    <span className={styles.tag}>Downsizer</span>
                    <span className={styles.tag}>Cash Buyer</span>
                  </div>
                </div>
                <div className={styles.contactScore}>
                  <div className={`${styles.scoreBadge} ${styles.medium}`}>68</div>
                </div>
                <div className={styles.contactActions}>
                  <a href="https://wa.me/0466805992" className={`${styles.actionButton} ${styles.whatsapp}`}><i className="fas fa-comments"></i></a>
                  <button className={`${styles.actionButton} ${styles.email}`}><i className="fas fa-envelope"></i></button>
                  <button className={`${styles.actionButton} ${styles.edit}`}><i className="fas fa-edit"></i></button>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactAvatar}>
                  <div className={styles.avatarPlaceholder}>TB</div>
                </div>
                <div className={styles.contactDetails}>
                  <h3>Thomas Brown</h3>
                  <p>Browsing luxury properties in Redland Bay</p>
                  <div className={styles.contactTags}>
                    <span className={`${styles.tag} ${styles.waterfront}`}>Waterfront</span>
                    <span className={styles.tag}>Luxury</span>
                  </div>
                </div>
                <div className={styles.contactScore}>
                  <div className={`${styles.scoreBadge} ${styles.medium}`}>54</div>
                </div>
                <div className={styles.contactActions}>
                  <a href="https://wa.me/0466805992" className={`${styles.actionButton} ${styles.whatsapp}`}><i className="fas fa-comments"></i></a>
                  <button className={`${styles.actionButton} ${styles.email}`}><i className="fas fa-envelope"></i></button>
                  <button className={`${styles.actionButton} ${styles.edit}`}><i className="fas fa-edit"></i></button>
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
