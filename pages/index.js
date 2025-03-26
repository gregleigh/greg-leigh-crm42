import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Greg Leigh Real Estate CRM</title>
        <meta name="description" content="AI-Optimized Real Estate CRM with WhatsApp Integration" />
        <link rel="icon" href="/favicon.ico" />
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
                <li className={`${styles.navItem} ${styles.active}`}>
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
            <h1>AI-Optimized Real Estate CRM</h1>
            <p>Greg Leigh's Real Estate Database System</p>
          </div>
          
          <div className={styles.statsContainer}>
            <div className={styles.statCard}>
              <div className={styles.statHeader}>
                <h3>Total Contacts</h3>
              </div>
              <div className={styles.statValue}>4,287<span className={styles.statTrendPositive}>+3.2%</span></div>
              <div className={styles.statLabel}>Total Contacts</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statHeader}>
                <h3>Active Listings</h3>
              </div>
              <div className={styles.statValue}>128<span className={styles.statTrendPositive}>+5.7%</span></div>
              <div className={styles.statLabel}>Active Listings</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statHeader}>
                <h3>WhatsApp Messages</h3>
              </div>
              <div className={styles.statValue}>842<span className={styles.statTrendPositive}>+12.4%</span></div>
              <div className={styles.statLabel}>WhatsApp Messages</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statHeader}>
                <h3>Property Viewings</h3>
              </div>
              <div className={styles.statValue}>37<span className={styles.statTrendNegative}>-2.1%</span></div>
              <div className={styles.statLabel}>Property Viewings</div>
            </div>
          </div>
          
          <div className={styles.dashboardContent}>
            <div className={styles.activityFeed}>
              <div className={styles.cardHeader}>
                <h3>Recent Activity</h3>
              </div>
              <div className={styles.activityList}>
                <div className={styles.activityItem}>
                  <div className={`${styles.activityIcon} ${styles.whatsapp}`}></div>
                  <div className={styles.activityDetails}>
                    <h4>WhatsApp Message Sent</h4>
                    <p>Property viewing confirmation sent to John Smith</p>
                  </div>
                  <div className={styles.activityTime}>10 minutes ago</div>
                </div>
                
                <div className={styles.activityItem}>
                  <div className={`${styles.activityIcon} ${styles.property}`}></div>
                  <div className={styles.activityDetails}>
                    <h4>New Property Listed</h4>
                    <p>4 bedroom waterfront home in Raby Bay</p>
                  </div>
                  <div className={styles.activityTime}>1 hour ago</div>
                </div>
                
                <div className={styles.activityItem}>
                  <div className={`${styles.activityIcon} ${styles.contact}`}></div>
                  <div className={styles.activityDetails}>
                    <h4>New Contact Added</h4>
                    <p>Sarah Johnson added to database</p>
                  </div>
                  <div className={styles.activityTime}>3 hours ago</div>
                </div>
              </div>
              <button className={styles.viewAllButton}>View All Activity</button>
            </div>
            
            <div className={styles.leadScoring}>
              <div className={styles.cardHeader}>
                <h3>Lead Scoring</h3>
              </div>
              <div className={styles.leadList}>
                <div className={styles.leadItem}>
                  <div className={`${styles.leadScore} ${styles.high}`}>92</div>
                  <div className={styles.leadDetails}>
                    <h4>David Wilson</h4>
                    <p>Looking for waterfront property in Raby Bay</p>
                    <div className={styles.leadTags}>
                      <span className={`${styles.tag} ${styles.waterfront}`}>Waterfront</span>
                      <span className={`${styles.tag} ${styles.investor}`}>Investor</span>
                    </div>
                  </div>
                  <a href="https://wa.me/0466805992" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
                    <i className="fas fa-comments"></i>
                  </a>
                </div>
                
                <div className={styles.leadItem}>
                  <div className={`${styles.leadScore} ${styles.high}`}>87</div>
                  <div className={styles.leadDetails}>
                    <h4>Jennifer Lee</h4>
                    <p>Interested in 4 bedroom family home in Thornlands</p>
                    <div className={styles.leadTags}>
                      <span className={styles.tag}>First Home</span>
                      <span className={styles.tag}>Family</span>
                    </div>
                  </div>
                  <a href="https://wa.me/0466805992" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
                    <i className="fas fa-comments"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
