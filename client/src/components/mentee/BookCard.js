import React from 'react';
const BookCard = ({
  thumbnail,
  title,
  pageCount,
  language,
  description,
  authors,
  publisher,
  previewLink,
  infoLink
}) => {
  // States

  return (
    <div className="card d-flex m-auto" style={{ width: '250px' }}>
      <img className="card-img-top"
        top
        style={{ width: '100%', height: '233px' }}
        src={thumbnail}
        alt={title}
      />
      <div className="card-body">
        <h5 className='card-title'>{title}</h5>
        <button type="button" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      More info
      </button>
      </div>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <img src={thumbnail} alt={title} style={{ height: '233px' }} />
            <div>
              <p>Page Count: {pageCount}</p>
              <p>Language : {language}</p>
              <p>Authors : {authors}</p>
              <p>Publisher : {publisher}</p>
              <p>Description: {description}</p>
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <a
              href={previewLink}
              color='white'
              className='btn  btn-primary'
              target='_blank'
              rel='noopener noreferrer'
            >
              Preview Link
            </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BookCard;