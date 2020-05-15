import { Link } from '../routes';
import { slug } from '../helpers/slug';
import Subtitle from './Subtitle';

const ChannelGrid = ({ channels, title }) => (
  <React.Fragment>
    {channels.length > 0 && title && <Subtitle title={title} />}

    <div className="channels">
      {channels.length > 0 &&
        channels.map((channel) => (
          <Link
            route="channel"
            params={{ slug: slug(channel.title), id: channel.id }}
            key={channel.id}>
            <a className="channel">
              <img src={channel.urls.logo_image.original} />
              <h2>{channel.title}</h2>
            </a>
          </Link>
        ))}
    </div>

    <style jsx>{`
      .channels {
        display: grid;
        grid-gap: 15px;
        padding: 15px;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      }

      .channel {
        display: block;
        border-radius: 3px;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
        margin-bottom: 0.5em;
      }

      .channel img {
        width: 100%;
      }
    `}</style>
  </React.Fragment>
);

export default ChannelGrid;
