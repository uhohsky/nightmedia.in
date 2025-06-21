
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-mono font-bold mb-8 gradient-text">
          Privacy Policy
        </h1>
        
        <div className="glass rounded-2xl p-8 space-y-8">
          <div>
            <p className="text-gray-400 mb-6">
              Last updated: December 2024
            </p>
            <p className="text-gray-300 leading-relaxed">
              At NightMedia ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                <p>We may collect personal information that you provide directly to us, including:</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Name and contact information</li>
                  <li>Email address and phone number</li>
                  <li>Company information</li>
                  <li>Project requirements and preferences</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Usage Information</h3>
                <p>We automatically collect certain information about your device and usage patterns, including:</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Device and operating system information</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <div className="text-gray-300 space-y-2">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Provide and improve our services</li>
                <li>Communicate with you about projects and inquiries</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze website usage and optimize user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <div className="text-gray-300 space-y-4">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>With trusted service providers who assist in our operations</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-300">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <div className="text-gray-300 space-y-2">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your personal information</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 text-gray-300">
              <p>Email: privacy@nightmedia.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: New York, NY</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
