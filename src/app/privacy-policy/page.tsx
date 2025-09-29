export const metadata = {
  title: "Privacy Policy | STOC Advisory",
  description: "Privacy Policy for STOC Advisory.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-[12vh] md:pt-[15vh] px-6 md:px-12 lg:px-32 py-16 md:py-24 prose prose-neutral max-w-5xl">
      <h1 className="font-gambetta tracking-tight">Privacy Policy</h1>
      <p>
        <strong>Last Updated:</strong> September 29, 2025
      </p>

      <p>
        This Privacy Policy explains how STOC Advisory (“
        <strong>Company</strong>,” “<strong>we</strong>,” “<strong>our</strong>
        ,” “<strong>us</strong>”) collects, uses, and shares personal
        information when you use our website and Services.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Contact Data:</strong> name, email address, phone number
          (optional), and message content you submit.
        </li>
        <li>
          <strong>Device/Usage Data:</strong> IP address, user-agent, pages
          viewed, referring URLs, and interactions.
        </li>
        <li>
          <strong>Communications Data:</strong> preferences and consent signals
          (e.g., SMS opt-in/opt-out).
        </li>
        <li>
          <strong>Cookies & Similar Technologies:</strong> used for
          functionality, analytics, and (if enabled) marketing.
        </li>
      </ul>

      <h2>2. Sources of Data</h2>
      <p>
        We collect data directly from you (forms, emails, SMS), automatically
        via your device/browser, and from service providers that help us operate
        the Services (e.g., email/SMS providers, analytics).
      </p>

      <h2>3. How We Use Information</h2>
      <ul>
        <li>Provide, maintain, and improve the Services;</li>
        <li>Respond to inquiries and deliver communications you request;</li>
        <li>
          Send transactional and (with consent) marketing messages, including
          SMS;
        </li>
        <li>Measure performance and enhance security and fraud prevention;</li>
        <li>Comply with legal obligations and enforce our Terms.</li>
      </ul>

      <h2>4. SMS Program & Consent (A2P 10DLC)</h2>
      <p>
        If you provide your phone number, you consent to receive automated
        SMS/MMS messages (follow-ups, reminders). Message frequency varies. Msg
        &amp; data rates may apply. Reply <strong>STOP</strong> to opt out;
        reply <strong>HELP</strong> for help. Consent is not a condition of
        purchase. Carriers are not liable for delayed or undelivered messages.
      </p>
      <p>
        We log consent metadata (e.g., phone number, timestamp, form context,
        user-agent, IP where available) to support compliance. We honor opt-out
        requests by suppressing further messages to that number unless you
        re-opt in.
      </p>

      <h2>5. Legal Bases (GDPR/UK GDPR, where applicable)</h2>
      <ul>
        <li>
          <strong>Consent:</strong> for marketing (including SMS) and certain
          cookies/analytics;
        </li>
        <li>
          <strong>Legitimate Interests:</strong> to operate, secure, and improve
          our Services;
        </li>
        <li>
          <strong>Contract:</strong> to respond to requests you initiate;
        </li>
        <li>
          <strong>Legal Obligation:</strong> to comply with applicable laws and
          regulations.
        </li>
      </ul>

      <h2>6. Sharing of Information</h2>
      <ul>
        <li>
          <strong>Service Providers:</strong> e.g., email (Resend), hosting,
          analytics, CRM, and SMS messaging vendors;
        </li>
        <li>
          <strong>Legal & Safety:</strong> to comply with law or protect rights,
          safety, and security;
        </li>
        <li>
          <strong>Business Transfers:</strong> in connection with a merger,
          acquisition, or similar event.
        </li>
      </ul>

      <h2>7. Data Retention</h2>
      <p>
        We retain personal information for as long as necessary to fulfill the
        purposes outlined in this Policy, including regulatory/audit
        requirements (e.g., SMS consent records), and then delete or anonymize
        it.
      </p>

      <h2>8. Your Rights & Choices</h2>
      <ul>
        <li>
          Opt out of SMS by replying <strong>STOP</strong>; text{" "}
          <strong>HELP</strong> for help.
        </li>
        <li>
          Unsubscribe from emails via the link provided (if applicable) or by
          contacting us.
        </li>
        <li>
          Request access, correction, or deletion of your data by emailing
          <a href="mailto:inquiry@stocadvisory.com">
            {" "}
            inquiry@stocadvisory.com
          </a>
          .
        </li>
        <li>
          California residents (CCPA/CPRA): you may have additional rights
          regarding access, deletion, and limiting use of sensitive data. If we
          “sell” or “share” personal information as defined by law, we will
          provide a “Do Not Sell or Share My Personal Information” mechanism.
        </li>
        <li>
          EEA/UK residents: you may have rights to object or restrict processing
          and to data portability; you may lodge a complaint with your local
          supervisory authority.
        </li>
        <li>We do not sell personal information.</li>
      </ul>

      <h2>9. Cookies & Analytics</h2>
      <p>
        We use cookies and similar technologies for site functionality and
        analytics. Where required, we seek consent for non-essential cookies.
        You can control cookies via your browser settings.
      </p>

      <h2>10. Data Security</h2>
      <p>
        We implement reasonable administrative, technical, and organizational
        safeguards. No method of transmission or storage is 100% secure.
      </p>

      <h2>11. Children&apos;s Privacy</h2>
      <p>
        Our Services are not directed to children under 16, and we do not
        knowingly collect their personal information.
      </p>

      <h2>12. International Transfers</h2>
      <p>
        If data is transferred internationally, we use appropriate safeguards
        where required by law.
      </p>

      <h2>13. Changes to This Policy</h2>
      <p>
        We may update this Policy periodically. The “Last Updated” date reflects
        the latest version.
      </p>

      <h2>14. Contact</h2>
      <p>
        STOC Advisory
        <br />
        inquiry@stocadvisory.com
        <br />
        600 Baltimore Ave., Suite 205, Towson, MD 21204
      </p>
    </main>
  );
}
