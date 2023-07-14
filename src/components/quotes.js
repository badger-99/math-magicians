import { useState, useEffect } from 'react';

const Quotes = () => {
  // states
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

// Api call data
  const apiKey = 'xHr8HwBU7H/MU6z8/2+9GA==VwppmyXM5Ucuxbb7';
  const category = 'computers'
  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`

  // useEffect
  useEffect(() => {
    setIsLoading(true)
    try {fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json);
      setQuote(`${response.quote} -${response.author}`)
    }
    catch (error) {
      setHasError(true);
    }
    setIsLoading(false)
  }, [])

  if (hasError) return (
    <div className='text-box' id='error'>
      Something went wrong!
    </div>
  );

  if(isLoading) return (
    <div className='text-box' id='loading'>
      Loading...
    </div>
  );

  // Main return
  return <div className='text-box' id='quote'>{ quote }</div>;
};
export default Quotes;
