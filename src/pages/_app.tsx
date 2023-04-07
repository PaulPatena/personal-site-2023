import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link';
import MyHeader from "@/components/MyHeader";
import { useRouter } from "next/router";

const myRoutes = [
  { path: '/', title: 'My profile' },
  { path: '/certs', title: 'Training certs' },
  { path: '/videos', title: 'Home projects' }
];

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col bg-slate-100">
      <MyHeader/>
      <div className="w-full h-[calc(100vh-56px)] flex-1 flex flex-col md:flex-row">
        <div className="md:w-48 bg-background p-2 flex flex-col text-xl m-2 rounded">
          {myRoutes.map((link, idx) => (
            <Link href={link.path}
                  key={`link--${link.path}`}
                  className={
                    `px-2` +
                    (router.route === link.path ? ' rounded shadow-lg text-secondary' : '') +
                    (idx > 0 ? ' mt-2' : '')
                  }
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex-1 bg-background rounded overflow-scroll mt-0 mb-2 mx-2 md:mt-2 md:ml-0"
             id="@@main-window"
        >
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
