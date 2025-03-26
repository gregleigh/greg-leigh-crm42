import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Marketing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Greg Leigh Real Estate CRM - Marketing</title>
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
                <li className={styles.navItem}>
                  <Link href="/properties">
                    <a><i className="fas fa-building"></i> Properties</a>
                  </Link>
                </li>
                <li className={`${styles.navItem} ${styles.active}`}>
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
            <h1>Marketing Campaigns</h1>
            <p>Manage your real estate marketing campaigns and analytics</p>
          </div>
          
          <div className={styles.marketingContainer}>
            <div className={styles.marketingStats}>
              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <h3>Email Campaigns</h3>
                </div>
                <div className={styles.statValue}>24<span className={styles.statTrendPositive}>+8.2%</span></div>
                <div className={styles.statLabel}>Active Campaigns</div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <h3>Open Rate</h3>
                </div>
                <div className={styles.statValue}>32.5%<span className={styles.statTrendPositive}>+3.7%</span></div>
                <div className={styles.statLabel}>Average Open Rate</div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <h3>Click Rate</h3>
                </div>
                <div className={styles.statValue}>8.7%<span className={styles.statTrendPositive}>+1.2%</span></div>
                <div className={styles.statLabel}>Average Click Rate</div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <h3>Leads Generated</h3>
                </div>
                <div className={styles.statValue}>142<span className={styles.statTrendPositive}>+12.4%</span></div>
                <div className={styles.statLabel}>Last 30 Days</div>
              </div>
            </div>
            
            <div className={styles.marketingCampaigns}>
              <div className={styles.sectionHeader}>
                <h2>Active Campaigns</h2>
                <button className={styles.addButton}><i className="fas fa-plus"></i> New Campaign</button>
              </div>
              
              <div className={styles.campaignsList}>
                <div className={styles.campaignItem}>
                  <div className={styles.campaignIcon}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className={styles.campaignDetails}>
                    <h3>New Listings in Thornlands</h3>
                    <p>Email campaign targeting potential buyers interested in Thornlands area</p>
                    <div className={styles.campaignStats}>
                      <span><i className="fas fa-user"></i> 1,245 recipients</span>
                      <span><i className="fas fa-envelope-open"></i> 38.2% open rate</span>
                      <span><i className="fas fa-mouse-pointer"></i> 12.5% click rate</span>
                    </div>
                  </div>
                  <div className={styles.campaignStatus}>
                    <span className={`${styles.statusBadge} ${styles.active}`}>Active</span>
                    <p>Sent 2 days ago</p>
                  </div>
                  <div className={styles.campaignActions}>
                    <button className={`${styles.actionButton} ${styles.view}`}><i className="fas fa-eye"></i></button>
                    <button className={`${styles.actionButton} ${styles.edit}`}><i className="fas fa-edit"></i></button>
                    <button className={`${styles.actionButton} ${styles.pause}`}><i className="fas fa-pause"></i></button>
                  </div>
                </div>
                
                <div className={styles.campaignItem}>
                  <div className={styles.campaignIcon}>
                    <i className="fas fa-comments"></i>
                  </div>
                  <div className={styles.campaignDetails}>
                    <h3>Waterfront Property Alert</h3>
                    <p>WhatsApp campaign for high-value clients interested in waterfront properties</p>
                    <div className={styles.campaignStats}>
                      <span><i className="fas fa-user"></i> 87 recipients</span>
                      <span><i className="fas fa-envelope-open"></i> 92.5% open rate</span>
                      <span><i className="fas fa-mouse-pointer"></i> 45.2% response rate</span>
                    </div>
                  </div>
                  <div className={styles.campaignStatus}>
                    <span className={`${styles.statusBadge} ${styles.active}`}>Active</span>
                    <p>Sent 1 week ago</p>
                  </div>
                  <div className={styles.campaignActions}>
                    <button className={`${styles.actionButton} ${styles.view}`}><i className="fas fa-eye"></i></button>
                    <button className={`${styles.actionButton} ${styles.edit}`}><i className="fas fa-edit"></i></button>
                    <button className={`${styles.actionButton} ${styles.pause}`}><i className="fas fa-pause"></i></button>
                  </div>
                </div>
                
                <div className={styles.campaignItem}>
                  <div className={styles.campaignIcon}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className={styles.campaignDetails}>
                    <h3>Market Update Q1 2025</h3>
                    <p>Quarterly market update for all clients in database</p>
                    <div className={styles.campaignStats}>
                      <span><i className="fas fa-user"></i> 4,287 recipients</span>
                      <span><i className="fas fa-envelope-open"></i> 28.7% open rate</span>
                      <span><i className="fas fa-mouse-pointer"></i> 6.3% click rate</span>
                    </div>
                  </div>
                  <div className={styles.campaignStatus}>
                    <span className={`${styles.statusBadge} ${styles.active}`}>Active</span>
                    <p>Sent 2 weeks ago</p>
                  </div>
                  <div className={styles.campaignActions}>
                    <button className={`${styles.actionButton} ${styles.view}`}><i className="fas fa-eye"></i></button>
                    <button className={`${styles.actionButton} ${styles.edit}`}><i className="fas fa-edit"></i></button>
                    <button className={`${styles.actionButton} ${styles.pause}`}><i className="fas fa-pause"></i></button>
                  </div>
                </div>
                
                <div className={styles.campaignItem}>
                  <div className={styles.campaignIcon}>
                    <i className="fas fa-comments"></i>
                  </div>
                  <div className={styles.campaignDetails}>
                    <h3>First Home Buyer Workshop</h3>
                    <p>WhatsApp invitation for upcoming first home buyer workshop</p>
                    <div className={styles.campaignStats}>
                      <span><i className="fas fa-user"></i> 156 recipients</span>
                      <span><i className="fas fa-envelope-open"></i> 85.3% open rate</span>
                      <span><i className="fas fa-mouse-pointer"></i> 32.1% response rate</span>
                    </div>
                  </div>
                  <div className={styles.campaignStatus}>
                    <span className={`${styles.statusBadge} ${styles.scheduled}`}>Scheduled</span>
                    <p>Sending tomorrow</p>
                  </div>
                  <div className={styles.campaignActions}>
                    <button className={`${styles.actionButton} ${styles.view}`}><i className="fas fa-eye"></i></button>
                    <button className={`${styles.actionButton} ${styles.edit}`}><i className="fas fa-edit"></i></button>
                    <button className={`${styles.actionButton} ${styles.cancel}`}><i className="fas fa-times"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
