"use client";

import Image from "next/image";
import "./hero.scss";

import headImgDesktop from "@/public/assets/images/image-web-3-desktop.jpg";
import headImgMobile from "@/public/assets/images/image-web-3-mobile.jpg";
import retroImg from "@/public/assets/images/image-retro-pcs.jpg";
import laptopImg from "@/public/assets/images/image-top-laptops.jpg";
import gamingImg from "@/public/assets/images/image-gaming-growth.jpg";

export default function Hero() {
  return (
    <section id="hero">
      <div className="headline-img">
        <Image
          className="head-img-desktop"
          src={headImgDesktop}
          alt="headImgDesktop"
        />
        <Image
          className="head-img-mobile"
          src={headImgMobile}
          alt="headImgMobile"
        />
      </div>
      <div className="headline-title">
        <h3>The Bright Future of Web 3.0?</h3>
      </div>
      <div className="headline-content">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of people. But is it really
          fulfilling its promise?
        </p>
        <button>READ MORE</button>
      </div>
      <div className="sidebar">
        <h4>New</h4>
        <div className="sidebar-articles">
          <div className="one">
            <h5>
              <a>Hydrogen VS Electric Cars</a>
            </h5>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="two">
            <h5>
              <a>The Downsides of AI Artistry</a>
            </h5>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="three">
            <h5>
              <a>Is VC Funding Drying Up?</a>
            </h5>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
      <div className="article-one">
        <div className="img-one">
          <Image src={retroImg} alt="retroImg" />
        </div>
        <div className="content-one">
          <h4>01</h4>
          <h5>
            <a>Reviving Retro PCs</a>
          </h5>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="article-two">
        <div className="img-two">
          <Image src={laptopImg} alt="laptopImg" />
        </div>
        <div className="content-two">
          <h4>02</h4>
          <h5>
            <a>Top 10 Laptops of 2022</a>
          </h5>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="article-three">
        <div className="img-three">
          <Image src={gamingImg} alt="gamingImg" />
        </div>
        <div className="content-three">
          <h4>03</h4>
          <h5>
            <a>The Growth of Gaming</a>
          </h5>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </section>
  );
}
