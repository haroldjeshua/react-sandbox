import "./App.css";

const AspectRatio = (props) => {
  const { ratio = 1 / 1, ...otherProps } = props;

  return (
    <div
      className="aspect-ratio"
      style={{ paddingTop: `${100 / ratio}%` }}
      {...otherProps}
    />
  );
};

const Gradient = (props) => {
  const { angle = 0, from, to } = props;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`,
      }}
    />
  );
};

const Palette = (props) => {
  const { from, to } = props;

  return (
    <figure className="palette">
      <AspectRatio>
        <Gradient angle={135} {...props} />
      </AspectRatio>
      <figcaption className="palette__text">
        {from} - {to}
      </figcaption>
    </figure>
  );
};

const Palettes = (props) => {
  const { palettes } = props;

  return (
    <div className="palettes">
      {palettes.map((palette) => (
        <Palette key={palette.toString()} {...palette} />
      ))}
    </div>
  );
};

const Grid = (props) => {
  return <div className="grid" {...props} />;
};

const App = () => {
  const palettes = [
    {
      from: "#b08d52",
      to: "#4b1043",
    },
    {
      from: "#0bc788",
      to: "#013d0a",
    },
    {
      from: "#c500f2",
      to: "#060219",
    },
    {
      from: "#bcbf8f",
      to: "#712317",
    },
    {
      from: "#ef23a2",
      to: "#070062",
    },
    {
      from: "#4cc8b3",
      to: "#160046",
    },
    {
      from: "#bd2122",
      to: "#c0f8d0",
    },
    {
      from: "#60b27e",
      to: "#0b2a9a",
    },
    {
      from: "#822b58",
      to: "#ffc168",
    },
    {
      from: "#efaf3f",
      to: "#6c1d26",
    },
    {
      from: "#00be55",
      to: "#0f102a",
    },
    {
      from: "#a53ca6",
      to: "#e9eea0",
    },
    {
      from: "#fbedf6",
      to: "#835861",
    },
    {
      from: "#ba8a20",
      to: "#0e245f",
    },
    {
      from: "#0b8b76",
      to: "#0f0c16",
    },
    {
      from: "#b54163",
      to: "#dffa83",
    },
    {
      from: "#9b018a",
      to: "#a7e293",
    },
    {
      from: "#ef71b6",
      to: "#020c4f",
    },
  ];

  return (
    <div className="App">
      <Grid>
        <Palettes palettes={palettes} />
      </Grid>
    </div>
  );
};

export default App;
