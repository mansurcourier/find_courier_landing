import cn from "classnames";
import styles from "./styles.module.scss";

interface CarouselArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

const CarouselArrows = ({ onPrev, onNext }: CarouselArrowsProps) => {
  return (
    <div className={styles.carousel__arrows}>
      <button
        className={cn({
          "swiper-button-prev": true,
          [styles.carousel__arrow_btn]: true,
        })}
        onClick={onPrev}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect
            y="36"
            width="36"
            height="36"
            rx="18"
            transform="rotate(-90 0 36)"
            fill="#EBEDFD"
          />
          <path
            d="M11 18L25 18M11 18L18 11M11 18L18 25"
            stroke="#364FEC"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        className={cn({
          "swiper-button-next": true,
          [styles.carousel__arrow_btn]: true,
        })}
        onClick={onNext}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect
            width="36"
            height="36"
            rx="18"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 36 36)"
            fill="#EBEDFD"
          />
          <path
            d="M25 18L11 18M25 18L18 11M25 18L18 25"
            stroke="#364FEC"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default CarouselArrows;
