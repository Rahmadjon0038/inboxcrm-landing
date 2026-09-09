import { LegalLayout, TOC, Section } from './LegalLayout'

const TOC_ITEMS = [
  { href: '#scope', label: '1. Introduction and Scope' },
  { href: '#collect', label: '2. Information We Collect' },
  { href: '#use', label: '3. How We Use Information' },
  { href: '#ai', label: '4. AI Processing (OpenAI)' },
  { href: '#sharing', label: '5. Sharing and Third-Party Service Providers' },
  { href: '#legal-basis', label: '6. Legal Basis for Processing' },
  { href: '#security', label: '7. Storage, Security and Retention' },
  { href: '#rights', label: '8. Your Rights and Choices' },
  { href: '#deletion', label: '9. Data Deletion' },
  { href: '#children', label: "10. Children's Privacy" },
  { href: '#transfers', label: '11. International Data Transfers' },
  { href: '#cookies', label: '12. Cookies and Local Storage' },
  { href: '#changes', label: '13. Changes to This Policy' },
  { href: '#contact', label: '14. Contact' },
]

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate="August 10, 2026"
      intro={
        <>
          Message Assistant ("we", "our", "the app") is a customer messaging
          tool that allows a business to receive and reply to its own
          Instagram Direct messages from a web dashboard, with an optional AI
          assistant that can draft or send replies and organize conversations
          into leads. This Privacy Policy explains what information we
          collect, how we use and protect it, and the choices you have.
        </>
      }
    >
      <TOC items={TOC_ITEMS} />

      <Section id="scope" title="1. Introduction and Scope">
        <p>
          This Policy applies to the Message Assistant dashboard and the data
          we process on behalf of a business ("you") when you connect your
          Instagram professional account. It does not apply to Instagram,
          Meta, or OpenAI's own handling of data, which is governed by their
          respective privacy policies.
        </p>
      </Section>

      <Section id="collect" title="2. Information We Collect">
        <p>
          When you connect your Instagram professional account, we receive
          and store, via the official Meta / Instagram API:
        </p>
        <ul className="m-0 pl-5 flex flex-col gap-2 list-disc">
          <li>
            Your connected Instagram account's ID, username, name, and
            profile picture;
          </li>
          <li>
            Incoming and outgoing Direct messages of that account, including
            text and attachments (images, video, audio) and message
            reactions;
          </li>
          <li>
            Public profile information (Instagram-scoped ID, username, name,
            profile picture) of people who message your account ("your
            contacts");
          </li>
          <li>
            Business information you configure yourself, such as services or
            courses offered, pricing, address, phone numbers, and
            promotions, used to power the AI assistant.
          </li>
        </ul>
        <p>
          We also collect the login email address and password (stored as a
          salted hash, never in plain text) of dashboard administrators, and
          minimal technical data such as request logs needed to operate and
          secure the Service.
        </p>
      </Section>

      <Section id="use" title="3. How We Use Information">
        <p>We use the information described above to:</p>
        <ul className="m-0 pl-5 flex flex-col gap-2 list-disc">
          <li>
            Display your Instagram conversations in your dashboard inbox and
            let you reply to them;
          </li>
          <li>
            Let you organize contacts into leads with status labels (for
            example, interest level or whether they intend to sign up),
            including labels generated automatically by the AI assistant;
          </li>
          <li>
            Generate AI-assisted replies and conversation summaries when you
            enable that feature;
          </li>
          <li>
            Authenticate dashboard administrators and secure access to your
            data;
          </li>
          <li>
            Maintain and improve the reliability and security of the
            Service.
          </li>
        </ul>
        <p>
          We do not sell your data, show advertising based on it, or use it
          to train third-party advertising or profiling systems.
        </p>
      </Section>

      <Section id="ai" title="4. AI Processing (OpenAI)">
        <p>
          If you enable the AI assistant, the text of a conversation (your
          contact's messages and recent conversation history) and the
          business information you configured are sent to OpenAI, a
          third-party AI service provider, in order to generate a reply and
          to classify the conversation for your leads view. OpenAI processes
          this data to return a response to us and, per its own policies,
          may retain API data briefly for abuse-monitoring purposes; we do
          not permit it to be used to train OpenAI's general-purpose models.
          No message content is sent to OpenAI unless the AI assistant is
          enabled for the relevant Instagram account. You can disable the AI
          assistant at any time from the dashboard, after which no further
          message content is sent to OpenAI.
        </p>
      </Section>

      <Section
        id="sharing"
        title="5. Sharing and Third-Party Service Providers"
      >
        <p>
          We do not sell or rent your data. We share data only with the
          service providers strictly necessary to operate the Service,
          currently:
        </p>
        <ul className="m-0 pl-5 flex flex-col gap-2 list-disc">
          <li>
            Meta / Instagram — to send and receive your Direct messages via
            the official Instagram API;
          </li>
          <li>
            OpenAI — to generate AI-assisted replies and conversation
            classifications, only when you enable this feature (see Section
            4);
          </li>
          <li>
            Our hosting and database infrastructure providers — to store and
            run the Service securely.
          </li>
        </ul>
        <p>
          We may also disclose information if required by law, legal
          process, or to protect the rights, property, or safety of our
          users or the public.
        </p>
      </Section>

      <Section id="legal-basis" title="6. Legal Basis for Processing">
        <p>
          We process your data to perform our contract with you (providing
          the Service you signed up to use), based on your consent where you
          actively enable optional features such as the AI assistant, and
          based on our legitimate interest in operating, securing, and
          improving the Service.
        </p>
      </Section>

      <Section id="security" title="7. Storage, Security and Retention">
        <p>
          Data is stored in a private database that is not publicly
          accessible. Instagram access tokens are encrypted at rest using
          AES-256-GCM. Access to the dashboard requires authentication, and
          administrator passwords are stored as salted hashes. We retain
          conversation and contact data for as long as your Instagram
          account remains connected and your dashboard account is active, so
          that you can continue to view your message history; we delete
          data upon request as described in Section 9, or automatically if
          an account has been disconnected and inactive for an extended
          period.
        </p>
      </Section>

      <Section id="rights" title="8. Your Rights and Choices">
        <p>
          Depending on your location, you may have the right to request
          access to, correction of, or deletion of your data, to object to
          or restrict certain processing, and to receive a copy of your data
          in a portable format. You can exercise any of these rights by
          contacting us at the email address in Section 14.
        </p>
      </Section>

      <Section id="deletion" title="9. Data Deletion">
        <p>
          You may request deletion of your data at any time by emailing{' '}
          <a
            href="mailto:abdullayevrahmadjon821@gmail.com"
            className="text-[#a5b4fc] hover:text-[#c7d2fe]"
          >
            abdullayevrahmadjon821@gmail.com
          </a>{' '}
          from the email address associated with your account. Upon a
          verified request, we will delete all messages, contact records,
          business configuration, and access tokens associated with your
          account within 30 days, except where we are required to retain
          certain records to comply with legal obligations. Disconnecting
          the app from within Instagram (Settings → Apps and Websites →
          Remove) immediately revokes the Service's access to your Instagram
          account and stops any further data collection, independently of a
          deletion request.
        </p>
      </Section>

      <Section id="children" title="10. Children's Privacy">
        <p>
          The Service is a business tool intended for use by adults managing
          a business Instagram account and is not directed at children. We
          do not knowingly collect personal information from children under
          13 (or the minimum age required by local law) beyond what may
          incidentally appear in a Direct message sent to a connected
          business account by a third party.
        </p>
      </Section>

      <Section id="transfers" title="11. International Data Transfers">
        <p>
          Our service providers, including OpenAI, may process data in
          countries other than your own, including the United States. Where
          this occurs, we rely on the safeguards provided by those
          providers, such as their standard contractual clauses and
          security certifications, to protect your data.
        </p>
      </Section>

      <Section id="cookies" title="12. Cookies and Local Storage">
        <p>
          The dashboard does not use third-party advertising or tracking
          cookies. It stores a login session token and a small number of
          display preferences (such as whether the sidebar is collapsed) in
          your browser's local storage, solely to keep you signed in and to
          remember your interface preferences.
        </p>
      </Section>

      <Section id="changes" title="13. Changes to This Policy">
        <p>
          We may update this Policy from time to time. The "Effective date"
          above reflects the date of the latest revision. If changes are
          material, we will make reasonable efforts to notify administrators
          of connected accounts.
        </p>
      </Section>

      <Section id="contact" title="14. Contact">
        <p>
          Questions about this Policy, or requests regarding your data, can
          be sent to{' '}
          <a
            href="mailto:abdullayevrahmadjon821@gmail.com"
            className="text-[#a5b4fc] hover:text-[#c7d2fe]"
          >
            abdullayevrahmadjon821@gmail.com
          </a>
          .
        </p>
      </Section>
    </LegalLayout>
  )
}
