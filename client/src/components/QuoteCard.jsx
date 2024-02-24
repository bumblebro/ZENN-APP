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
    <div className="bg-[#1f1f1f] text-white px-8 py-6 rounded-3xl flex flex-col gap-3  ">
      <h1 className="font-semibold">❝ {quote.quote} ❞</h1>
      <h2 className="font-medium"> - {quote.author}</h2>
    </div>
  );
}

export default QuoteCard;
