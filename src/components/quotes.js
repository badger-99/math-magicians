import { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState('');
  const [hasError, setHasError] = useState('');

  useEffect(() => {
    
  }, [])

  return <div>{ quote }</div>;
};
export default Quotes;
