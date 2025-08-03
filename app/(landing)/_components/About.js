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
            About SPIKE
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
                <span className="text-3xl font-bold">SPIKE</span>, also
                known as the{" "}
                <span className="font-semibold italic">{'"degenerate hedgehog"'}</span>{" "}
                Who Is Spikey?
Nobody really knows.
Some say he was a down-bad gambler living off instant noodles and roulette spins.
Others say he was a Wall Street quant who hedged wrong and disappeared into a casino's neon haze.
{" "}
              </p>
              <p className="indent-12 mt-3">
              Now? He’s not a man anymore.
He’s a hedgehog — and he’s out for vengeance.{" "}
                <span className=" italic font-bold">Spike</span> into a staple of
                internet humor.
              </p>
              <p className="indent-12 mt-3">
              $SPIKEY: Born in Chaos
No VC backing. No presale. No insider allocations.
Every win from a livestreamed casino run gets pumped straight into the liquidity pool.
No promises, no roadmaps — just pure, unfiltered degenerate energy.
              </p>
            </h3>
          </div>
        </div>

        <div className="mt-10 font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-center">
          <p>
            <span className="text-3xl font-bold">SPIKE</span>{" "}
            started up his Hedge Fund on{" "}
            <span className="italic font-semibold">May 18, 2025</span>,
            after a tragic gambling losing spree.
          </p>
          <p className="text-4xl p-10">
            Now{" "}
            <span className="text-5xl font-bold underline decoration-duis">
              SPIKE
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
