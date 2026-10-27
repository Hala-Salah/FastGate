import styles from "./styles.module.css";
import image from "../../../../public/assets/images/WhyChooseUs.png";

interface WhyChoosePoint {
  title: string;
  description: string;
}

const points: WhyChoosePoint[] = [
  {
    title: "A wide range of trusted brands",
    description: "One partner covering food, home, and daily essentials.",
  },
  {
    title: "Consistent quality",
    description: "The same standard across every brand we carry.",
  },
  {
    title: "Reliable supply",
    description: "Stock you can count on, order after order.",
  },
];

function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <svg
        viewBox="0 0 800 540"
        preserveAspectRatio="none"
        className={styles.wavyBg}
      >
        <defs>
          <linearGradient
            id="orangeAngled"
            x1="3.6%"
            y1="31.3%"
            x2="96.4%"
            y2="68.7%"
          >
            <stop offset="0%" stopColor="#F7971D" />
            <stop offset="46%" stopColor="#FFA733" />
            <stop offset="100%" stopColor="#FFB24D" />
          </linearGradient>
        </defs>

        <path
          d="M0,60 C150,0 250,90 400,50 C550,10 650,80 800,40 L800,500 C650,540 550,470 400,510 C250,550 150,480 0,520 Z"
          fill="url(#orangeAngled)"
        />
      </svg>
      <div className={styles.content}>
        <div className={styles.textCol}>
          <h2 className={styles.heading}>Why choose us</h2>
          <div className={styles.pointsList}>
            {points.map((point) => (
              <div key={point.title} className={styles.point}>
                <p className={styles.pointTitle}>{point.title}</p>
                <p className={styles.pointDescription}>{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageCol}>
          {/* استبدلي بصورة حقيقية لاحقاً */}
          <img src={image} alt="Our warehouse team" className={styles.image} />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
