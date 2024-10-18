import React, { useState } from 'react';

const FaqAccordion: React.FC = () => {
  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Function to toggle FAQs
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-12">
  <div className="container mx-auto px-4">
    {/* FAQs Section Label */}
    <h2 className="text-3xl font-bold mb-8" style={{ color: '#043b76' }}>FAQs</h2>

    <div className="space-y-4">
      {/* FAQ 1 */}
      <div className="border border-gray-300 rounded-lg">
        <div className="p-4 cursor-pointer" style={{ color: '#000000' }}>
          <h3 className="text-lg font-bold">Am I supposed to leave a tip?</h3>
        </div>
        <div className="px-4 pb-4 hidden">
          <p className="text-base" style={{ color: '#000000' }}>
          Tipping is never expected but always appreciated.
          </p>
          <a
            href="https://handandstone.ca/faqs-massage-therapist/"
            className="mt-2 inline-block text-sm font-semibold underline"
            style={{ color: '#000000' }}>
            Learn More
          </a>
        </div>
      </div>

      {/* FAQ 2 */}
      <div className="border border-gray-300 rounded-lg">
        <div className="p-4 cursor-pointer" style={{ color: '#000000' }}>
          <h3 className="text-lg font-bold">What is your cancellation policy?
          </h3>
        </div>
        <div className="px-4 pb-4 hidden">
          <p className="text-base" style={{ color: '#000000' }}>
          Twenty four hour advance notice is required on any appointment cancellation. Failure to do so will result in a fee equivalent to 50% of the cost of the scheduled service.
          </p>
          <a
            href="https://handandstone.ca/faqs-massage-therapist/"
            className="mt-2 inline-block text-sm font-semibold underline"
            style={{ color: '#000000' }}>
            Learn More
          </a>
        </div>
      </div>

      {/* FAQ 3 */}
      <div className="border border-gray-300 rounded-lg">
        <div className="p-4 cursor-pointer" style={{ color: '#000000' }}>
          <h3 className="text-lg font-bold">What are the age restrictions?          </h3>
        </div>
        <div className="px-4 pb-4 hidden">
          <p className="text-base" style={{ color: '#000000' }}>
          Age requirements for receiving spa services vary by state and local law and Hand & Stone strictly complies with such laws. In the event there is not a specific regulation in your area, our policy is as follows:
No person will be denied admission based upon race, religion or appearance. CHILDREN UNDER THE AGE OF 12 SHALL BE STRICTLY PROHIBITED FROM ENTERING THE SPA. No children under the age of 18 will be able to receive any service without the express written consent of their parent or guardian. For children 15 and under (or where required by state law), a parent or guardian MUST remain in the treatment room and for all minor children the parent must remain on premises during services.
Must be over the age of 13 to receive a Teen facial.
          </p>
          <a
            href="https://handandstone.ca/faqs-massage-therapist/"
            className="mt-2 inline-block text-sm font-semibold underline"
            style={{ color: '#000000' }}>
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default FaqAccordion;
