import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-semibold mb-4">404</h1>
      <p className="mb-6">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="text-accent font-medium underline"
      >
        Go back home
      </Link>
    </section>
  );
}
