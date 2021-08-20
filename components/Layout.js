import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Demo NextJS</title>
      </Head>
      <header>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/documents">
              <a>Document</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
