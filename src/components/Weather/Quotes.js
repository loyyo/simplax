import React, { useState } from 'react';

const api = 'https://type.fit/api/quotes';

const Quotes = () => {
	const [text, setText] = useState('');
	const [author, setAuthor] = useState('');
	const [quotesList, setQuotesList] = useState({});

	const getQuotesList = () => {
		fetch(api, {
			method: 'GET',
			mode: 'cors',
		})
			.then((res) => res.json())
			.then((result) => {
				setQuotesList(result);
			});
	};
	getQuotesList();

	const randomQuote = () => {
		const index = Math.floor(Math.random() * quotesList.length);
		setText(`"${quotesList[index].text}"`);
		setAuthor(quotesList[index].author !== null ? `- ${quotesList[index].author}` : '- Unknown');
	};

	return (
		<div className='quote-machine'>
			<div className='text-quote'>{text}</div>
			<div className='author-quote'>{author}</div>
			<button onClick={randomQuote}>Get Quote</button>
		</div>
	);
};

export default Quotes;
