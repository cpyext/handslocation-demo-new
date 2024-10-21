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
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import Cta from "../components/cta";

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
      "c_relatedOffers.name",
      "c_relatedOffers.shortDescriptionV2",
      "c_relatedOffers.c_primaryCTA",
      "c_relatedOffers.price",
      "c_relatedPromotions.name",
      "c_relatedPromotions.id",
      "c_relatedPromotions.shortDescriptionV2",
      "c_relatedPromotions.primaryPhoto",
      "c_relatedPromotions.c_category",
      "c_relatedPromotions.c_primaryCTA",
      "c_relatedPromotions.c_secondaryCTA",
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
  } = document;

  return (
    <>
      <div className="bg-[#043b76] text-white py-3">
        <div className="container mx-auto flex justify-end">
          <a
            href="#"
            className="text-sm font-semibold px-4 py-2 bg-[#043b76] hover:bg-blue-500 rounded"
          >
            Account
          </a>
        </div>
      </div>
      <header className="bg-white-900 text-blue p-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#">
            <img
              src="https://handandstone.com/wp-content/uploads/2022/11/HS_Logo.png"
              alt="Hand & Stone Logo"
              className="h-10 w-auto"
            />
          </a>
          <nav>
            <a
              href="https://handandstone.com/locations/"
              className="text-lg mx-4 hover:underline"
            >
              Locations
            </a>
            <a
              href="https://handandstone.com/massage/swedish-massage/"
              className="text-lg mx-4 hover:underline"
            >
              Spa Services
            </a>
            <a
              href="https://handandstone.com/memberships/"
              className="text-lg mx-4 hover:underline"
            >
              Membership
            </a>
            <a
              href="https://handandstone.com/book-an-appointment/"
              className="text-lg mx-4 hover:underline"
            >
              Book an Appointment
            </a>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <div className="relative bg-primary text-white">
        <div className="mx-auto flex flex-row-reverse">
          <div className="px-6 pb-24 pt-10 sm:pb-32  lg:px-0 lg:pb-56 lg:pt-48 w-1/2">
            <div className="mx-auto max-w-2xl ml-10">
              <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative px-3 py-1 text-xl leading-6 ">
                  {name.split("-")[0]}
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-playFair">
                {address.city}, {address.region}
              </h1>
              <p className="mt-6 text-xl leading-8 ">
                <span className="font-bold">Call us: </span>{" "}
                {mainPhone
                  ? mainPhone
                      .replace("+1", "")
                      .replace(/\D+/g, "")
                      .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
                  : `(610) 363-8020`}
              </p>
              <p className="mt-6 text-xl leading-8 ">
                <span className="font-bold">Find us: </span> {address.line1},{" "}
                {address.city}, {address.region} {address.postalCode}
              </p>
              <div className="mt-10 flex flex-col items-center gap-x-6">
                <div className="flex gap-4 mb-4 items-center">
                  <Cta cta={c_primaryCTA} className="cta1-primarybg " />
                  <Cta cta={c_secondaryCTA} className="cta1-primarybg " />
                  <Cta cta={c_tertiaryCTA} className="cta1-primarybg " />
                </div>

                {/* Google Maps Section */}
                <div className="flex gap-8 mt-24">
                  <BsFacebook className="h-8 w-8" />
                  <BsTwitter className="h-8 w-8" />
                  <BsInstagram className="h-8 w-8" />
                  <BsLinkedin className="h-8 w-8" />
                  <BsYoutube className="h-8 w-8" />
                  <BsTiktok className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative  lg:-mr-8 xl:absolute xl:inset-0  w-1/2">
            <Image image={photoGallery[0]} className="!h-full" />
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="container mx-auto p-6 flex justify-between gap-28 text-primary">
        <div className="w-1/2">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-3xl">Welcome</span>
            <br />{" "}
            <span className="font-playFair">
              Hand & Stone Massage and Facial Spa in {address.city},{" "}
              {address.region}
            </span>
          </h2>
          <p className="text-xl mb-4">{description}</p>
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <Hours hours={hours} title="Hours" />
          <p className="text-3xl">Book an appointment</p>
          <button className="cta1-whitebg">Call {mainPhone}</button>
          <button className="cta1-whitebg">Book online</button>
          <p className="text-3xl">Find us</p>
          <button className="cta2-whitebg">Get Directions</button>
        </div>
      </section>
      {/* Introductury offers */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 text-primary">
          <div className="mx-auto sm:text-center">
            <h2 className="text-6xl font-semibold leading-7 font-playFair">
              Introductory Offers
            </h2>
          </div>
          <div className="mt-20 flow-root px-[8%]">
            <div className="grid grid-cols-3 gap-24 items-center">
              {c_relatedOffers.map((offer) => (
                <div key={offer.id} className="pt-16 lg:pt-0 text-center">
                  <h3 id={offer.id} className="text-xl leading-7 font-sofiaPro">
                    {offer.name}
                  </h3>
                  <p className="mt-6 flex items-baseline justify-center gap-x-1">
                    <span className="text-7xl font-bold tracking-tight  font-playFair">
                      <sup className="text-4xl -mt-3 mr-2">$</sup>
                      {offer.price.value}
                    </span>
                  </p>
                  <hr className="h-[1px] my-8 text-primary" />
                  <p className="leading-6 text-xl h-12 text-center">
                    {offer.shortDescriptionV2 && (
                      <LexicalRichText
                        serializedAST={JSON.stringify(
                          offer.shortDescriptionV2.json
                        )}
                      />
                    )}
                  </p>
                  <Cta
                    cta={offer.c_primaryCTA}
                    className="cta1-whitebg mx-auto mt-8"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Offers Section */}
      {c_relatedPromotions.map((item, index: number) => {
        return (
          <div className="relative bg-white" key={item.id}>
            <div
              className={`mx-auto flex  w-full ${index % 2 === 0 ? `flex-row` : `flex-row-reverse`}`}
            >
              <div
                className={`px-6  lg:px-0  w-1/2 flex items-center ${index % 2 === 0 ? `bg-primary text-white` : `bg-white text-primary`}`}
              >
                <div className="mx-auto lg:mx-0 px-24 text-center">
                  <div className="hidden sm:mt-32 sm:flex lg:mt-16 justify-center">
                    <div className="relative rounded-full px-3 py-1 text-2xl leading-6">
                      {item.c_category}
                    </div>
                  </div>
                  <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl font-playFair">
                    {item.name}
                  </h1>
                  {item.shortDescriptionV2 && (
                    <p className="mt-6 text-lg leading-8 ">
                      <LexicalRichText
                        serializedAST={JSON.stringify(
                          item.shortDescriptionV2.json
                        )}
                      />
                    </p>
                  )}
                  {item.c_primaryCTA && (
                    <div className="mt-10 flex items-center gap-x-6 justify-center">
                      <Cta
                        cta={item.c_primaryCTA}
                        className={`${index % 2 === 0 ? `cta1-primarybg` : `cta1-whitebg`}`}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="relative  w-1/2">
                <Image image={item.primaryPhoto} className="!h-full" />
              </div>
            </div>
          </div>
        );
      })}
      <footer className="bg-gray-900 text-white p-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2024 Hand & Stone Massage and Facial Spa. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Location;
