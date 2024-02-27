import axios from "axios";
import { useEffect, useState } from "react";

function QuoteCard() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const quotedata = async () => {
      const fetch = await axios.get("https://api.quotable.io/quotes/random");
      console.log(fetch.data);
      setQuote({ quote: fetch.data[0].content, author: fetch.data[0].author });
    };
    quotedata();
  }, []);

  return (
    <div className="bg-[#1f1f1f] px-6 py-4 text-white   flex flex-col gap-3 md:w-6/12 md:h-full lg:w-full h-full rounded-lg sm:rounded-3xl">
      <h1 className="font-semibold">❝ {quote.quote} ❞</h1>
      <h2 className="font-medium"> - {quote.author}</h2>
    </div>
  );
}

export default QuoteCard;
