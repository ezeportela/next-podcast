const Subtitle = ({ title }) => (
  <React.Fragment>
    <h2>{title}</h2>
    <style jsx>{`
      h2 {
        padding: 5px;
        font-size: 0.9em;
        font-weight: 600;
        margin: 0;
        text-align: center;
      }
    `}</style>
  </React.Fragment>
);

export default Subtitle;
