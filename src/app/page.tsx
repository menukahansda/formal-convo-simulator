// landing page
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/practice">
        Go to practice
      </Link>
    </div>
  );
}

// navbar - explore/home , login, practice