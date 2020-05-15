import { getChannel } from '../api/podcasts';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import PodcastGrid from '../components/PodcastGrid';
import Title from '../components/Title';
import Banner from '../components/Banner';
import { useState } from 'react';
import PodcastPlayer from '../components/PodcastPlayer';
import Error from './_error';

const Channel = ({ channel, series, audioClips, statusCode }) => {
  const [openPodcast, setOpenPodcast] = useState(null);

  const onOpenPodcast = (evt, podcast) => {
    evt.preventDefault();
    setOpenPodcast(podcast);
  };

  const onClosePodcast = () => setOpenPodcast(null);

  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout title={channel.title}>
      <Banner
        style={{
          backgroundImage: `url(${channel.urls.banner_image.original})`,
        }}
      />

      {openPodcast && (
        <div className="modal">
          <PodcastPlayer clip={openPodcast} onClose={onClosePodcast} />
        </div>
      )}

      <Title title={channel.title} />

      <ChannelGrid channels={series} title="Series" />

      <PodcastGrid
        audioClips={audioClips}
        title="Últimos Podcasts"
        onOpen={onOpenPodcast}
      />

      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
        }
      `}</style>
    </Layout>
  );
};

Channel.getInitialProps = getChannel;

export default Channel;
