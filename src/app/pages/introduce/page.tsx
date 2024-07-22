import styles from "../introduce/introduce.page.module.css";
import Wave from "@/components/wave/page";
import { Facebook, YouTube, Instagram } from "@mui/icons-material";
import ExpandableSlider from "@/components/expandable-slider/page";

export default function IntroduceScreen() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.parallaxTop}>
        <div className={styles.parallaxImage1}></div>
        <div className={styles.content}>
          <h1>Panorama Glamping</h1>
          <section className={styles.scrollSection}>
            <p>
              Với vị trí trên đỉnh đồi, bạn sẽ có một tầm nhìn toàn cảnh hồ Trị
              An bao la và chiêm ngưỡng hoàng hôn hùng vĩ nhất ở Đồng Nai. Cảm
              giác ngủ lều máy lạnh tiện nghi, độc đáo, mới lạ, giữa thiên
              nhiên, BBQ giữa trời sao, mang lại một trải nghiệm thư thái, bình
              yên.
            </p>
          </section>
        </div>
        <div className={styles.media}>
          <div className={styles.mediaIcons}>
            <a>
              <Facebook></Facebook>
            </a>
            <a>
              <YouTube></YouTube>
            </a>
            <a>
              <Instagram></Instagram>
            </a>
          </div>
        </div>
        <Wave></Wave>
      </div>
      <div className={styles.static}>
        <div className={styles.subContent}>
          <h1>Lều Tipi</h1>
          <p>
            Lều tipi được sử dụng bởi các bộ tộc da đỏ ở Bắc Mỹ, biểu trưng cho
            sự đối kháng và định danh văn hóa của những cộng đồng này. Tipi mang
            đến sự di động và linh hoạt cho các bộ tộc da đỏ, cho phép họ di
            chuyển để tìm kiếm nguồn thực phẩm và tận hưởng cuộc sống trong tự
            nhiên. Với cấu trúc hình nón và các cột chống, tipi có thể dễ dàng
            lắp ráp và tháo gỡ. Nó tạo ra một không gian sống chức năng và thoải
            mái, với lửa trại ở giữa để sưởi ấm và nấu nướng. Tipi là biểu tượng
            của văn hóa và định danh dân tộc da đỏ, thể hiện sự gắn kết với tự
            nhiên và truyền thống. Những người sử dụng tipi, như người Sioux và
            người Cheyenne, đã đấu tranh và chống lại sự xâm lược và sự xóa sổ
            của người châu Âu, giữ vững văn hóa và lãnh thổ của họ. Tipi trở
            thành biểu tượng của sự tự hào và sức mạnh của dân tộc da đỏ trong
            cuộc đấu tranh của họ. Ưu điểm của lều tipi: Hình chóp là một cấu
            trúc cực kỳ ổn định, có thể chịu được gió mạnh. Các thanh gỗ/sắt dài
            được dựng lên và buộc vào nhau tạo thành khung chịu lực cho lều,
            giúp lều tipi có thể chống chọi với mọi điều kiện thời tiết. Dạng
            hình chóp giúp nước mưa chảy xuống nhanh chóng và không thấm vào bên
            trong lều. Hình dạng chóp của lều tipi được cho là biểu tượng cho sự
            kết nối giữa con người với Trái đất và bầu trời. Ở trong lều tipi,
            bạn hòa mình vào thiên nhiên và trải nghiệm môi trường xung quanh
            một cách trọn vẹn: tận hưởng không khí trong lành, chim hót, tiếng
            dế, tiếng lá và khung cảnh tuyệt đẹp.
          </p>
          <ExpandableSlider></ExpandableSlider>
        </div>
      </div>
      <div className={styles.parallax}>
        <div className={styles.wavesTop}>
          <Wave></Wave>
        </div>
        <div className={styles.parallaxImage2}></div>
        <div className={styles.wavesBot}>
          <Wave></Wave>
        </div>
      </div>
      <div className={styles.static}>
        <div className={styles.subContent}>
           
        </div>
      </div>
      <div className={styles.parallax}>
        <div className={styles.wavesTop}>
          <Wave></Wave>
        </div>
        <div className={styles.parallaxImage3}></div>
        <div className={styles.content}></div>
        <div className={styles.wavesBot}>
          <Wave></Wave>
        </div>
      </div>
      <div className={styles.static}>
        <div className={styles.subContent}>
          <div>Thank you!</div>
          <div>
            <a
              href="https://trungquandev.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog: https://trungquandev.com
            </a>
          </div>
          <div>
            <a
              href="https://cv.trungquandev.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV: https://cv.trungquandev.com
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/c/TrungquandevOfficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube: Trungquandev Official
            </a>
          </div>
          <div>
            <a
              href="https://www.vecteezy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Credit to the images from: https://www.vecteezy.com/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
