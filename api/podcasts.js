import 'isomorphic-fetch';
import url from 'url';

const generateURI = (pathname) => {
  const uri = {
    hostname: 'api.audioboom.com',
    pathname,
    protocol: 'https',
  };

  return url.format(uri);
};

export const getChannels = async () => {
  try {
    const url = generateURI('/channels/recommended');
    const request = await fetch(url);

    if (request.status >= 400) {
      res.statusCode = request.status;
      return { channels: null, statusCode: request.status };
    }

    const { body: channels } = await request.json();
    return { channels, statusCode: 200 };
  } catch (err) {
    res.statusCode = 503;
    return { channels: null, statusCode: 503 };
  }
};

export const getChannel = async ({ query, res }) => {
  try {
    const { id } = query;

    const channelURL = generateURI(`/channels/${id}`);
    const seriesURL = generateURI(`/channels/${id}/child_channels`);
    const clipsURL = generateURI(`/channels/${id}/audio_clips`);

    const [reqChannel, reqSeries, reqAudioClips] = await Promise.all([
      fetch(channelURL),
      fetch(seriesURL),
      fetch(clipsURL),
    ]);

    if (reqChannel.status >= 400) {
      res.statusCode = reqChannel.status;
      return {
        channel: null,
        audioClips: null,
        series: null,
        statusCode: reqChannel.status,
      };
    }

    const {
      body: { channel },
    } = await reqChannel.json();
    const {
      body: { channels: series },
    } = await reqSeries.json();
    const {
      body: { audio_clips: audioClips },
    } = await reqAudioClips.json();

    return { channel, series, audioClips, statusCode: 200 };
  } catch (err) {
    res.statusCode = 503;
    return { channel: null, audioClips: null, series: null, statusCode: 503 };
  }
};

export const getPodcast = async ({ query, res }) => {
  try {
    const { id } = query;

    const url = generateURI(`/audio_clips/${id}.mp3`);
    const request = await fetch(url);

    if (request.status >= 400) {
      res.statusCode = req.status;
      return { clip: null, statusCode: req.status };
    }

    const {
      body: { audio_clip: clip },
    } = await request.json();

    return { clip, statusCode: 200 };
  } catch (err) {
    res.statusCode = 503;
    return { clip: null, statusCode: 503 };
  }
};
