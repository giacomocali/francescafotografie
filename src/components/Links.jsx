export function Link({ text, type, useAos, href }) {
  switch (type) {
    case "standard":
      return <StandardButton text={text} useAos={useAos} href={href} />;
    case "important":
      return <ImportantButton text={text} useAos={useAos} href={href} />;
    default:
      return <StandardButton text={text} useAos={useAos} href={href} />;
  }
}

function StandardButton({ text, useAos, href }) {
  if (useAos) {
    return (
      <a
        href={href}
        className="rounded-sm outline outline-white text-xl 
        px-6 py-3 m-5 standard-btn-hover"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        {text}
      </a>
    );
  } else {
    return (
      <a
        href={href}
        className="rounded-sm outline outline-white bg-transparent text-white 
      px-4 py-2 m-5 hover:bg-white hover:text-neutral-800"
      >
        {text}
      </a>
    );
  }
}

function ImportantButton({ text, useAos, href }) {
  if (useAos) {
    return (
      <a
        href={href}
        className="rounded-sm bg-white text-black px-4 py-2"
        data-aos="fade-in"
        data-aos-duration="800"
      >
        {text}
      </a>
    );
  } else {
    return (
      <a href={href} className="rounded-sm bg-white text-black px-4 py-2">
        {text}
      </a>
    );
  }
}
