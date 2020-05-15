const Title = ({ title }) => (
  <React.Fragment>
    <h1>{title}</h1>
    <style jsx>{`
      h1 {
        font-weight: 600;
        padding: 15px;
      }
    `}</style>
  </React.Fragment>
);

export default Title;
