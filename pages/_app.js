import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/fontawesome.css";
import "../styles/themify-icons.css";
import "../styles/animate.css";
import "../styles/sass/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <title>Kami Finance - Business and Visa Consultancy</title>
      <link rel="icon" href="" />
      <meta
        name="description"
        content="Kami Finance provides expert business and visa consultancy services to help you navigate complex processes with ease."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="business consultancy, visa consultancy, Kami Finance, immigration, business services"
      />
      {/* Open Graph metadata for social media */}
      {/* <meta
        property="og:title"
        content="Kami Finance - Business and Visa Consultancy"
      />
      <meta
        property="og:description"
        content="Kami Finance provides expert business and visa consultancy services to help you navigate complex processes with ease."
      />
      <meta property="og:image" content="/path/to/large/image.jpg" /> */}
      {/* Update with the correct path */}
      {/* <meta property="og:url" content="https://www.kamifinance.com" /> */}
      {/* Update with your website URL */}
      {/* <meta property="og:type" content="website" /> */}
      {/* Twitter Card metadata */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Kami Finance - Business and Visa Consultancy"
      />
      <meta
        name="twitter:description"
        content="Kami Finance provides expert business and visa consultancy services to help you navigate complex processes with ease."
      />
      <meta name="twitter:image" content="/path/to/large/image.jpg" />{" "} */}
      {/* Update with the correct path */}

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
