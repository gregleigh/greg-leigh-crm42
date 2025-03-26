import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function WhatsApp() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Greg Leigh Real Estate CRM - WhatsApp</title>
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
                <li className={styles.navItem}>
                  <Link href="/marketing">
                    <a><i className="fas fa-bullhorn"></i> Marketing</a>
                  </Link>
                </li>
                <li className={`${styles.navItem} ${styles.active}`}>
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
            <h1>WhatsApp Integration</h1>
            <p>Manage your WhatsApp Business communications</p>
          </div>
          
          <div className={styles.whatsappContainer}>
            <div className={styles.whatsappStats}>
              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <h3>Total Messages</h3>
                </div>
                <div className={styles.statValue}>842<span className={styles.statTrendPositive}>+12.4%</span></div>
                <div className={styles.statLabel}>Last 30 Days</div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <h3>Response Rate</h3>
                </div>
                <div className={styles.statValue}>94.2%<span className={styles.statTrendPositive}>+2.1%</span></div>
                <div className={styles.statLabel}>Average Response Rate</div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <h3>Response Time</h3>
                </div>
                <div className={styles.statValue}>8.5m<span className={styles.statTrendNegative}>+0.7m</span></div>
                <div className={styles.statLabel}>Average Response Time</div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <h3>Active Conversations</h3>
                </div>
                <div className={styles.statValue}>37<span className={styles.statTrendPositive}>+5</span></div>
                <div className={styles.statLabel}>Current Active Chats</div>
              </div>
            </div>
            
            <div className={styles.whatsappInterface}>
              <div className={styles.chatSidebar}>
                <div className={styles.searchBox}>
                  <input type="text" placeholder="Search contacts..." />
                  <button><i className="fas fa-search"></i></button>
                </div>
                
                <div className={styles.chatList}>
                  <div className={`${styles.chatItem} ${styles.active}`}>
                    <div className={styles.chatAvatar}>
                      <div className={styles.avatarPlaceholder}>DW</div>
                    </div>
                    <div className={styles.chatInfo}>
                      <div className={styles.chatHeader}>
                        <h4>David Wilson</h4>
                        <span className={styles.chatTime}>10:42 AM</span>
                      </div>
                      <div className={styles.chatPreview}>
                        <p>Thanks for sending the property details...</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.chatItem}>
                    <div className={styles.chatAvatar}>
                      <div className={styles.avatarPlaceholder}>JL</div>
                    </div>
                    <div className={styles.chatInfo}>
                      <div className={styles.chatHeader}>
                        <h4>Jennifer Lee</h4>
                        <span className={styles.chatTime}>Yesterday</span>
                      </div>
                      <div className={styles.chatPreview}>
                        <p>Is the property at 45 Panorama Drive still...</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.chatItem}>
                    <div className={styles.chatAvatar}>
                      <div className={styles.avatarPlaceholder}>RT</div>
                    </div>
                    <div className={styles.chatInfo}>
                      <div className={styles.chatHeader}>
                        <h4>Robert Taylor</h4>
                        <span className={styles.chatTime}>Yesterday</span>
                      </div>
                      <div className={styles.chatPreview}>
                        <p>I'm interested in scheduling a viewing for...</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.chatItem}>
                    <div className={styles.chatAvatar}>
                      <div className={styles.avatarPlaceholder}>AC</div>
                    </div>
                    <div className={styles.chatInfo}>
                      <div className={styles.chatHeader}>
                        <h4>Amanda Clark</h4>
                        <span className={styles.chatTime}>2 days ago</span>
                      </div>
                      <div className={styles.chatPreview}>
                        <p>Do you have any new townhouses in Cleveland?</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.chatItem}>
                    <div className={styles.chatAvatar}>
                      <div className={styles.avatarPlaceholder}>TB</div>
                    </div>
                    <div className={styles.chatInfo}>
                      <div className={styles.chatHeader}>
                        <h4>Thomas Brown</h4>
                        <span className={styles.chatTime}>3 days ago</span>
                      </div>
                      <div className={styles.chatPreview}>
                        <p>What's the current market value of waterfront...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.chatMain}>
                <div className={styles.chatHeader}>
                  <div className={styles.chatContact}>
                    <div className={styles.contactAvatar}>
                      <div className={styles.avatarPlaceholder}>DW</div>
                    </div>
                    <div className={styles.contactInfo}>
                      <h3>David Wilson</h3>
                      <p>Last active: 5 minutes ago</p>
                    </div>
                  </div>
                  <div className={styles.chatActions}>
                    <button className={styles.actionButton}><i className="fas fa-phone"></i></button>
                    <button className={styles.actionButton}><i className="fas fa-video"></i></button>
                    <button className={styles.actionButton}><i className="fas fa-info-circle"></i></button>
                  </div>
                </div>
                
                <div className={styles.chatMessages}>
                  <div className={`${styles.messageItem} ${styles.received}`}>
                    <div className={styles.messageContent}>
                      <p>Hi Greg, I'm interested in waterfront properties in Raby Bay. Do you have anything available at the moment?</p>
                    </div>
                    <div className={styles.messageTime}>10:15 AM</div>
                  </div>
                  
                  <div className={`${styles.messageItem} ${styles.sent}`}>
                    <div className={styles.messageContent}>
                      <p>Good morning David! Yes, I have a few waterfront properties in Raby Bay that might interest you. Are you looking for a specific size or price range?</p>
                    </div>
                    <div className={styles.messageTime}>10:18 AM</div>
                  </div>
                  
                  <div className={`${styles.messageItem} ${styles.received}`}>
                    <div className={styles.messageContent}>
                      <p>I'm looking for something around 4 bedrooms, with a budget of up to $2 million.</p>
                    </div>
                    <div className={styles.messageTime}>10:22 AM</div>
                  </div>
                  
                  <div className={`${styles.messageItem} ${styles.sent}`}>
                    <div className={styles.messageContent}>
                      <p>Perfect! I have a beautiful 4 bedroom waterfront home at 123 Marine Drive that just came on the market. It's listed at $1.85 million. Would you like me to send you the details?</p>
                    </div>
                    <div className={styles.messageTime}>10:25 AM</div>
                  </div>
                  
                  <div className={`${styles.messageItem} ${styles.received}`}>
                    <div className={styles.messageContent}>
                      <p>Yes, please send me the details. Is it possible to arrange a viewing this weekend?</p>
                    </div>
                    <div className={styles.messageTime}>10:30 AM</div>
                  </div>
                  
                  <div className={`${styles.messageItem} ${styles.sent}`}>
                    <div className={styles.messageContent}>
                      <p>I've just sent you the property details via email. And yes, we can definitely arrange a viewing this weekend. How does Saturday at 2 PM sound?</p>
                    </div>
                    <div className={styles.messageTime}>10:35 AM</div>
                  </div>
                  
                  <div className={`${styles.messageItem} ${styles.received}`}>
                    <div className={styles.messageContent}>
                      <p>Thanks for sending the property details. Saturday at 2 PM works perfectly for me. I'll see you there!</p>
                    </div>
                    <div className={styles.messageTime}>10:42 AM</div>
                  </div>
                </div>
                
                <div className={styles.chatInput}>
                  <button className={styles.attachButton}><i className="fas fa-paperclip"></i></button>
                  <input type="text" placeholder="Type a message..." />
                  <button className={styles.sendButton}><i className="fas fa-paper-plane"></i></button>
                </div>
              </div>
              
              <div className={styles.chatDetails}>
                <div className={styles.detailsHeader}>
                  <h3>Contact Details</h3>
                </div>
                
                <div className={styles.contactProfile}>
                  <div className={styles.profileAvatar}>
                    <div className={styles.avatarPlaceholder}>DW</div>
                  </div>
                  <h3>David Wilson</h3>
                  <p>+61 412 345 678</p>
                  <div className={styles.leadScore}>
                    <div className={`${styles.scoreBadge} ${styles.high}`}>92</div>
                    <span>Lead Score</span>
                  </div>
                </div>
                
                <div className={styles.contactNotes}>
                  <h4>Notes</h4>
                  <p>Looking for waterfront property in Raby Bay</p>
                  <p>Budget: Up to $2 million</p>
                  <p>Preferences: 4 bedrooms, water views, modern style</p>
                  <p>Viewing scheduled: Saturday, 2 PM at 123 Marine Drive</p>
                </div>
                
                <div className={styles.contactProperties}>
                  <h4>Interested Properties</h4>
                  <div className={styles.propertyInterest}>
                    <p>123 Marine Drive, Raby Bay</p>
                    <span>High Interest</span>
                  </div>
                  <div className={styles.propertyInterest}>
                    <p>8/25 Masthead Drive, Raby Bay</p>
                    <span>Medium Interest</span>
                  </div>
                </div>
                
                <div className={styles.contactActions}>
                  <button className={styles.actionButton}><i className="fas fa-edit"></i> Edit Contact</button>
                  <button className={styles.actionButton}><i className="fas fa-calendar"></i> Schedule Follow-up</button>
                  <button className={styles.actionButton}><i className="fas fa-file-alt"></i> Create Proposal</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
