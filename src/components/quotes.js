import { useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState('');
  const [hasError, setHasError] = useState('');

  return <div>{ quote }</div>;
};
export default Quotes;
