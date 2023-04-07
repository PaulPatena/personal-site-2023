import { useEffect, useState } from "react";
import MyModal from "@/components/MyModal";
import Head from "next/head";

const myCerts = {
  baseUrl: "https://paulpatena.com/public_images/certs",
  certs: [
    "AWSArchitect960x742.jpg",
    "AWSDeveloper960x742.jpg",
    "scrum.jpg",
    "CppTestResult2018-720x960.jpg",
    "Python3TestResult2020-720x960.jpg",
    "plusight-creds.png",
    "lbs.jpg",
    "solutions-architect-course-min.jpg",
    "nodejs.jpg",
    "react-cert-min.jpg",
    "py-web.jpg",
    "django.jpg",
    "udemy-aws-solarch-compressed.jpg",
    "web-dev2.jpg",
    "kotlin.jpg",
    "interactive-python.jpg",
    "py-fund.jpg",
    "cs.jpg",
    "estimation.jpg",
    "embed.jpg",
    "swift.jpg",
    "css.jpg",
    "html.jpg",
    "jquery.jpg",
    "js.jpg",
    "mysql.jpg",
    "php.jpg",
  ]
}

export default function Certs() {
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const [ currentCertIdx, setCurrentCertIdx ] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("keydown", keyboardHandler)
    return () => window.removeEventListener("keydown", keyboardHandler)
  }, [])

  const navigateBack = () => setCurrentCertIdx((idx) => idx > 0 ? idx - 1 : myCerts.certs.length - 1);
  const navigateForward = () => setCurrentCertIdx((idx) => idx >= myCerts.certs.length - 1 ? 0 : idx + 1);

  const keyboardHandler = (event: any) => {
    if (event.key === 'ArrowLeft') {
      navigateBack();
    }
    if (event.key === 'ArrowRight') {
      navigateForward();
    }
    if (event.key === 'Escape') {
      setIsModalOpen(false);
    }
  };

  return (
    <>
    <Head>
      <title>Training certs</title>
      <meta name="description" content="The page on my website that displays my earned course certificates showcases my expertise in a variety of IT technologies, including Node JS, React, AWS, Python, and C#. It provides a visual representation of my commitment to learning and staying up-to-date with the latest advancements in the field, and demonstrates my ability to apply these technologies to real-world scenarios."/>
    </Head>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {myCerts.certs.map((cert, idx) => (
            <div
              className="cursor-pointer"
              key={`div-${cert}`}
            >
              <img src={`${myCerts.baseUrl}/${cert}`} alt={cert}
                   className="rounded"
                   onClick={() => {
                     setCurrentCertIdx(idx);
                     setIsModalOpen(true);
                   }}/>
            </div>
          ))
          }
        </div>
      <MyModal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <>
          <div className="text-sky-50 text-5xl pr-4 cursor-pointer"
               onClick={navigateBack}>
            &#8592;
          </div>
          <div className={'w-full md:w-3/4 h-full md:h-3/4'}>
            <img src={`${myCerts.baseUrl}/${myCerts.certs[currentCertIdx]}`} alt={myCerts.certs[currentCertIdx]}
                 className="m-auto h-full object-contain overflow-hidden rounded"
            />
          </div>
          <div className="text-sky-50 text-5xl pl-4 cursor-pointer"
               onClick={navigateForward}>
            &#8594;
          </div>
        </>
      </MyModal>
    </>
  )
}
