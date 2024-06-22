import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Next.js App!</p>
      <Link href="/introduce/introduce">
        Go to Introduce Page
      </Link>
    </div>
  );
}

export default Home;