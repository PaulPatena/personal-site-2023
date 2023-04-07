import Head from "next/head";

export default function Videos() {
  const videoLinks = [ {
    src: 'https://www.youtube.com/embed/UHfnlHlAXYU',
    text: 'IoT Smart Button having remote tracking and SMS notifications.'
  }, {
    src: 'https://www.youtube.com/embed/sHBQciVpgmk',
    text: 'Opening my garage door using web interface connected to my microcontroller, switch and key fob.'
  }, {
    src: 'https://www.youtube.com/embed/OsXU2uyPV80',
    text: 'Demonstrating Internet of Things by controlling LED lights using web interface.'
  }, {
    src: 'https://www.youtube.com/embed/HG8vboyqRLM',
    text: 'Demo of a relay switch controlling a 240V supply to a lamp.'
  }, {
    src: 'https://www.youtube.com/embed/4b6prDvchfw',
    text: 'Snake Game implemented with 4x4 switch, bare-metal arduino uno, neopixel matrix.'
  }, {
    src: 'https://www.youtube.com/embed/Tx8GTx0hlSc',
    text: 'Snake Game implemented with gyroscrope sensors, bare-metal arduino uno, and neopixel matrix.'
  } ]

  return (<>
      <Head>
        <title>Home projects</title>
        <meta name="description"
              content="The page on my website that showcases videos of my home projects provides a glimpse into my creative and hands-on abilities. It allows visitors to see the results of my hard work and dedication, as well as my attention to detail and problem-solving skills. Through these videos, I can demonstrate my passion for DIY projects and my ability to bring ideas to life."/>
      </Head>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {videoLinks.map(video => (<div key={`${video.text}--card`} className="rounded">
            <iframe src={video.src}
                    className="border-0 rounded-t w-full
                  h-52 md:h-60 lg:h-72 xl:h-80
                  "
                    allowFullScreen
            />
            <div className="bg-primary text-sky-50 p-2 rounded-b text-sm">
              {video.text}
            </div>
          </div>))}

      </div>
    </>)
}