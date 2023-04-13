import { useCallback, useEffect, useState } from "react";
import styles from './index.module.css';
import { SplitPaper } from "@/components/SplitPaper";
import { HelloThere } from "@/components/HelloThere";
import Head from 'next/head';

const myContent = [
  {
    bgColor: '#129b34',
    bgImg: 'riceFields',
    title: 'My background',
    summary: 'I started my career in 2008. I continuously learn new technologies to expand my skillset.' +
      ' I enjoy collaborating with people to deliver the best outcome. In my current job, my primary role is' +
      ' front-end development whilst also helping out as a solution architect and occasionally doing back-end work.'
  },
  {
    bgColor: '#2081c1',
    bgImg: 'ferrisWheel',
    title: 'Front-end skills',
    summary: 'Typescript, React, Hooks, NextJs, Redux, Vue, Vuex, SCSS'
  },
  {
    bgColor: '#AC8EFF',
    bgImg: 'mountain',
    title: 'Back-end skills',
    summary: 'Java/Springboot, Python/Flask, NodeJs, Mongo, SQL'
  },
  {
    bgColor: '#AF0E0E',
    bgImg: 'ferrari',
    title: 'Cloud skills',
    summary: 'AWS, Docker, CodeFresh, TeamCity, Kubernetes'
  }
];

export default function Home() {
  const [ isMobile, setIsMobile ] = useState(false);
  const [ height, setHeight ] = useState<number>(0);

  const handleResize = useCallback(() => {
    setHeight(window.innerHeight);
    setIsMobile(window.innerWidth <= 640);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Paul&apos;s profile</title>
        <meta name="description" content="On my landing page, I showcase my skills as a developer, emphasizing my experience in React frontend, Java backend, and AWS cloud technologies, as well as my ability to create responsive, dynamic web applications. I provide a clear overview of my expertise to potential clients or employers, highlighting my strengths and demonstrating my value as a developer." />
      </Head>
      <HelloThere height={height} isMobile={isMobile}/>
      {
        myContent.map(content => (
          <div key={content.title}
               className={styles[content.bgImg]}
               style={{ backgroundAttachment: isMobile ? 'inherit' : 'fixed' }}
          >
            <SplitPaper bgColor={content.bgColor}
                        title={content.title}
                        isMobile={isMobile}
                        subtitle={content.summary}
            />
          </div>
        ))
      }
    </>
  )
}
