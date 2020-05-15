const Banner = ({ style }) => (
  <React.Fragment>
    <div className="banner" style={style} />
    <style jsx>{`
      .banner {
        width: 100%;
        padding-bottom: 25%;
        background-position: 50% 50%;
        background-size: cover;
        background-color: #aaa;
      }
    `}</style>
  </React.Fragment>
);

export default Banner;
