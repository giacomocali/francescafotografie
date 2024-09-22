export function Link({ text, href }) {
  return (
    <a
      href={href}
      className="rounded-2xl hover:bg-yellow-400 outline hover:outline-yellow-400 hover:shadow-2xl hover:shadow-yellow-400 active:outline-0 
        text-xl
        px-3 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3 m-5 
        standard-btn 
       "
    >
      {text}
    </a>
  );
}