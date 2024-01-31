import Link from "next/link";
import "../../globals.css"

export const dynamic ="force-dynamic";

export default function Home() {
  console.log('app router log 1');
  console.log('app router log 2');
  return (
    <div className="p-4">
      <header className="my-8 flex space-x-4">
        <Link href="/app-router" className="underline text-blue-500">
          App Router
        </Link>
        <Link href="/pages-router" className="underline text-blue-500">
          Pages Router
        </Link>
      </header>
      <main className="flex flex-col space-y-8">
        <h1 className="text-4xl">App Router</h1>
        <p>
          View the Vercel deployment runtime logs to compare the logging behavior between the app router and the pages router.
        </p>
        <p>
         🔗{' '}
         <a
            className="underline text-blue-500"
            href="https://github.com/iFixit/vercel-app-router-logging-example"
            target="_blank"
          >
            View on GitHub
          </a>
        </p>
      </main>
    </div>
  );
}
