export function Link({ text, type, href }) {
  switch (type) {
    case "standard":
      return <StandardButton text={text} href={href} />;
    case "important":
      return <ImportantButton text={text} href={href} />;
    default:
      return <StandardButton text={text} href={href} />;
  }
}

function StandardButton({ text, href }) {
  return (
    <a
      href={href}
      className="rounded-lg outline outline-white text-xl 
        px-3 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3 m-5   standard-btn active:outline-0"
    >
      {text}
    </a>
  );
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
