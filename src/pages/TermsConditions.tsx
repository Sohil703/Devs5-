import { motion } from "framer-motion";
import { 
  Shield, 
  Scale,
  BookOpen,
  CheckCircle2,
  Link2,
  XCircle,
  AlertTriangle,
  FileWarning,
  Globe,
  MessageSquare,
  RefreshCw,
  Mail,
  Phone,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
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
              <Scale size={14} className="text-primary" />
              Terms of Use
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold leading-tight"
            >
              Terms & Conditions <br />
              <span className="text-gradient">User Agreement Policies</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light"
            >
              Please read these terms and conditions carefully before using our service to understand your rights and obligations.
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
                  Terms and Conditions
                </h2>
                <p className="text-xs text-muted-foreground mt-1">Last updated: July 08, 2026</p>
              </div>
              <div className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold uppercase tracking-wider">
                Official Document
              </div>
            </div>

            <div className="space-y-6 text-sm text-muted-foreground/90 leading-relaxed">
              <p>
                Please read these terms and conditions carefully before using Our Service.
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
                <p className="pl-4">For the purposes of these Terms and Conditions:</p>
                <ul className="list-disc list-inside space-y-3 pl-6">
                  <li>
                    <strong className="text-foreground">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                  </li>
                  <li>
                    <strong className="text-foreground">Country</strong> refers to: Gujarat, India
                  </li>
                  <li>
                    <strong className="text-foreground">Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in these Terms and Conditions) refers to CH Solution, Ahmedabad, Gujarat, India 380001.
                  </li>
                  <li>
                    <strong className="text-foreground">Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.
                  </li>
                  <li>
                    <strong className="text-foreground">Service</strong> refers to the Website.
                  </li>
                  <li>
                    <strong className="text-foreground">Terms and Conditions</strong> (also referred to as &quot;Terms&quot;) means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service.
                  </li>
                  <li>
                    <strong className="text-foreground">Third-Party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service.
                  </li>
                  <li>
                    <strong className="text-foreground">Website</strong> refers to CH Solution, accessible from{" "}
                    <a href="https://chsolution.com/" rel="external nofollow noopener" target="_blank" className="text-primary hover:underline font-medium">
                      https://chsolution.com/
                    </a>.
                  </li>
                  <li>
                    <strong className="text-foreground">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                  </li>
                </ul>
              </div>

              {/* SECTION: Acknowledgment */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-primary" />
                  Acknowledgment
                </h2>
                <p>
                  These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                </p>
                <p>
                  Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                </p>
                <p>
                  By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
                </p>
                <p>
                  You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
                </p>
                <p>
                  Your access to and use of the Service is also subject to Our Privacy Policy, which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.
                </p>
              </div>

              {/* SECTION: Links to Other Websites */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <Link2 size={20} className="text-primary" />
                  Links to Other Websites
                </h2>
                <p>
                  Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.
                </p>
                <p>
                  The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.
                </p>
                <p>
                  We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.
                </p>

                <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2 pt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Links from a Third-Party Social Media Service
                </h3>
                <p className="pl-4">
                  The Service may display, include, make available, or link to content or services provided by a Third-Party Social Media Service. A Third-Party Social Media Service is not owned or controlled by the Company, and the Company does not endorse or assume responsibility for any Third-Party Social Media Service.
                </p>
                <p className="pl-4">
                  You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with Your access to or use of any Third-Party Social Media Service, including any content, goods, or services made available through them. Your use of any Third-Party Social Media Service is governed by that Third-Party Social Media Service's terms and privacy policies.
                </p>
              </div>

              {/* SECTION: Termination */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <XCircle size={20} className="text-primary" />
                  Termination
                </h2>
                <p>
                  We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                </p>
                <p>
                  Upon termination, Your right to use the Service will cease immediately.
                </p>
              </div>

              {/* SECTION: Limitation of Liability */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-primary" />
                  Limitation of Liability
                </h2>
                <p>
                  Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
                </p>
                <p>
                  To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of these Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
                </p>
                <p>
                  Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
                </p>
              </div>

              {/* SECTION: AS IS Disclaimer */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <FileWarning size={20} className="text-primary" />
                  &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer
                </h2>
                <p>
                  The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
                </p>
                <p>
                  Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
                </p>
                <p>
                  Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
                </p>
              </div>

              {/* SECTION: Governing Law */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <Globe size={20} className="text-primary" />
                  Governing Law
                </h2>
                <p>
                  The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
                </p>
              </div>

              {/* SECTION: Disputes Resolution */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <MessageSquare size={20} className="text-primary" />
                  Disputes Resolution
                </h2>
                <p>
                  If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
                </p>
              </div>

              {/* SECTION: EU and US Compliance */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <Shield size={20} className="text-primary" />
                  Legal Compliance & Geography
                </h2>
                
                <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2 pt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  For European Union (EU) Users
                </h3>
                <p className="pl-4">
                  If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
                </p>

                <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2 pt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  United States Legal Compliance
                </h3>
                <p className="pl-4">
                  You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
                </p>
              </div>

              {/* SECTION: Severability and Waiver */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <Shield size={20} className="text-primary" />
                  Severability and Waiver
                </h2>
                
                <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2 pt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Severability
                </h3>
                <p className="pl-4">
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                </p>

                <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2 pt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Waiver
                </h3>
                <p className="pl-4">
                  Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
                </p>
              </div>

              {/* SECTION: Translation Interpretation */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <RefreshCw size={20} className="text-primary" />
                  Translation Interpretation
                </h2>
                <p>
                  These Terms and Conditions may have been translated if We have made them available to You on our Service.
                  You agree that the original English text shall prevail in the case of a dispute.
                </p>
              </div>

              {/* SECTION: Changes to These Terms and Conditions */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <RefreshCw size={20} className="text-primary" />
                  Changes to These Terms and Conditions
                </h2>
                <p>
                  We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
                </p>
                <p>
                  By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Service.
                </p>
              </div>

              {/* SECTION: Contact Us */}
              <div className="pt-6 space-y-4">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground border-b border-border/40 pb-2 flex items-center gap-2">
                  <Mail size={20} className="text-primary" />
                  Contact Us
                </h2>
                <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
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

export default TermsConditions;
