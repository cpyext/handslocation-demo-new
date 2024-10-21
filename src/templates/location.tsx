import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";
import FaqAccordion from "../components/FaqAccordion";
/**
 * Required when Knowledge Graph data is ued for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${document.address.line1
    }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 *
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    _site,
    name,
    address,
    openTime,
    hours,
    mainPhone,
    geocodedCoordinate,
  } = document;


  return (
    <>
      <div className="bg-[#043b76] text-white py-1">
        <div className="container mx-auto flex justify-end">
          <a href="#" className="text-white text-lg px-4 py-2 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">
            Account
          </a>
        </div>
      </div>
      <header className="bg-white-900 text-blue p-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#">
            <img src="https://handandstone.com/wp-content/uploads/2022/11/HS_Logo.png" alt="Hand & Stone Logo" className="h-10 w-auto" />
          </a>
          <nav>
            <a href="https://handandstone.com/locations/" className="text-lg mx-4 hover:underline">Locations</a>
            <a href="https://handandstone.com/massage/swedish-massage/" className="text-lg mx-4 hover:underline">Spa Services</a>
            <a href="https://handandstone.com/memberships/" className="text-lg mx-4 hover:underline">Membership</a>
            <a href="https://handandstone.com/book-an-appointment/" className="text-lg mx-4 hover:underline">Book an Appointment</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Image */}
      {/* <section className="relative">
        <img
          src="https://handandstone.com/wp-content/uploads/2023/02/Location-Page-Placeholder-Image.jpg"
          alt="Chesterfield Location"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Hand & Stone - Chesterfield</h1>
            <p className="text-lg">Experience our full range of spa services</p>
          </div>
        </div>
      </section> */}

      {/* Section with Image on Left and Details/Buttons on Right */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Left Section - Image */}
            <div>
              <img
                src="https://handandstone.com/wp-content/uploads/2023/02/Location-Page-Placeholder-Image.jpg"
                alt="Chesterfield Location"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right Section - Location Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Hand & Stone - Chesterfield, VA</h1>
              <p className="text-lg text-gray-600 mb-2">Call us: <span className="font-semibold text-[#043b76]">(804) 639-1113</span></p>
              <p className="text-lg text-gray-600 mb-4">Find us: <span className="font-semibold text-[#043b76]">7204 Hancock Village Drive, Chesterfield, VA 23832</span></p>

              <div className="flex flex-col space-y-4 mb-4">
                <a
                  href="https://handandstone.com/book-an-appointment/?location_id=0c4b087e-3de1-4412-b05f-bee1c335f9e8"
                  className="text-white text-lg px-6 py-3 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">
                  Book an Appointment
                </a>
                <a
                  href="https://handandstone.com/locations/chesterfield/spa-menu/"
                  className="text-white text-lg px-6 py-3 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">
                  View Spa Menu
                </a>
                <a
                  href="https://handandstone.com/gift-cards?location_id=0c4b087e-3de1-4412-b05f-bee1c335f9e8"
                  className="text-white text-lg px-6 py-3 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">
                  Buy a Gift Card
                </a>
              </div>

              {/* Google Maps Section */}
              {/* <div className="border border-gray-300 rounded-lg overflow-hidden">
          <img 
            src="https://a.mktgcdn.com/p/oVIeesvJyr4icqzSQiJoIOuPhH-QKQoKm7HFUIQfAU8/260x195.png" // Replace with your Google Maps image URL
            alt="Chesterfield Location Map"
            className="w-full h-48 object-cover"
          />
        </div> */}
            </div>

          </div>
        </div>
      </section>






      {/* Welcome Section */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome to Hand & Stone Chesterfield</h2>
        <p className="text-lg mb-4 text-center">
          Welcome to Hand & Stone Massage and Facial Spa in Chesterfield, where we provide
          top-quality massages, facials, and other spa services. Whether you're looking for a
          rejuvenating treatment or a relaxing escape, we are here for you.
        </p>
      </section>




      {/* Introductory Offers Section */}
      <section className="bg-blue-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Introductory Offers</h2>
          <p className="text-lg mb-8">At Hand & Stone Chesterfield, we offer great introductory prices for first-time visitors.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Massage</h3>
              <p className="mb-4">Introductory 1-Hour Massage for only $59.95</p>

              <a
                href="https://handandstone.com/book-an-appointment/?location_id=0c4b087e-3de1-4412-b05f-bee1c335f9e8"
                className="text-white text-lg px-3 py-1.5 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">
                Book Now
              </a>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Facial</h3>
              <p className="mb-4">Introductory 1-Hour Facial for only $59.95</p>
              <a
                href="https://handandstone.com/book-an-appointment/?location_id=0c4b087e-3de1-4412-b05f-bee1c335f9e8"
                className="text-white text-lg px-3 py-1.5 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">
              
                Book Now
              </a>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Hot Stone Massage</h3>
              <p className="mb-4">1-Hour Hot Stone Massage for only $79.95</p>
              <a
                href="https://handandstone.com/book-an-appointment/?location_id=0c4b087e-3de1-4412-b05f-bee1c335f9e8"
                
                className="text-white text-lg px-3 py-1.5 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>







      {/* Our Services Section */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <p className="text-lg mb-8 text-center">
          We offer a range of services including massages, facials, and spa treatments. Discover what Hand & Stone Chesterfield has to offer!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src="https://handandstone.com/wp-content/uploads/2023/01/Massage_Overview-Hero-1.jpg" alt="Massage" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Massages</h3>
            <p className="mb-4">Relax and unwind with our professional massage services.</p>
            <a href="https://handandstone.com/massage/" className="text-white text-lg px-3 py-1.5 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">Explore Massages</a>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src="https://handandstone.com/wp-content/uploads/2023/01/Facial_Overview-Hero.jpg" alt="Facial" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Facials</h3>
            <p className="mb-4">Rejuvenate your skin with our customized facial treatments.</p>
            <a href="https://handandstone.com/facials/" className="text-white text-lg px-3 py-1.5 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">Explore Facials</a>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src="https://handandstone.com/wp-content/uploads/2023/02/Cryoskin_Overview-Hero-1.jpg" alt="Spa Treatments" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Neveskin™</h3>
            <p className="mb-4">Shape, Tone, and Firm Your Physique. No suction, no surgery, just incredible results</p>
            <a href="#" className="text-white text-lg px-3 py-1.5 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">Explore Spa Treatments</a>
          </div>
        </div>
      </section>




      {/* Gift Cards Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Gift Cards</h2>
          <p className="text-lg mb-8">Give the gift of relaxation with Hand & Stone Gift Cards, perfect for any occasion.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Buy Online</h3>
              <p className="mb-4">Purchase Hand & Stone Gift Cards conveniently online and send them directly to your loved ones.</p>
              <a
                href="https://handandstone.zenoti.com/webstoreNew/giftcards/0c4b087e-3de1-4412-b05f-bee1c335f9e8"
               
                className="text-white text-lg px-3 py-1.5 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">
                Buy Gift Cards
              </a>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">In-Store Purchase</h3>
              <p className="mb-4">Visit our Chesterfield location to purchase gift cards and pick them up in person.</p>
              <a
                href="https://handandstone.com/locations/"
               
                className="text-white text-lg px-3 py-1.5 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">
                Find a Location
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Spa Membership Section */}

      <section style={{ backgroundColor: '#80384c' }} className="py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Spa Membership</h2>
          <p className="text-lg text-white mb-8">Become a member of Hand & Stone and enjoy exclusive benefits and discounts year-round.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Monthly Massages</h3>
              <p className="mb-4">Receive a 1-hour massage every month at a discounted membership rate.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Facials and Skin Care</h3>
              <p className="mb-4">Enjoy personalized facials and skin care treatments as part of your membership.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Exclusive Discounts</h3>
              <p className="mb-4">Members enjoy exclusive offers and discounts on additional services and gift cards.</p>
            </div>
          </div>
          <a
           className="mt-[1rem] text-white text-lg px-3 py-1.5 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">
           Join Now
         </a>
        
          
        </div>
      </section>






      <div><FaqAccordion>

        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* FAQs Section Label */}
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#000000' }}>FAQs</h2>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="border border-gray-300 rounded-lg">
                <div className="p-4 cursor-pointer" style={{ color: 'red' }}>
                  <h3 className="text-lg font-bold">Am I supposed to leave a tip?</h3>
                </div>
                <div className="px-4 pb-4 hidden">
                  <p className="text-base" style={{ color: '#000000' }}>
                    Tipping is never expected but always appreciated.
                  </p>
                  <a
                    href="https://handandstone.ca/faqs-massage-therapist/"
                    className="text-white text-lg px-3 py-1.5 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">
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
                    className="text-white text-lg px-3 py-1.5 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">
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
                    className="text-white text-lg px-3 py-1.5 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </FaqAccordion> </div>





      {/* Join Our Team Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg mb-8">At Hand & Stone Chesterfield, we are always looking for talented and passionate professionals to join our team. If you're a licensed massage therapist, esthetician, or front desk professional, we'd love to hear from you!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Massage Therapist</h3>
              <p className="mb-4">Join our team of professional massage therapists and help clients relax and rejuvenate.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Esthetician</h3>
              <p className="mb-4">Be part of our esthetician team and provide personalized facial and skincare services.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Front Desk Associate</h3>
              <p className="mb-4">Work at the front desk and help clients schedule appointments and manage their spa experiences.</p>
            </div>
          </div>
          <a
            href="https://handandstonecareers.careerplug.com/jobs"
            className="text-white text-lg px-3 py-1.5 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">
            Apply Now
          </a>
        </div>
      </section>


      <div className="overflow-hidden relative">
        <div className="flex animate-scroll whitespace-nowrap">
          <img
            src="https://handandstone.com/wp-content/uploads/2023/01/HD-7423Miami-024-1.jpg"
            alt="Image 1"
            className="w-200 h-80 object-cover mr-4" />
          <img
            src="https://handandstone.com/wp-content/uploads/2023/01/HD-7423Miami-033-1.jpg"
            alt="Image 2"
            className="w-200 h-80 object-cover mr-4" />
          <img
            src="https://handandstone.com/wp-content/uploads/2023/01/HD-7423Miami-019-1.jpg"
            alt="Image 3"
            className="w-200 h-80 object-cover mr-4" />
        </div>
      </div>






      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sign Up for Special Offers</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our email list to receive special offers and updates!
          </p>
          <div className="flex justify-center mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-[#043b76] rounded-l-md px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-[#043b76]"/>

            <a href="https://handandstone.com/locations/chesterfield/"  className="text-white text-lg px-3 py-1.5 rounded bg-[#043b76] border-2 border-[#043b76] hover:bg-[#FFFFFF] hover:text-[#043b76] hover:border-[#043b76] text-center">Sign up </a>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            By signing up, you agree to receive emails from Hand & Stone.
          </p>




          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/handandstoneusa/" target="_blank" rel="noopener noreferrer" className="bg-[#043b76] p-2 rounded hover:bg-[#0056b3]">
              <img src="https://handandstone.com/wp-content/uploads/2023/01/Vector-6.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/handandstoneusa/?hl=en" target="_blank" rel="noopener noreferrer" className="bg-[#043b76] p-2 rounded hover:bg-[#0056b3]">
              <img src="https://handandstone.com/wp-content/uploads/2023/01/Vector-5.png" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://twitter.com/handandstoneusa" target="_blank" rel="noopener noreferrer" className="bg-[#043b76] p-2 rounded hover:bg-[#0056b3]">
              <img src="https://handandstone.com/wp-content/uploads/2023/08/twitter_x.png" alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/company/hand-and-stone-massage-and-facial-spa/" target="_blank" rel="noopener noreferrer" className="bg-[#043b76] p-2 rounded hover:bg-[#0056b3]">
              <img src="https://handandstone.com/wp-content/uploads/2023/01/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://www.youtube.com/user/HandAndStone/videos?app=desktop" target="_blank" rel="noopener noreferrer" className="bg-[#043b76] p-2 rounded hover:bg-[#0056b3]">
              <img src="https://handandstone.com/wp-content/uploads/2023/01/youtube.png" alt="Music" className="w-8 h-8" />
            </a>
            <a href="https://www.tiktok.com/@handandstoneusa" target="_blank" rel="noopener noreferrer" className="bg-[#043b76] p-2 rounded hover:bg-[#0056b3]">
              <img src="https://handandstone.com/wp-content/uploads/2023/02/tiktok-icon.png" alt="Music" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>


      <bottom className="bg-[#043b76] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Hand & Stone Section */}
            <div className="border-r border-gray-300 pr-4">
              <h3 className="text-lg font-bold mb-4">Hand & Stone</h3>
              <ul className="space-y-2">
                <li><a href="https://handandstonefeedback.smg.com/" className="text-gray-600 hover:text-blue-600">Contact Us</a></li>
                <li><a href="https://handandstone.com/franchise/?SRC=consumer" className="text-gray-600 hover:text-blue-600">Own A Franchise</a></li>
                <li><a href="https://www.handandstone.ca/" className="text-gray-600 hover:text-blue-600">Hand & Stone Canada</a></li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="border-r border-gray-300 pr-4">
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="https://handandstone.com/massage/" className="text-gray-600 hover:text-blue-600">Massages</a></li>
                <li><a href="https://handandstone.com/facials/" className="text-gray-600 hover:text-blue-600">Facials</a></li>
                <li><a href="https://handandstone.com/neveskin/" className="text-gray-600 hover:text-blue-600">Neveskin</a></li>
                <li><a href="https://handandstone.com/hair-removal/" className="text-gray-600 hover:text-blue-600">Hair Removal</a></li>
              </ul>
            </div>

            {/* About Us Section */}
            <div className="border-r border-gray-300 pr-4">
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="https://handandstone.com/our-story/" className="text-gray-600 hover:text-blue-600">Our Story</a></li>
                <li><a href="https://handandstone.com/touchpoints/" className="text-gray-600 hover:text-blue-600">Touchpoints: News & Blog</a></li>
                <li><a href="https://handandstonecareers.com/" className="text-gray-600 hover:text-blue-600">Join the Team</a></li>
                <li><a href="https://handandstone.com/health-safety/" className="text-gray-600 hover:text-blue-600">Health & Safety</a></li>
              </ul>
            </div>

            {/* Terms and Conditions Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Terms and Conditions</h3>
              <ul className="space-y-2">
                <li><a href="https://handandstone.com/legal/customer-bill-of-rights/" className="text-gray-600 hover:text-blue-600">Customer Bill of Rights</a></li>
                <li><a href="https://handandstone.com/legal/gift-terms-and-conditions/" className="text-gray-600 hover:text-blue-600">Gift Card Program Terms & Conditions</a></li>
                <li><a href="https://handandstone.com/legal/rewards-terms-and-conditions/" className="text-gray-600 hover:text-blue-600">Reward Points Terms & Conditions</a></li>
                <li><a href="https://handandstone.com/legal/rewards-terms-and-conditions/" className="text-gray-600 hover:text-blue-600">Rules, Terms & Conditions</a></li>
                <li><a href="https://handandstone.com/legal/privacy-policy/" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="https://handandstone.com/legal/cookie-policy/" className="text-gray-600 hover:text-blue-600">Cookie Policy</a></li>
                <li><a href="https://handandstone.com/legal/california-residents/" className="text-gray-600 hover:text-blue-600">California Residents</a></li>
                <li><a href="https://handandstone.com/legal/non-discrimination-policy/" className="text-gray-600 hover:text-blue-600">Policy on Non Discrimination & Gender Identity</a></li>
              </ul>
            </div>
          </div>
        </div>
      </bottom>




      <footer className="bg-gray-900 text-white p-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Hand & Stone Massage and Facial Spa. All Rights Reserved.</p>
        </div>
      </footer>


    </>
  )
};

export default Location;
