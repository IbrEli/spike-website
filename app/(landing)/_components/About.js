import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div className="flex absolute -top-24 max-w-full overflow-clip">
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
      </div>
      <div id="about" className="max-w-[85rem] px-4 py-10 sm:py-14 mx-auto">
        <div className="my-7">
          <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center mt-14">
            About SPIKEY
          </h2>
          <h3 className="font-stopbuck text-2xl text-center italic text-black">
            {`(Team Spike)`}
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="">
            <Image
              className="h-full object-cover"
              src="/WoodLogo.png"
              width={700}
              height={700}
              alt="Dui Image"
            />
          </div>

          <div className="p-4 h-full sm:p-6">
            <h3 className="font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-justify sm:text-left">
              <p className="indent-12">
                <span className="text-3xl font-bold">SPIKEY</span>, also
                known as the{" "}
                <span className="font-semibold italic">{'"degenerate hedgehog"'}</span>{" "}
                In the shadowy corners of neon-lit casinos and smoke-filled backrooms, a legend was born. Spike was not just any hedgehog — he was a risk-taker, a strategist, and a dreamer. Once down on his luck, broke, and out of moves, he played his last hand… and won big. That single moment didn’t just change his life — it ignited a vision.
{" "}
              </p>
              <p className="indent-12 mt-3">
              Today, Spike isn’t chasing the small wins. He’s going for history. The mission? To rally a fearless community, storm the crypto world, and deliver the single largest pump in 24-hour history.
{" "}
                <span className=" italic font-bold">Spike</span> But Spike’s journey is more than just a coin — it’s a movement. Every $20K market cap milestone hits harder, with more liquidity injected into the pool straight from Spike’s own winnings. And when the time is right, the ultimate gamble begins: a real casino livestream.
              </p>
              <p className="indent-12 mt-3">
              Spike doesn’t walk alone. This is a community for the degens, the dreamers, and the high-rollers of the digital age. We’re not just betting on a meme coin — we’re betting on the story, the spectacle, and the chaos that comes with it.
              </p>
            </h3>
          </div>
        </div>

        <div className="mt-10 font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-center">
          <p>
            <span className="text-3xl font-bold">SPIKEY</span>{" "}
            started up his Hedge Fund on{" "}
            <span className="italic font-semibold">May 18, 2025</span>,
            after a tragic gambling losing spree.
          </p>
          <p className="text-4xl p-10">
            Now{" "}
            <span className="text-5xl font-bold underline decoration-duis">
              SPIKEY
            </span>{" "}
            is forever on{" "}
            <span className="text-5xl bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text font-bold">
              Solana
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
