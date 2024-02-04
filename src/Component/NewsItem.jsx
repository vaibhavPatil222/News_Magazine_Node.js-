import newsImg from '../assets/newsImg.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="col-md-3 mb-3 mt-4">
      <div className="card bg-dark text-light px-2 py-2">
        <img src={src ? src : newsImg} style={{ height:'180px', width: '100%' }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">{description ? description.slice(0, 90) : 'News is known more  world news Golden State will almost certainly make a move before the Feb. 8 deadline'}</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

