
import React from 'react';

const TermsOfService = () => {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-mono font-bold mb-8 gradient-text">
          Terms of Service
        </h1>
        
        <div className="glass rounded-2xl p-8 space-y-8">
          <div>
            <p className="text-gray-400 mb-6">
              Last updated: December 2024
            </p>
            <p className="text-gray-300 leading-relaxed">
              Welcome to NightMedia. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">1. Services</h2>
            <div className="text-gray-300 space-y-4">
              <p>NightMedia provides digital creative services including but not limited to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Web design and development</li>
                <li>Influencer marketing campaigns</li>
                <li>CGI and 3D visualization</li>
                <li>Video editing and production</li>
                <li>Brand identity and graphic design</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">2. Client Responsibilities</h2>
            <div className="text-gray-300 space-y-4">
              <p>As a client, you agree to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Provide accurate and complete information</li>
                <li>Respond to requests for feedback in a timely manner</li>
                <li>Provide necessary materials and assets</li>
                <li>Make payments according to agreed terms</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
            <div className="text-gray-300 space-y-4">
              <p>Payment terms are established in individual project agreements. Generally:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Projects require a deposit before work begins</li>
                <li>Final payment is due upon project completion</li>
                <li>Late payments may incur additional fees</li>
                <li>Disputed charges must be reported within 30 days</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
            <div className="text-gray-300 space-y-4">
              <p>Upon full payment, clients receive rights to the final deliverables as specified in the project agreement. NightMedia retains the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Showcase work in our portfolio</li>
                <li>Use project as a case study</li>
                <li>Retain ownership of our proprietary processes and tools</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">5. Revisions and Changes</h2>
            <div className="text-gray-300 space-y-4">
              <p>Project scope and revision policies are defined in individual agreements. Additional work beyond the original scope may incur extra charges.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">6. Confidentiality</h2>
            <div className="text-gray-300 space-y-4">
              <p>We maintain strict confidentiality regarding client information and project details. We will not disclose sensitive information without explicit permission.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <div className="text-gray-300 space-y-4">
              <p>NightMedia's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
            <div className="text-gray-300 space-y-4">
              <p>Either party may terminate a project agreement with written notice. Termination terms are specified in individual project agreements.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
            <div className="text-gray-300 space-y-4">
              <p>These Terms are governed by the laws of New York State. Any disputes will be resolved through arbitration in New York, NY.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
            <p className="text-gray-300">
              For questions regarding these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 text-gray-300">
              <p>Email: legal@nightmedia.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: New York, NY</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. Updated Terms will be posted on our website with the revision date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
