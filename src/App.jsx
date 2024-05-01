import { useState } from "react";
import Spinner from "./Spinner";

const App = () => {

  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-sky-950" style={{fontFamily: 'system-ui'}}>
      <h1 className="text-white text-3xl mb-4">URL Shortener</h1>
      <div>
        <input
          type="text"
          className="border h-10 rounded p-2 shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter URL to shorten"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {loading ? <Spinner /> : 'Shorten URL'}
        </button>
      </div>
      <h2 className="text-white">Shortened URL:</h2>
      <a className="text-sky-200" href="#">url</a>
    </main>
  );
};

export default App;
