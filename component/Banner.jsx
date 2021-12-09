import styles from "../styles/Header.module.css";
import Image from "next/image";
function Banner() {
  return (
  
    <div className={styles.HeaderBanner}>
      <div className="BannerContent">
        <div>
          {/* <Image src="/public/Rectangle11.jpg" alt=""   width={500} height={500}/> */}
          <img src="Rectangle11.jpg" alt="" className="BannerImage"/>
          <div className="BannerImageContent">
              <img src="image2.jpg" alt="" />
          </div>
        </div>
        <div className="BannerImageText">
            <h3 >1,5 saat uzağınızda Adiyatik’de denize ve doğaya yeni kaçış noktanız</h3>
            <button className="BannerImageButton">REZERVASYON YAPIN</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
