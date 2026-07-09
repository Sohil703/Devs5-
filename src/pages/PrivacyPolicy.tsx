import { motion } from "framer-motion";
import { 
  Shield, 
  Clock, 
  Mail, 
  Phone, 
  Lock, 
  Users, 
  Link2, 
  RefreshCw, 
  Trash2, 
  Globe, 
  Eye, 
  CheckCircle2, 
  Cookie, 
  User, 
  HelpCircle, 
  BookOpen,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background antialiased selection:bg-primary/20 selection:text-primary pt-24">
      <Navbar />

      {/* Hero section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image with Radial Mask & Grayscale Effect */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/team-photo.jpg"
            alt="S5 Web Devs Team Background"
            className="w-full h-full object-cover opacity-25 dark:opacity-[0.12] filter grayscale contrast-115 transition-opacity duration-700"
          />
          {/* Gradients to blend image edges with the page background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,hsl(var(--background))_80%)] z-20" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider"
            >
              <Shield size={14} className="text-primary" />
              Legal Agreement
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold leading-tight animate-fade-in"
            >
              Privacy Policy & <br />
              <span className="text-gradient">Data Protection Standards</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light"
            >
              Learn how we securely collect, use, and process your personal data in accordance with modern security practices.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="py-16 md:py-24 border-t border-border/40 bg-muted/10">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative">
          
          {/* Back button */}
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors bg-glass px-4 py-2 rounded-xl border border-border"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-glass p-8 md:p-12 rounded-3xl border border-border/80 shadow-xl space-y-8"
          >
            <div className="border-b border-border pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Privacy Policy
                </h2>
                <p className="text-xs text-muted-foreground mt-1">Last updated: July 08, 2026</p>
              </div>
              <div className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold uppercase tracking-wider">
                Official Document
              </div>
            </div>

            <div className="space-y-6 text-sm text-muted-foreground/90 leading-relaxed">
              <p>
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              <p>
                We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>

              {/* SECTION: Interpretation and Definitions */}
              <div className="pt-4 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <BookOpen size={20} className="text-primary" />
                  Interpretation and Definitions
                </h2>
                
                <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2 pt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Interpretation
                </h3>
                <p className="pl-4">
                  The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>

                <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2 pt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Definitions
                </h3>
                <p className="pl-4">For the purposes of this Privacy Policy:</p>
                <ul className="list-disc list-inside space-y-3 pl-6">
                  <li>
                    <strong className="text-foreground">Account</strong> means a unique account created for You to access our Service or parts of our Service.
                  </li>
                  <li>
                    <strong className="text-foreground">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                  </li>
                  <li>
                    <strong className="text-foreground">Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Privacy Policy) refers to CCH Solution, Ahmedabad, Gujarat, India 380001.
                  </li>
                  <li>
                    <strong className="text-foreground">Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
                  </li>
                  <li>
                    <strong className="text-foreground">Country</strong> refers to: Gujarat, India
                  </li>
                  <li>
                    <strong className="text-foreground">Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.
                  </li>
                  <li>
                    <strong className="text-foreground">Personal Data</strong> (or &quot;Personal Information&quot;) is any information that relates to an identified or identifiable individual.
                    <p className="mt-1 pl-4 text-xs text-muted-foreground/80">We use &quot;Personal Data&quot; and &quot;Personal Information&quot; interchangeably unless a law uses a specific term.</p>
                  </li>
                  <li>
                    <strong className="text-foreground">Service</strong> refers to the Website.
                  </li>
                  <li>
                    <strong className="text-foreground">Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
                  </li>
                  <li>
                    <strong className="text-foreground">Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                  </li>
                  <li>
                    <strong className="text-foreground">Website</strong> refers to CCH Solution, accessible from{" "}
                    <a href="https://chsolution.com/" rel="external nofollow noopener" target="_blank" className="text-primary hover:underline font-medium">
                      https://chsolution.com/
                    </a>.
                  </li>
                  <li>
                    <strong className="text-foreground">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                  </li>
                </ul>
              </div>

              {/* SECTION: Collecting and Using Your Personal Data */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <User size={20} className="text-primary" />
                  Collecting and Using Your Personal Data
                </h2>

                <h3 className="font-display text-base font-semibold text-foreground pt-2 flex items-center gap-2">
                  <HelpCircle size={16} className="text-primary" />
                  Types of Data Collected
                </h3>
                
                <div className="pl-4 space-y-3">
                  <h4 className="font-display font-semibold text-foreground flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Personal Data
                  </h4>
                  <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                  <ul className="list-disc list-inside space-y-1 pl-4 text-xs">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                  </ul>
                </div>

                <div className="pl-4 space-y-3 pt-2">
                  <h4 className="font-display font-semibold text-foreground flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Usage Data
                  </h4>
                  <p>Usage Data is collected automatically when using the Service.</p>
                  <p>
                    Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                  </p>
                  <p>
                    When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device's unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                  </p>
                  <p>
                    We may also collect information that Your browser sends whenever You visit Our Service or when You access the Service by or through a mobile device.
                  </p>
                </div>

                <div className="pl-4 space-y-3 pt-2">
                  <h4 className="font-display font-semibold text-foreground flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Tracking Technologies and Cookies
                  </h4>
                  <p>
                    We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies We use include beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4 text-xs">
                    <li>
                      <strong className="text-foreground">Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.
                    </li>
                    <li>
                      <strong className="text-foreground">Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                    </li>
                  </ul>
                  <p>
                    Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
                  </p>
                  <p>
                    Where required by law, we use non-essential cookies (such as analytics, advertising, and remarketing cookies) only with Your consent. You can withdraw or change Your consent at any time using Our cookie preferences tool (if available) or through Your browser/device settings. Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal.
                  </p>
                  
                  <p className="pt-2">We use both Session and Persistent Cookies for the purposes set out below:</p>
                  <div className="grid grid-cols-1 gap-4 pt-2">
                    <div className="bg-muted/30 p-5 rounded-2xl border border-border/50">
                      <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                        <Cookie size={16} className="text-primary" />
                        Necessary / Essential Cookies
                      </div>
                      <div className="text-xs text-muted-foreground/80 space-y-1 mb-3">
                        <p><span className="font-semibold text-foreground">Type:</span> Session Cookies</p>
                        <p><span className="font-semibold text-foreground">Administered by:</span> Us</p>
                      </div>
                      <p className="text-xs">
                        Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                      </p>
                    </div>

                    <div className="bg-muted/30 p-5 rounded-2xl border border-border/50">
                      <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                        <Cookie size={16} className="text-primary" />
                        Cookies Policy / Notice Acceptance Cookies
                      </div>
                      <div className="text-xs text-muted-foreground/80 space-y-1 mb-3">
                        <p><span className="font-semibold text-foreground">Type:</span> Persistent Cookies</p>
                        <p><span className="font-semibold text-foreground">Administered by:</span> Us</p>
                      </div>
                      <p className="text-xs">
                        Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
                      </p>
                    </div>

                    <div className="bg-muted/30 p-5 rounded-2xl border border-border/50">
                      <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                        <Cookie size={16} className="text-primary" />
                        Functionality Cookies
                      </div>
                      <div className="text-xs text-muted-foreground/80 space-y-1 mb-3">
                        <p><span className="font-semibold text-foreground">Type:</span> Persistent Cookies</p>
                        <p><span className="font-semibold text-foreground">Administered by:</span> Us</p>
                      </div>
                      <p className="text-xs">
                        Purpose: These Cookies allow Us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Use of Your Personal Data */}
              <div className="pt-6 space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-primary" />
                  Use of Your Personal Data
                </h3>
                <p>The Company may use Personal Data for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    <strong className="text-foreground">To provide and maintain our Service</strong>, including to monitor the usage of our Service.
                  </li>
                  <li>
                    <strong className="text-foreground">To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
                  </li>
                  <li>
                    <strong className="text-foreground">For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
                  </li>
                  <li>
                    <strong className="text-foreground">To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
                  </li>
                  <li>
                    <strong className="text-foreground">To provide You</strong> with news, special offers, and general information about other goods, services and events which We offer that are similar to those that you have already purchased or inquired about unless You have opted not to receive such information.
                  </li>
                  <li>
                    <strong className="text-foreground">To manage Your requests:</strong> To attend and manage Your requests to Us.
                  </li>
                  <li>
                    <strong className="text-foreground">For business transfers:</strong> We may use Your Personal Data to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
                  </li>
                  <li>
                    <strong className="text-foreground">For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
                  </li>
                </ul>

                <p className="pt-2">We may share Your Personal Data in the following situations:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    <strong className="text-foreground">With Service Providers:</strong> We may share Your Personal Data with Service Providers to monitor and analyze the use of our Service, to contact You.
                  </li>
                  <li>
                    <strong className="text-foreground">For business transfers:</strong> We may share or transfer Your Personal Data in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
                  </li>
                  <li>
                    <strong className="text-foreground">With Affiliates:</strong> We may share Your Personal Data with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
                  </li>
                  <li>
                    <strong className="text-foreground">With business partners:</strong> We may share Your Personal Data with Our business partners to offer You certain products, services or promotions.
                  </li>
                  <li>
                    <strong className="text-foreground">With other users:</strong> If Our Service offers public areas, when You share Personal Data or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
                  </li>
                  <li>
                    <strong className="text-foreground">With Your consent:</strong> We may disclose Your Personal Data for any other purpose with Your consent.
                  </li>
                </ul>
              </div>

              {/* SECTION: Retention of Your Personal Data */}
              <div className="pt-6 space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  Retention of Your Personal Data
                </h3>
                <p>
                  The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if We are required to retain Your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                </p>
                <p>
                  Where possible, We apply shorter retention periods and/or reduce identifiability by deleting, aggregating, or anonymizing data. Unless otherwise stated, the retention periods below are maximum periods (&quot;up to&quot;) and We may delete or anonymize data sooner when it is no longer needed for the relevant purpose. We apply different retention periods to different categories of Personal Data based on the purpose of processing and legal obligations:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    <strong className="text-foreground">Account Information:</strong> User Accounts: retained for the duration of your account relationship plus up to 24 months after account closure to handle any post-termination issues or resolve disputes.
                  </li>
                  <li>
                    <strong className="text-foreground">Customer Support Data:</strong> Support tickets and correspondence: up to 24 months from the date of ticket closure to resolve follow-up inquiries, track service quality, and defend against potential legal claims. Chat transcripts: up to 24 months for quality assurance and staff training purposes.
                  </li>
                  <li>
                    <strong className="text-foreground">Usage Data:</strong> Website analytics data (cookies, IP addresses, device identifiers): up to 24 months from the date of collection. Server logs (IP addresses, access times): up to 24 months for security monitoring and troubleshooting purposes.
                  </li>
                </ul>
                <p>
                  Usage Data is retained in accordance with the retention periods described above, and may be retained longer only where necessary for security, fraud prevention, or legal compliance.
                </p>
                <p>We may retain Personal Data beyond the periods stated above for different reasons:</p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-xs">
                  <li>Legal obligation: We are required by law to retain specific data (e.g., financial records for tax authorities).</li>
                  <li>Legal claims: Data is necessary to establish, exercise, or defend legal claims.</li>
                  <li>Your explicit request: You ask Us to retain specific information.</li>
                  <li>Technical limitations: Data exists in backup systems that are scheduled for routine deletion.</li>
                </ul>
                <p>You may request information about how long We will retain Your Personal Data by contacting Us.</p>
                <p>When retention periods expire, We securely delete or anonymize Personal Data according to the following procedures:</p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-xs">
                  <li>Deletion: Personal Data is removed from Our systems and no longer actively processed.</li>
                  <li>Backup retention: Residual copies may remain in encrypted backups for a limited period consistent with our backup retention schedule and are not restored except where necessary for security, disaster recovery, or legal compliance.</li>
                  <li>Anonymization: In some cases, We convert Personal Data into anonymous statistical data that cannot be linked back to You. This anonymized data may be retained indefinitely for research and analytics.</li>
                </ul>
              </div>

              {/* SECTION: Transfer of Your Personal Data */}
              <div className="pt-6 space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <Globe size={18} className="text-primary" />
                  Transfer of Your Personal Data
                </h3>
                <p>
                  Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from Your jurisdiction.
                </p>
                <p>
                  Where required by applicable law, We will ensure that international transfers of Your Personal Data are subject to appropriate safeguards and supplementary measures where appropriate. The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                </p>
              </div>

              {/* SECTION: Delete Your Personal Data */}
              <div className="pt-6 space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <Trash2 size={18} className="text-primary" />
                  Delete Your Personal Data
                </h3>
                <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
                <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
                <p>
                  You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any Personal Data that You have provided to Us.
                </p>
                <p>
                  Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
                </p>
              </div>

              {/* SECTION: Disclosure of Your Personal Data */}
              <div className="pt-6 space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <Eye size={18} className="text-primary" />
                  Disclosure of Your Personal Data
                </h3>
                
                <h4 className="font-display font-semibold text-foreground flex items-center gap-1.5 pl-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Business Transactions
                </h4>
                <p className="pl-4">
                  If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                </p>

                <h4 className="font-display font-semibold text-foreground flex items-center gap-1.5 pl-4 pt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Law enforcement
                </h4>
                <p className="pl-4">
                  Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                </p>

                <h4 className="font-display font-semibold text-foreground flex items-center gap-1.5 pl-4 pt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Other legal requirements
                </h4>
                <p className="pl-4">The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                <ul className="list-disc list-inside space-y-1 pl-8 text-xs">
                  <li>Comply with a legal obligation</li>
                  <li>Protect and defend the rights or property of the Company</li>
                  <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                  <li>Protect the personal safety of Users of the Service or the public</li>
                  <li>Protect against legal liability</li>
                </ul>
              </div>

              {/* SECTION: Security of Your Personal Data */}
              <div className="pt-6 space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <Lock size={18} className="text-primary" />
                  Security of Your Personal Data
                </h3>
                <p>
                  The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security.
                </p>
              </div>

              {/* SECTION: Children's Privacy */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  Children's Privacy
                </h2>
                <p>
                  Our Service does not address anyone under the age of 16. We do not knowingly collect personally identifiable information from anyone under the age of 16. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 16 without verification of parental consent, We take steps to remove that information from Our servers.
                </p>
                <p>
                  If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
                </p>
              </div>

              {/* SECTION: Links to Other Websites */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <Link2 size={20} className="text-primary" />
                  Links to Other Websites
                </h2>
                <p>
                  Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
                </p>
                <p>
                  We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                </p>
              </div>

              {/* SECTION: Changes to this Privacy Policy */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <RefreshCw size={20} className="text-primary" />
                  Changes to this Privacy Policy
                </h2>
                <p>
                  We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
                </p>
                <p>
                  We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>

              {/* SECTION: Contact Us */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <Mail size={20} className="text-primary" />
                  Contact Us
                </h2>
                <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <a 
                    href="mailto:zenulwork@gmail.com" 
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:glow-primary transition-all text-foreground hover:text-primary"
                  >
                    <Mail size={18} className="text-primary" />
                    <div className="overflow-hidden">
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Email Us</p>
                      <p className="text-xs font-semibold truncate">zenulwork@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://chsolution.com/contact" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:glow-primary transition-all text-foreground hover:text-primary"
                  >
                    <Globe size={18} className="text-primary" />
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Website Contact</p>
                      <p className="text-xs font-semibold">chsolution.com/contact</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+919638528117" 
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:glow-primary transition-all text-foreground hover:text-primary"
                  >
                    <Phone size={18} className="text-primary" />
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Call Us</p>
                      <p className="text-xs font-semibold">+91 96385 28117</p>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
