export function Link({ text, href }) {
  return (
    <a
      href={href}
      className="rounded-lg outline outline-black text-xl
        px-3 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3 m-5 standard-btn active:outline-0"
    >
      {text}
    </a>
  );
}