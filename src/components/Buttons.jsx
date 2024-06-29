export function Button({ text, type, useAos }) {
  switch (type) {
    case "standard":
      return <StandardButton text={text} useAos={useAos} />;
    case "important":
      return <ImportantButton text={text} useAos={useAos} />;
    default:
      return <StandardButton text={text} useAos={useAos} />;
  }
}

function StandardButton({ text, useAos }) {
  if (useAos) {
    return (
      <button
        className="rounded-sm outline outline-white text-xl 
        px-6 py-3 m-5 standard-btn-hover"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        {text}
      </button>
    );
  } else {
    return (
      <button className="rounded-sm outline outline-white bg-transparent text-white 
      px-4 py-2 m-5 hover:bg-white hover:text-neutral-800">
        {text}
      </button>
    );
  }
}

function ImportantButton({ text, useAos }) {
  if (useAos) {
    return (
      <button
        className="rounded-sm bg-white text-black px-4 py-2"
        data-aos="fade-in"
        data-aos-duration="800"
      >
        {text}
      </button>
    );
  } else {
    return (
      <button className="rounded-sm bg-white text-black px-4 py-2">
        {text}
      </button>
    );
  }
}
