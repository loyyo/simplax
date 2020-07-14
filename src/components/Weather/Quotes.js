import React, { useState } from 'react';

const api = 'https://type.fit/api/quotes';

const Quotes = () => {
	const [text, setText] = useState('');
	const [author, setAuthor] = useState('');
	const [quotesList, setQuotesList] = useState({});

	const getQuotesList = () => {
		fetch(api)
			.then((res) => res.json())
			.then((result) => {
				setQuotesList(result);
			});
	};
	getQuotesList();

	const randomQuote = () => {
		const index = Math.floor(Math.random() * quotesList.length);
		setText(quotesList[index].text);
		setAuthor(quotesList[index].author);
	};

	return (
		<div className='quote-machine'>
			<div className='text-quote'>{text}</div>
			<div className='author-quote'>{author != null ? author : 'Unknown'}</div>
			<button onClick={randomQuote}>Get Quote</button>
		</div>
	);
};

export default Quotes;
