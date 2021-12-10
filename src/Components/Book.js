import axios from 'axios';
import { useEffect, useState } from 'react';

function Book({selectedBook}){

    const [selectedBookData, setSelectedBookData] = useState(null);

    useEffect(() => {
        axios.get(`https://csc225.mockable.io/books/${selectedBook}`).then((r) => setSelectedBookData(r.data));
    }, [selectedBook]);

    // const selectedBook = props.selectedBook;
    // const { selectedBook } = props;
    if(!selectedBookData){
        return <p>Loading....</p>;
    }

    const {
        author,
        country,
        language,
        link,
        pages,
        title,
        year,
        cover
    } = selectedBookData;

    return <div>
        <img style={{maxHeight: '300px'}} src={cover} alt={title} />
        <p>{title} ({year}) by {author}</p>
        <p>Language: {language}</p>
        <p>Country: {country}</p>
        <p>Pages: {pages}</p>
        <p><a href={link} target="_blank" rel="noopener noreferrer">
                More Information &raquo;
            </a>
        </p>

    </div>;
}

export default Book;