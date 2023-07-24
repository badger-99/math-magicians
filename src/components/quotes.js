import { useState, useEffect } from 'react';

const Quotes = () => {
  // states
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Api call data
  const apiKey = 'xHr8HwBU7H/MU6z8/2+9GA==VwppmyXM5Ucuxbb7';
  const url = 'https://api.api-ninjas.com/v1/quotes?category=computers';

  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetch(url, {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
          },
        });
        const data = await result.json();
        setQuote(`${data[0].quote} -${data[0].author}`);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (hasError) {
    return (
      <div className="text-box" id="error">
        Something went wrong!
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-box border" id="loading">
        Loading...
      </div>
    );
  }

  // Main return
  return <div className="text-box border" id="quote">{ quote }</div>;
};
export default Quotes;
