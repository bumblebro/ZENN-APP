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
    <div className=" bg-gradient-to-r from-indigo-400 to-cyan-400 text-white px-6 py-6 rounded-lg flex flex-col gap-2">
      <h1>❝ {quote.quote} ❞</h1>
      <h2>   -{quote.author}</h2>
    </div>
  );
}

export default QuoteCard;
