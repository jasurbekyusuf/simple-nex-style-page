import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>Oggusto | Home </title>
      </Head>
      <div>
        <div className="Home-banner">
          <div className="home-banner-container">
            <div className="home-banner-content">
              <div>
                <img src="Rectangle4.jpg" alt="" />
              </div>
              <div className="home-banner-text">
                <p className="home-banner-text-p ppp">SEYEHAT BY ONE&ONLY</p>
                <h1 className="home-banner-text-h1">
                  Türkiye'de Sonbaharda Gidebileceğiniz Oteller
                </h1>
                <p className="home-banner-text-p pppp">
                  Türkiye’nin dört bir yanında tarih, gastronomi ve kültüre
                  doyabileceğiniz destinasyonları ve sonbaharda gidebileceğiniz
                  en iyi otelleri keşfedin.
                </p>
                <button className="home-banner-text-button">
                  DETAYLI İNCELEYİN
                </button>
              </div>
            </div>
            <div className="home-banner-line">
              <div className="lines lines-one">
                <div></div>
              </div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
            </div>
          </div>
        </div>
        <div className="Popular-section">
          <div className="wrapper">
            <div className="card-photos">
              <h3>Popüler Yazılar</h3>
              <div className="block">
                <div className="box">
                  <img src="1.jpg" alt="" />
                  <p className="p-1"> gastronom by mandarin o'riental </p>
                  <p className="p-2">
                    Türkiye'nin Dört Bir Yanındaki Gastronomi Vahaları
                  </p>
                </div>
                <div className="box">
                  <img src="2.jpg" alt="" />
                  <p className="p-1">otomobil</p>
                  <p className="p-2">2021 Yılı ÖTV Avantajlı Otomobiller</p>
                </div>
                <div className="box">
                  <img src="3.jpg" alt="" />
                  <p className="p-1">business by alternatif bank </p>
                  <p className="p-2">
                    Görüntülü Konuşmalarda Harika Görünmenizi Sağlayacak 7
                    Profesyonel Öneri
                  </p>
                </div>
              </div>
              <div className="block-2">
                <div className="box">
                  <img src="4.jpg" alt="" />
                  <p className="p-1">pets by sheba </p>
                  <p className="p-2">
                    Kedi Cinsleri ve Özellikleri Hakkında Her Şey
                  </p>
                </div>
                <div className="box">
                  <img src="5.jpg" alt="" />
                  <p className="p-1"> gastronom</p>
                  <p className="p-2">
                    Tablo Gibi Tabaklar Yaratmanın Püf Noktaları
                  </p>
                </div>
                <div className="box">
                  <img src="6.jpg" alt="" />
                  <p className="p-1"> * sponsorlu apple</p>
                  <p className="p-2">
                    ProMotion teknolojisine sahip yepyeni bir OLED ekran.
                  </p>
                </div>
                <div className="box">
                  <h3>OGGUSTO</h3>
                  <p className="p-3">
                    Size özel içerikler için OGGUSTO’ya hemen üye olabilirsiniz
                  </p>
                  <button className="btn"> OGGUSTO’YA ÜYE OL </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ImageSliderSection">

        </div>
      </div>
    </>
  );
}
