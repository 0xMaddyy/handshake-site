import { site } from "./content";

const practices = [
  {
    index: "01",
    title: "Build",
    text: "Pages and the APIs behind them, written so someone else can run the same project.",
  },
  {
    index: "02",
    title: "Preview",
    text: "A private URL from the terminal, so a change can be opened before it goes live.",
  },
  {
    index: "03",
    title: "Publish",
    text: "A commit on GitHub under my name, which ships the next version of this page.",
  },
];

export default function Home() {
  return (
    <div className="page">
      <header className="top">
        <a className="brand" href="#top">
          {site.name}
        </a>
        <a className="github" href={site.github}>
          GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="top">
        <p className="kicker">{site.role}</p>
        <h1>{site.name}</h1>
        <p className="intro">{site.intro}</p>

        <section className="note" aria-labelledby="note-label">
          <p id="note-label">Latest note</p>
          <p className="note-text">{site.note}</p>
        </section>

        <section className="practices" aria-label="How I ship">
          {practices.map((item) => (
            <article key={item.index}>
              <p className="index">{item.index}</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>
      </main>

      <footer>
        <p>One-page site · run locally, previewed, then pushed.</p>
        <a href={site.github}>{site.github.replace("https://", "")}</a>
      </footer>
    </div>
  );
}
