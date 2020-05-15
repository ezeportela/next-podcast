import { Link } from '../routes';
import { slug } from '../helpers/slug';
import Subtitle from './Subtitle';

const PodcastGrid = ({ audioClips, title, onOpen }) => (
  <React.Fragment>
    {audioClips.length > 0 && title && <Subtitle title={title} />}

    {audioClips.map((clip) => (
      <Link
        route="podcast"
        params={{
          slugChannel: slug(clip.channel.title),
          idChannel: clip.channel.id,
          slug: slug(clip.title),
          id: clip.id,
        }}
        key={clip.id}>
        <a className="podcast" onClick={(evt) => onOpen(evt, clip)}>
          <h3>{clip.title}</h3>
          <div className="meta">{Math.ceil(clip.duration / 60)} minutes</div>
        </a>
      </Link>
    ))}

    <style jsx>{`
      .podcast {
        display: block;
        text-decoration: none;
        color: #333;
        padding: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }
      .podcast:hover {
        color: #000;
      }
      .podcast h3 {
        margin: 0;
      }
      .podcast .meta {
        color: #666;
        margin-top: 0.5em;
        font-size: 0.8em;
      }
    `}</style>
  </React.Fragment>
);

export default PodcastGrid;
