import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
        <Helmet>
            <meta name="title" content="M.T. Tasin" />
            <meta name="description" content="I am a Full Stack Web Developer with the skills of React Django and SQL." />
            <meta property="og:title" content="M.T. Tasin" />
            <meta property="og:description" content="I am a Full Stack Web Developer with the skills of React Django and SQL." />
            <meta property="og:image" content="/favicon.png" />
            <meta property="og:url" content="https://tasinblog.com" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="M.T. Tasin" />
            <meta name="twitter:description" content="I am a Full Stack Web Developer with the skills of React Django and SQL." />
            <meta name="twitter:image" content="/favicon.png" />
            <meta name="twitter:url" content="https://tasinblog.com" />
            <title>M.T. Tasin</title>
            <base href="https://tasinblog.com" />
        </Helmet>




        <div className="bg-black h-[100%] text-8xl w-full flex flex-col justify-center items-center text-white">
          <h1>M.T. Tasin</h1>
          <p className="text-3xl league-spartan">I am a Full Stack Web Developer.</p>
        </div>
    </>
  );
}
