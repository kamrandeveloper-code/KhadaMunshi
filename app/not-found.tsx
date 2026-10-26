import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap narrow center">
        <h1>Yeh page nahi mila</h1>
        <p className="lead">Link galat ho sakta hai. Home page ya blog par wapas jayein.</p>
        <Link className="btn" href="/">Home</Link>
      </div>
    </section>
  );
}
