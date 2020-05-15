import { getChannels } from '../api/podcasts';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';

const Home = ({ channels }) => (
  <Layout title="Podcasts">
    <ChannelGrid channels={channels} />
  </Layout>
);

Home.getInitialProps = getChannels;

export default Home;
