import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
} from "@yext/pages";
import "../index.css";
import { Image, LexicalRichText } from "@yext/pages-components";
import Hours from "../components/hours";
import {
  BsFacebook,
  BsFileMinus,
  BsInstagram,
  BsLinkedin,
  BsPlus,
  BsSearch,
  BsStarFill,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import Cta from "../components/cta";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Schema from "../components/Schema";

/**
 * Required when Knowledge Graph data is used for a template.
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
      "photoGallery",
      "c_primaryCTA",
      "c_secondaryCTA",
      "c_tertiaryCTA",
      "geocodedCoordinate",
      "c_relatedOffers.name",
      "c_relatedOffers.shortDescriptionV2",
      "c_relatedOffers.c_primaryCTA",
      "c_relatedOffers.price",
      "c_relatedServices.name",
      "c_relatedServices.richTextDescriptionV2",
      "c_relatedServices.c_primaryCTA",
      "c_relatedServices.primaryPhoto",
      "c_relatedServices.id",
      "c_relatedPromotions.name",
      "c_relatedPromotions.id",
      "c_relatedPromotions.shortDescriptionV2",
      "c_relatedPromotions.primaryPhoto",
      "c_relatedPromotions.c_category",
      "c_relatedPromotions.c_primaryCTA",
      "c_relatedPromotions.c_secondaryCTA",
      "c_relatedFAQs.id",
      "c_relatedFAQs.question",
      "c_relatedFAQs.answerV2",
      "c_relatedFAQs.c_primaryCTA",

      // "c_ourServices",
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
export const getPath: GetPath = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig = ({
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
const Location: Template = ({ relativePrefixToRoot, path, document }) => {
  const _data = document;
  const {
    _site,
    name,
    address,
    openTime,
    hours,
    mainPhone,
    geocodedCoordinate,
    description,
    c_relatedOffers,
    c_relatedPromotions,
    c_primaryCTA,
    c_secondaryCTA,
    c_tertiaryCTA,
    photoGallery,
    c_relatedServices,
    c_relatedFAQs,
  } = document;
  console.log(geocodedCoordinate);

  const reviews = [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
      author: "Risako M",
      date: "May 16, 2021",
      datetime: "2021-01-06",
    },
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
      author: "Risako M",
      date: "May 16, 2021",
      datetime: "2021-01-06",
    },
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
      author: "Risako M",
      date: "May 16, 2021",
      datetime: "2021-01-06",
    },
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
      author: "Risako M",
      date: "May 16, 2021",
      datetime: "2021-01-06",
    },
  ];

  return (
    <>
      <Schema document={_data} />
      {/* Top Account Bar */}
      <nav aria-label="Account" className="bg-[#043b76] text-white py-3">
        <div className="w-full md:container mx-auto flex justify-end">
          <a
            href="#"
            className="text-sm font-semibold px-4 py-2 bg-[#043b76] hover:bg-blue-500 rounded"
          >
            Account
          </a>
        </div>
      </nav>

      {/* Main Header */}
      <header
        className="bg-white text-primary p-6 font-semibold"
        aria-label="Main"
      >
        <div className="mx-auto md:flex justify-between items-center hidden">
          <a href="#">
            <img
              src="https://handandstone.com/wp-content/uploads/2022/11/HS_Logo.png"
              alt="Hand & Stone Logo"
              className="h-10 w-auto"
            />
          </a>
          <nav aria-label="Main Navigation">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://handandstone.com/massage/swedish-massage/"
                  className="text-xl hover:underline"
                >
                  Spa Services
                </a>
              </li>
              <li>
                <a
                  href="https://handandstone.com/locations/"
                  className="text-xl hover:underline"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="https://handandstone.com/memberships/"
                  className="text-xl hover:underline"
                >
                  Membership
                </a>
              </li>
              <li>
                <a
                  href="https://handandstone.com/memberships/"
                  className="text-xl hover:underline"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <a
                  href="https://handandstone.com/memberships/"
                  className="text-xl hover:underline"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://handandstone.com/memberships/"
                  className="text-xl hover:underline"
                >
                  Own a Franchise
                </a>
              </li>
              <li>
                <a
                  href="https://handandstone.com/book-an-appointment/"
                  className="text-xl cta2-primarybg hover:underline !inline !font-semibold"
                >
                  Book an Appointment
                </a>
              </li>
              <li>
                <BsSearch
                  className="!inline w-6 h-6 ml-6 font-semibold"
                  aria-label="Search Icon"
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-primary text-white"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto flex flex-col-reverse md:flex-row-reverse">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:px-0 lg:pb-56 lg:pt-48 w-full md:w-1/2">
            <div className="mx-auto max-w-2xl ml-10">
              <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative px-3 py-1 text-xl leading-6">
                  {name.split("-")[0]}
                </div>
              </div>
              <h1
                id="hero-heading"
                className="text-4xl font-bold tracking-tight sm:text-6xl font-playFair"
              >
                {address.city}, {address.region}
              </h1>
              <p className="mt-6 text-xl leading-8">
                <strong>Call us:</strong>{" "}
                {mainPhone
                  ? mainPhone
                      .replace("+1", "")
                      .replace(/\D+/g, "")
                      .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
                  : `(610) 363-8020`}
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>Find us:</strong> {address.line1}, {address.city},{" "}
                {address.region} {address.postalCode}
              </p>
              <div className="mt-10 flex flex-col items-start gap-12 h-full justify-between">
                <div className="flex flex-col md:flex-row gap-4 mb-4 items-start">
                  <Cta cta={c_primaryCTA} className="cta1-primarybg" />
                  <Cta cta={c_secondaryCTA} className="cta1-primarybg" />
                  <Cta cta={c_tertiaryCTA} className="cta1-primarybg" />
                </div>
                <div className="flex gap-8 mb-4">
                  <BsFacebook className="h-8 w-8" aria-hidden="true" />
                  <BsTwitter className="h-8 w-8" aria-hidden="true" />
                  <BsInstagram className="h-8 w-8" aria-hidden="true" />
                  <BsLinkedin className="h-8 w-8" aria-hidden="true" />
                  <BsYoutube className="h-8 w-8" aria-hidden="true" />
                  <BsTiktok className="h-8 w-8" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:-mr-8 xl:absolute xl:inset-0 w-full md:w-1/2">
            <Image image={photoGallery[0]} className="!h-full" />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section
        className="mx-auto p-12 gap-28 flex flex-col md:flex-row justify-between w-full text-primary py-16"
        aria-labelledby="welcome-heading"
      >
        <div className="w-full md:w-1/2">
          <h2 id="welcome-heading" className="text-5xl font-bold mb-6">
            <span className="text-3xl">Welcome</span>
            <br />
            <span className="font-playFair">
              Hand & Stone Massage and Facial Spa in {address.city},{" "}
              {address.region}
            </span>
          </h2>
          <p className="text-xl mb-4">{description}</p>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <Hours hours={hours} title="Hours" />
          <p className="text-3xl">Book an appointment</p>
          <Cta
            cta={{
              label: `Call ${mainPhone
                .replace("+1", "")
                .replace(/\D+/g, "")
                .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}`,
              link: `tel:${mainPhone}`,
            }}
            className="cta1-whitebg !w-full"
          />
          <Cta
            cta={{ label: "Book online", link: c_primaryCTA.link }}
            className="cta1-whitebg !w-full"
          />
          <p className="text-3xl">Find us</p>
          <Cta
            cta={{
              label: "Buy a Gift Card",
              link: "https://www.google.com/maps/place/7204+Hancock+Village+Drive,+Chesterfield,+VA+23832",
            }}
            className="cta2-whitebg !w-full"
          />
        </div>
      </section>

      {/* Introductory Offers Section */}
      <section className="bg-white py-16" aria-labelledby="offers-heading">
        <div className="mx-auto px-6 lg:px-8 text-primary">
          <div className="mx-auto sm:text-center">
            <h2
              id="offers-heading"
              className="text-6xl font-semibold leading-7 font-playFair"
            >
              Introductory Offers
            </h2>
          </div>
          <div className="mt-20 flow-root px-[8%]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-center">
              {c_relatedOffers.map((offer, index) => (
                <article key={index} className="pt-16 lg:pt-0 text-center">
                  <h3 id={index} className="text-xl leading-7 font-sofiaPro">
                    {offer.name}
                  </h3>
                  <p className="mt-6 flex items-baseline justify-center gap-x-1">
                    <span className="text-7xl font-bold tracking-tight font-playFair">
                      <sup className="text-4xl -mt-3 mr-2">$</sup>
                      {offer.price.value}
                    </span>
                  </p>
                  <hr className="border-t-2 my-8   border-t-primary" />
                  <div className="leading-6 text-xl h-12 text-center">
                    {offer.shortDescriptionV2 && (
                      <LexicalRichText
                        serializedAST={JSON.stringify(
                          offer.shortDescriptionV2.json
                        )}
                      />
                    )}
                  </div>
                  <Cta
                    cta={offer.c_primaryCTA}
                    className="cta1-whitebg mx-auto mt-8"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {c_relatedServices && (
        <section className="bg-white py-16" aria-labelledby="services-heading">
          <div className="mx-auto px-6 lg:px-8 text-primary">
            <div className="mx-auto sm:text-center">
              <h2
                id="services-heading"
                className="text-6xl font-semibold leading-7 font-playFair"
              >
                Our Services
              </h2>
            </div>
            <div className="px-[8%] mt-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {c_relatedServices.map((item, index) => (
                <article key={index} className="group border rounded-md pb-4">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg sm:aspect-h-3 sm:aspect-w-2">
                    <Image image={item.primaryPhoto} />
                  </div>
                  <div className="px-4 mt-4 flex items-center justify-between text-2xl font-medium">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="mt-1 text-xl px-4">
                    <LexicalRichText
                      serializedAST={JSON.stringify(
                        item.richTextDescriptionV2.json
                      )}
                    />
                  </div>
                  <Cta
                    cta={item.c_primaryCTA}
                    className="cta1-whitebg mx-auto mt-8 px-4"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Company section */}
      {c_relatedPromotions.map((item, index: number) => (
        <article
          className="relative bg-white"
          key={item.id}
          aria-labelledby={`promotion-heading-${item.id}`}
        >
          <div
            className={`mx-auto flex w-full ${index % 2 === 0 ? "flex-col-reverse md:flex-row " : "flex-col-reverse md:flex-row-reverse"}`}
          >
            {/* Promotion Content */}
            <div
              className={`px-6 lg:px-0 w-full md:w-1/2 flex items-center ${
                index % 2 === 0
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              }`}
            >
              <div className="mx-auto lg:mx-0 px-24 text-center">
                {/* Category */}
                <div className="hidden sm:mt-32 sm:flex lg:mt-16 justify-center">
                  <div className="relative rounded-full px-3 py-1 text-2xl leading-6">
                    {item.c_category}
                  </div>
                </div>

                {/* Promotion Title */}
                <h2
                  id={`promotion-heading-${item.id}`}
                  className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl font-playFair"
                >
                  {item.name}
                </h2>

                {/* Short Description */}
                {item.shortDescriptionV2 && (
                  <div className="mt-6 text-lg leading-8">
                    <LexicalRichText
                      serializedAST={JSON.stringify(
                        item.shortDescriptionV2.json
                      )}
                    />
                  </div>
                )}

                {/* Call-to-action Button */}
                {item.c_primaryCTA && (
                  <div className="mt-10 flex items-center gap-x-6 justify-center">
                    <Cta
                      cta={item.c_primaryCTA}
                      className={
                        index % 2 === 0 ? "cta1-primarybg" : "cta1-whitebg"
                      }
                      aria-label={`Call to action for ${item.name}`}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Promotion Image */}
            <figure className="relative w-full md:w-1/2">
              <Image image={item.primaryPhoto} className="!h-full !w-full" />
            </figure>
          </div>
        </article>
      ))}

      {/* FAQs Section */}
      {c_relatedFAQs && (
        <section
          className="bg-white text-primary py-16"
          aria-labelledby="faqs-heading"
        >
          <div className="mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <div className="mx-auto sm:text-center">
                <h2
                  id="faqs-heading"
                  className="text-6xl font-semibold leading-7 font-playFair"
                >
                  FAQs
                </h2>
              </div>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {c_relatedFAQs.map((faq, index) => (
                  <Disclosure key={index} as="div" className="pt-6">
                    <dt>
                      <DisclosureButton className="text-2xl group flex w-full items-start justify-between text-left">
                        <span className="font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <BsPlus
                            aria-hidden="true"
                            className="h-8 w-8 group-data-[open]:hidden"
                          />
                          <BsFileMinus
                            aria-hidden="true"
                            className="h-8 w-8 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12 text-xl">
                      <LexicalRichText
                        serializedAST={JSON.stringify(faq.answerV2.json)}
                      />
                      <Cta cta={faq.c_primaryCTA} className="cta1-whitebg" />
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      {/* Reviews Section */}
      <section
        className="bg-white text-primary py-16"
        aria-labelledby="reviews-heading"
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mx-auto sm:text-center">
            <h2
              id="reviews-heading"
              className="text-6xl font-semibold leading-7 font-playFair"
            >
              Reviews
            </h2>
          </div>
          <div className="mt-24 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
            {reviews.map((review, index) => (
              <article
                key={index}
                className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
              >
                <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                  <div className="flex items-center xl:col-span-1">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating, index) => (
                        <BsStarFill
                          key={index}
                          aria-hidden="true"
                          className={
                            review.rating > rating
                              ? "fill-primary h-5 w-5 flex-shrink-0"
                              : "fill-gray-200 h-5 w-5 flex-shrink-0"
                          }
                        />
                      ))}
                    </div>
                    <p className="ml-3">
                      {review.rating}
                      <span className="sr-only"> out of 5 stars</span>
                    </p>
                  </div>
                  <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                    <h3 className="font-medium">{review.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: review.content }}
                      className="mt-3 space-y-6"
                    />
                  </div>
                </div>
                <div className="mt-6 flex items-center lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                  <p className="font-medium">{review.author}</p>
                  <time
                    dateTime={review.datetime}
                    className="ml-4 border-l border-gray-200 pl-4 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                  >
                    {review.date}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-primary bg-white py-16" aria-label="Footer">
        <div className="mx-auto text-center">
          <p>
            © *Introductory offers valid for first time visit only. Not valid
            for gift cards. Sessions include time for consultation and dressing.
            Rates and services may vary by location.
            <br />
            **Enhancements are included within the one-hour service. ***Offers
            may not be combined. See spa for details.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Location;
