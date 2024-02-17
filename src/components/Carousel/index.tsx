import Slider from "react-slick";
import { isIOS, isAndroid } from "react-device-detect";
import MarketplaceButton from "../MarketplaceButton";
import "slick-carousel/slick/slick.css";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import "swiper/css";
import CarouselArrows from "./CarouselArrows";

const Carousel = () => {
  const ref = useRef<SwiperRef>(null);

  const onPrev = () => {
    ref?.current?.swiper?.slidePrev();
  };

  const onNext = () => {
    ref?.current?.swiper?.slideNext();
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__left}>
        <div className={styles.carousel__col}>
          <h2 className={styles.carousel__item_title}>
            Находите подходящий груз, который вы готовы
            <br />
            доставить
          </h2>
          <CarouselArrows onPrev={onPrev} onNext={onNext} />
        </div>
        <div className={styles.carousel__col}>
          <div className={styles.carousel__buttons}>
            {!isAndroid && (
              <a
                href="https://apps.apple.com/us/app/findcourier/id6471444446"
                target="_blank"
                style={{ display: "block" }}
                className={styles.carousel__button}
              >
                <MarketplaceButton>
                  <svg
                    width="144"
                    height="40"
                    viewBox="0 0 144 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.798 3.04201C25.928 4.74099 25.3915 6.42385 24.302 7.73401C23.7805 8.38315 23.1185 8.90547 22.3659 9.26161C21.6133 9.61775 20.7896 9.79842 19.957 9.79001C19.8499 8.14042 20.402 6.51576 21.492 5.27301C22.5955 4.01398 24.1331 3.21732 25.798 3.04201ZM31.133 13.026C30.1782 13.6142 29.3876 14.4341 28.8347 15.4097C28.2817 16.3852 27.9842 17.4847 27.97 18.606C27.9711 19.8673 28.3432 21.1003 29.0401 22.1516C29.737 23.2028 30.7277 24.0258 31.889 24.518C31.4331 26.0025 30.7453 27.4055 29.851 28.675C28.651 30.473 27.391 32.229 25.394 32.261C24.444 32.283 23.804 32.01 23.135 31.725C22.438 31.428 21.711 31.118 20.575 31.118C19.369 31.118 18.61 31.438 17.878 31.746C17.246 32.012 16.633 32.27 15.771 32.306C13.867 32.377 12.414 30.386 11.17 28.606C8.684 24.968 6.747 18.355 9.343 13.856C9.94124 12.778 10.8088 11.8735 11.8609 11.2308C12.913 10.5881 14.1138 10.2292 15.346 10.189C16.425 10.167 17.46 10.583 18.368 10.949C19.062 11.227 19.682 11.476 20.189 11.476C20.635 11.476 21.238 11.237 21.939 10.958C23.046 10.518 24.399 9.98101 25.776 10.126C26.833 10.1594 27.8675 10.439 28.7975 10.9424C29.7275 11.4458 30.5272 12.1593 31.133 13.026ZM51.224 9.31501C51.01 9.44101 50.676 9.49901 50.22 9.48801V10.292C50.485 10.286 50.716 10.292 50.912 10.309C51.108 10.321 51.272 10.364 51.405 10.439C51.538 10.509 51.635 10.615 51.699 10.759C51.769 10.897 51.803 11.088 51.803 11.329C51.803 11.693 51.705 11.964 51.509 12.143C51.313 12.316 51.027 12.403 50.653 12.403C50.255 12.403 49.961 12.287 49.77 12.056C49.58 11.826 49.49 11.511 49.502 11.114H48.438C48.444 11.442 48.49 11.742 48.577 12.013C48.669 12.278 48.805 12.506 48.983 12.696C49.168 12.881 49.396 13.025 49.667 13.129C49.943 13.233 50.272 13.284 50.653 13.284C50.975 13.284 51.273 13.241 51.543 13.154C51.815 13.068 52.048 12.944 52.244 12.783C52.446 12.616 52.602 12.413 52.711 12.177C52.826 11.941 52.884 11.676 52.884 11.382C52.884 10.978 52.78 10.635 52.573 10.352C52.3699 10.0725 52.0656 9.88338 51.725 9.82501V9.80801C52.031 9.69801 52.258 9.52801 52.408 9.29801C52.558 9.06701 52.633 8.79301 52.633 8.47601C52.633 8.19901 52.581 7.95601 52.478 7.74901C52.3766 7.54431 52.2282 7.36648 52.045 7.23001C51.8565 7.08689 51.6423 6.98131 51.414 6.91901C51.1634 6.8486 50.9043 6.81359 50.644 6.81501C50.321 6.81501 50.033 6.87001 49.779 6.97901C49.525 7.08301 49.309 7.23001 49.13 7.42001C48.952 7.613 48.814 7.83937 48.724 8.08601C48.632 8.34601 48.58 8.62801 48.568 8.93401H49.632C49.6253 8.77149 49.6397 8.60879 49.675 8.45001C49.715 8.30001 49.776 8.17001 49.857 8.06001C49.9364 7.94584 50.0434 7.85363 50.168 7.79201C50.3119 7.72616 50.4688 7.69368 50.627 7.69701C50.915 7.69701 51.14 7.77201 51.301 7.92201C51.468 8.06601 51.552 8.27401 51.552 8.54501C51.552 8.92501 51.442 9.18201 51.224 9.31501ZM56.481 6.96201H55.331L52.961 13.137H54.076L54.656 11.503H57.121L57.701 13.137H58.859L56.481 6.96201ZM56.835 10.682H54.95L55.884 8.02601H55.91L56.835 10.681V10.682ZM59.275 6.96201H63.538V7.89601H60.355V13.137H59.275V6.96201ZM66.953 6.96201H64.228V13.137H65.309V10.767H66.953C67.391 10.767 67.748 10.707 68.025 10.586C68.302 10.459 68.515 10.3 68.665 10.11C68.815 9.92001 68.915 9.71501 68.968 9.49601C69.025 9.27101 69.054 9.06401 69.054 8.87301C69.054 8.68301 69.025 8.47601 68.968 8.25101C68.9147 8.02334 68.8112 7.81047 68.665 7.62801C68.4926 7.42063 68.2732 7.25744 68.025 7.15201C67.748 7.02501 67.392 6.96201 66.953 6.96201ZM66.892 9.88501H65.309V7.84501H66.909C67.053 7.84501 67.189 7.85901 67.316 7.88701C67.443 7.91701 67.556 7.97101 67.653 8.05201C67.7565 8.1338 67.8371 8.24092 67.887 8.36301C67.944 8.49601 67.973 8.66301 67.973 8.86501C67.973 9.06101 67.939 9.22501 67.869 9.35801C67.8085 9.48102 67.7193 9.58768 67.609 9.66901C67.506 9.74401 67.391 9.79901 67.264 9.83301C67.1429 9.86685 67.0178 9.88434 66.892 9.88501ZM70.118 12.238C70.338 12.238 70.542 12.172 70.732 12.039C70.922 11.901 71.064 11.716 71.156 11.485L69.123 6.96201H70.413L71.822 10.413H71.839L73.275 6.96201H74.485L72.445 11.494C72.179 12.088 71.862 12.518 71.493 12.783C71.13 13.043 70.715 13.172 70.248 13.172C70.0859 13.1756 69.9239 13.1639 69.764 13.137V12.203C69.833 12.215 69.894 12.223 69.945 12.229C69.997 12.235 70.055 12.238 70.118 12.238ZM77.412 9.31501C77.199 9.44101 76.865 9.49901 76.409 9.48801V10.292C76.674 10.286 76.905 10.292 77.101 10.309C77.297 10.321 77.461 10.364 77.594 10.439C77.727 10.509 77.824 10.615 77.888 10.759C77.958 10.897 77.992 11.088 77.992 11.329C77.992 11.693 77.894 11.964 77.698 12.143C77.502 12.316 77.216 12.403 76.841 12.403C76.444 12.403 76.15 12.287 75.959 12.056C75.769 11.826 75.679 11.511 75.691 11.114H74.627C74.633 11.442 74.679 11.742 74.766 12.013C74.858 12.278 74.993 12.506 75.172 12.696C75.357 12.881 75.584 13.025 75.855 13.129C76.132 13.233 76.461 13.284 76.841 13.284C77.164 13.284 77.461 13.241 77.732 13.154C78.003 13.068 78.237 12.944 78.432 12.783C78.6361 12.6118 78.7995 12.3971 78.9102 12.1548C79.0209 11.9124 79.0762 11.6484 79.072 11.382C79.072 10.978 78.969 10.635 78.762 10.352C78.5589 10.0725 78.2546 9.88338 77.914 9.82501V9.80801C78.219 9.69801 78.447 9.52801 78.597 9.29801C78.747 9.06701 78.822 8.79301 78.822 8.47601C78.822 8.19901 78.77 7.95601 78.666 7.74901C78.5648 7.54442 78.4168 7.3666 78.234 7.23001C78.0455 7.08692 77.8313 6.98134 77.603 6.91901C77.3524 6.8486 77.0933 6.81359 76.833 6.81501C76.51 6.81501 76.222 6.87001 75.968 6.97901C75.714 7.08301 75.498 7.23001 75.319 7.42001C75.141 7.613 75.003 7.83937 74.913 8.08601C74.82 8.34601 74.769 8.62801 74.757 8.93401H75.821C75.8142 8.77149 75.8287 8.60878 75.864 8.45001C75.904 8.30001 75.965 8.17001 76.046 8.06001C76.1254 7.94587 76.2324 7.85367 76.357 7.79201C76.49 7.72901 76.642 7.69701 76.816 7.69701C77.104 7.69701 77.329 7.77201 77.49 7.92201C77.657 8.06601 77.74 8.27401 77.74 8.54501C77.74 8.92501 77.631 9.18201 77.412 9.31501ZM79.842 6.96201H80.922V11.563L83.542 6.96201H84.814V13.137H83.734V8.50201L81.078 13.137H79.84V6.96201H79.842ZM90.347 6.96201H85.347V7.89601H87.302V13.137H88.384V7.89701H90.347V6.96201ZM90.89 6.96201H95.335V7.89601H91.971V9.51301H95.085V10.396H91.97V12.203H95.395V13.137H90.89V6.96201ZM101.245 9.54801H99.48V7.84401H101.245C101.539 7.84401 101.763 7.90801 101.919 8.03401C102.075 8.16101 102.153 8.38001 102.153 8.69201C102.153 8.96901 102.066 9.18201 101.893 9.33201C101.71 9.47955 101.48 9.55623 101.245 9.54801ZM101.4 6.96201H98.399V13.137H101.236C101.634 13.137 101.977 13.094 102.265 13.007C102.553 12.915 102.79 12.794 102.974 12.644C103.159 12.489 103.294 12.307 103.381 12.1C103.468 11.8826 103.512 11.6503 103.511 11.416C103.511 10.996 103.413 10.646 103.217 10.37C103.02 10.087 102.732 9.90601 102.352 9.82501V9.80801C102.634 9.68601 102.85 9.51601 103 9.29801C103.156 9.07201 103.234 8.80401 103.234 8.49301C103.234 7.98001 103.067 7.59601 102.732 7.34301C102.398 7.08901 101.954 6.96201 101.4 6.96201ZM101.392 12.255H99.48V10.326H101.392C101.72 10.326 101.974 10.41 102.153 10.577C102.337 10.739 102.429 10.972 102.429 11.277C102.429 11.589 102.337 11.831 102.153 12.004C101.974 12.172 101.72 12.255 101.392 12.255ZM88.749 27.056C88.589 26.726 88.509 26.328 88.509 25.861H86.376C86.387 26.612 86.529 27.266 86.803 27.824C87.076 28.37 87.44 28.82 87.895 29.173C88.35 29.526 88.885 29.787 89.5 29.958C90.115 30.128 90.769 30.214 91.463 30.214C92.066 30.214 92.658 30.14 93.239 29.992C93.793 29.8667 94.3193 29.6409 94.792 29.326C95.247 29.019 95.612 28.626 95.885 28.149C96.169 27.659 96.311 27.073 96.311 26.39C96.311 26.071 96.261 25.753 96.158 25.434C96.0658 25.1135 95.9153 24.8128 95.714 24.547C95.5145 24.2559 95.2662 24.0015 94.98 23.795C94.6634 23.5685 94.3117 23.3955 93.939 23.283C93.779 23.238 93.512 23.169 93.136 23.078C92.4106 22.8736 91.6822 22.6803 90.951 22.498C90.7749 22.4447 90.5982 22.3934 90.421 22.344C89.989 22.219 89.636 22.037 89.363 21.798C89.102 21.548 88.971 21.206 88.971 20.774C88.971 20.466 89.039 20.21 89.176 20.006C89.323 19.801 89.506 19.641 89.722 19.527C89.938 19.402 90.177 19.317 90.439 19.271C90.701 19.215 90.957 19.186 91.207 19.186C91.947 19.186 92.556 19.351 93.034 19.681C93.512 20 93.779 20.551 93.836 21.337H95.97C95.97 20.7 95.845 20.142 95.594 19.664C95.344 19.174 95.003 18.765 94.57 18.435C94.1283 18.0947 93.6236 17.8452 93.085 17.701C92.5034 17.5268 91.8991 17.4406 91.292 17.445C90.746 17.445 90.205 17.519 89.671 17.667C89.1574 17.7937 88.6714 18.0133 88.237 18.315C87.8162 18.6103 87.4661 18.9952 87.212 19.442C86.962 19.886 86.837 20.415 86.837 21.03C86.837 21.349 86.877 21.661 86.957 21.969C87.047 22.276 87.195 22.566 87.4 22.839C87.605 23.113 87.878 23.363 88.22 23.591C88.572 23.807 89.01 23.983 89.534 24.12C90.376 24.347 91.082 24.535 91.651 24.683C92.231 24.82 92.738 24.968 93.171 25.127C93.421 25.218 93.648 25.377 93.853 25.605C94.069 25.821 94.178 26.163 94.178 26.629C94.178 26.857 94.132 27.084 94.041 27.312C93.95 27.528 93.801 27.722 93.597 27.892C93.392 28.063 93.125 28.206 92.795 28.319C92.465 28.422 92.066 28.473 91.6 28.473C91.167 28.473 90.763 28.427 90.388 28.336C90.0391 28.2411 89.7097 28.0854 89.415 27.876C89.1305 27.66 88.9021 27.3787 88.749 27.056ZM54.948 17.735H52.678L48 29.924H50.202L51.346 26.698H56.211L57.355 29.924H59.643L54.948 17.735ZM55.648 25.075H51.926L53.77 19.835H53.821L55.648 25.075ZM62.596 21.098H60.752V33.185H62.698V28.78H62.732C62.88 29.02 63.062 29.23 63.279 29.412C63.506 29.582 63.751 29.725 64.013 29.839C64.275 29.952 64.548 30.032 64.833 30.078C65.117 30.134 65.401 30.163 65.686 30.163C66.334 30.163 66.898 30.038 67.376 29.787C67.854 29.526 68.246 29.184 68.554 28.763C68.872 28.331 69.106 27.836 69.254 27.278C69.413 26.72 69.493 26.145 69.493 25.554C69.493 24.905 69.407 24.296 69.237 23.727C69.0807 23.1863 68.8194 22.6817 68.468 22.242C68.123 21.8068 67.6781 21.4614 67.171 21.235C66.659 20.985 66.056 20.859 65.361 20.859C64.792 20.859 64.263 20.973 63.774 21.2C63.284 21.417 62.904 21.78 62.63 22.293H62.596V21.098ZM67.393 24.358C67.495 24.734 67.547 25.121 67.547 25.52C67.547 25.907 67.501 26.288 67.41 26.663C67.33 27.027 67.188 27.358 66.983 27.653C66.788 27.9391 66.5318 28.1782 66.233 28.353C65.925 28.535 65.549 28.627 65.105 28.627C64.707 28.627 64.355 28.547 64.047 28.387C63.7492 28.2261 63.4878 28.0055 63.279 27.739C63.0541 27.4488 62.8861 27.1187 62.784 26.766C62.6789 26.3591 62.6272 25.9403 62.63 25.52C62.63 24.575 62.835 23.818 63.245 23.25C63.665 22.68 64.285 22.395 65.105 22.395C65.504 22.395 65.856 22.487 66.164 22.669C66.471 22.839 66.727 23.073 66.932 23.369C67.137 23.653 67.29 23.983 67.392 24.359L67.393 24.358ZM71.359 21.098H73.203V22.293H73.237C73.51 21.781 73.891 21.417 74.381 21.201C74.8783 20.9715 75.4203 20.8547 75.968 20.859C76.663 20.859 77.266 20.984 77.778 21.235C78.301 21.474 78.734 21.809 79.075 22.242C79.417 22.663 79.673 23.158 79.844 23.727C80.014 24.297 80.1 24.905 80.1 25.554C80.1 26.145 80.02 26.72 79.86 27.278C79.7228 27.8129 79.4852 28.3168 79.16 28.763C78.8487 29.1876 78.4466 29.5374 77.983 29.787C77.505 30.037 76.941 30.163 76.293 30.163C76.008 30.163 75.723 30.134 75.439 30.078C75.1566 30.0329 74.8811 29.9523 74.619 29.838C74.3589 29.7251 74.1129 29.5822 73.886 29.412C73.6712 29.2318 73.4865 29.0184 73.339 28.78H73.305V33.185H71.36L71.359 21.098ZM78.153 25.52C78.1541 25.1279 78.1026 24.7374 78 24.359C77.9071 24.004 77.751 23.6686 77.539 23.369C77.3409 23.0792 77.0779 22.8395 76.771 22.669C76.4496 22.4828 76.0834 22.388 75.712 22.395C74.892 22.395 74.272 22.68 73.852 23.249C73.442 23.819 73.237 24.575 73.237 25.519C73.237 25.963 73.288 26.379 73.391 26.766C73.504 27.141 73.669 27.466 73.886 27.739C74.102 28.012 74.358 28.229 74.654 28.388C74.961 28.547 75.314 28.627 75.712 28.627C76.156 28.627 76.532 28.536 76.839 28.353C77.146 28.171 77.397 27.938 77.59 27.653C77.795 27.358 77.937 27.028 78.017 26.663C78.1076 26.2888 78.1533 25.9051 78.153 25.52ZM97.189 21.098H98.658V18.452H100.604V21.098H102.362V22.549H100.604V27.261C100.604 27.466 100.609 27.642 100.621 27.791C100.644 27.938 100.683 28.063 100.74 28.166C100.812 28.2717 100.913 28.3546 101.031 28.405C101.156 28.45 101.326 28.473 101.543 28.473H101.952C102.089 28.462 102.226 28.439 102.362 28.405V29.907L101.73 29.975C101.52 29.998 101.31 30.0094 101.099 30.009C100.587 30.009 100.171 29.964 99.853 29.873C99.5784 29.7897 99.3271 29.6435 99.119 29.446C98.9419 29.2404 98.8185 28.994 98.76 28.729C98.6993 28.408 98.6652 28.0826 98.658 27.756V22.549H97.189V21.1V21.098ZM106.084 29.822C106.641 30.049 107.273 30.163 107.979 30.163C108.684 30.163 109.31 30.049 109.857 29.822C110.388 29.6016 110.866 29.2695 111.258 28.8481C111.65 28.4268 111.946 27.9261 112.127 27.38C112.337 26.7769 112.441 26.1417 112.434 25.503C112.434 24.831 112.332 24.211 112.127 23.642C111.947 23.0952 111.65 22.5942 111.256 22.174C110.867 21.7548 110.389 21.4282 109.857 21.218C109.31 20.978 108.684 20.859 107.979 20.859C107.273 20.859 106.641 20.979 106.084 21.218C105.555 21.4339 105.078 21.7598 104.684 22.174C104.308 22.584 104.018 23.073 103.813 23.642C103.615 24.2419 103.517 24.8703 103.523 25.502C103.523 26.185 103.62 26.812 103.813 27.38C104.018 27.95 104.308 28.439 104.684 28.849C105.071 29.259 105.538 29.583 106.084 29.822ZM109.105 28.353C108.787 28.535 108.411 28.627 107.979 28.627C107.546 28.627 107.171 28.536 106.852 28.353C106.539 28.1765 106.271 27.9313 106.067 27.636C105.859 27.3341 105.703 26.9995 105.606 26.646C105.423 25.9004 105.423 25.1216 105.606 24.376C105.708 24 105.862 23.67 106.067 23.386C106.271 23.0906 106.539 22.8455 106.852 22.669C107.171 22.487 107.546 22.395 107.979 22.395C108.411 22.395 108.787 22.487 109.105 22.669C109.424 22.851 109.686 23.089 109.891 23.386C110.096 23.67 110.244 24 110.335 24.376C110.539 25.1189 110.539 25.9031 110.335 26.646C110.248 27.0003 110.098 27.3358 109.891 27.636C109.687 27.9314 109.418 28.1765 109.105 28.353ZM114.223 21.098H116.05V22.805H116.084C116.141 22.566 116.249 22.333 116.408 22.105C116.581 21.8759 116.781 21.6695 117.006 21.491C117.245 21.297 117.506 21.144 117.791 21.03C118.075 20.916 118.366 20.86 118.662 20.86C118.889 20.86 119.043 20.865 119.122 20.876L119.396 20.91V22.788C119.254 22.7647 119.112 22.7477 118.969 22.737C118.834 22.7144 118.696 22.703 118.559 22.703C118.229 22.703 117.916 22.771 117.62 22.908C117.327 23.0394 117.07 23.2381 116.869 23.488C116.653 23.738 116.482 24.051 116.357 24.427C116.225 24.8465 116.162 25.2844 116.169 25.724V29.924H114.223V21.098ZM125.951 23.847C126.065 24.131 126.133 24.427 126.156 24.734H121.615C121.626 24.404 121.689 24.097 121.802 23.812C121.928 23.528 122.087 23.283 122.28 23.078C122.481 22.8642 122.726 22.6955 122.997 22.583C123.293 22.4554 123.613 22.3914 123.936 22.395C124.266 22.395 124.562 22.464 124.824 22.6C125.097 22.726 125.325 22.896 125.507 23.112C125.7 23.317 125.848 23.562 125.951 23.847ZM121.751 27.005C121.66 26.683 121.614 26.3497 121.615 26.015H128.102C128.183 25.3749 128.136 24.7251 127.965 24.103C127.818 23.5035 127.551 22.94 127.18 22.447C126.812 21.9655 126.339 21.5743 125.797 21.303C125.251 21.007 124.631 20.859 123.936 20.859C123.276 20.859 122.684 20.984 122.161 21.235C121.637 21.485 121.188 21.826 120.812 22.259C120.438 22.6971 120.149 23.2006 119.959 23.744C119.763 24.3154 119.664 24.9158 119.668 25.52C119.668 26.202 119.759 26.828 119.942 27.397C120.135 27.967 120.414 28.456 120.778 28.866C121.154 29.276 121.609 29.594 122.144 29.822C122.679 30.049 123.293 30.163 123.988 30.163C124.465 30.163 124.921 30.095 125.353 29.958C125.781 29.8405 126.185 29.65 126.548 29.395C126.901 29.133 127.203 28.815 127.453 28.439C127.703 28.063 127.88 27.636 127.982 27.159H126.138C125.968 27.648 125.706 28.018 125.353 28.269C125.012 28.507 124.557 28.627 123.988 28.627C123.578 28.627 123.225 28.558 122.929 28.422C122.645 28.284 122.395 28.0861 122.195 27.842C121.997 27.5928 121.846 27.309 121.751 27.005Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="13"
                      width="8"
                      height="8"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="8"
                      height="8"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <rect
                      x="13"
                      y="1"
                      width="8"
                      height="8"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <rect x="4" y="16" width="2" height="2" fill="white" />
                    <rect x="12" y="12" width="6" height="2" fill="white" />
                    <rect x="18" y="14" width="4" height="2" fill="white" />
                    <rect x="16" y="16" width="2" height="2" fill="white" />
                    <rect x="14" y="18" width="2" height="2" fill="white" />
                    <rect x="12" y="14" width="2" height="2" fill="white" />
                    <rect x="20" y="18" width="2" height="2" fill="white" />
                    <rect x="12" y="20" width="4" height="2" fill="white" />
                    <rect x="18" y="20" width="4" height="2" fill="white" />
                    <rect x="4" y="4" width="2" height="2" fill="white" />
                    <rect x="16" y="4" width="2" height="2" fill="white" />
                  </svg>
                </MarketplaceButton>
              </a>
            )}
            {!isIOS && (
              <a href="#" target="_blank" className={styles.carousel__button}>
                <MarketplaceButton>
                  <svg
                    width="144"
                    height="40"
                    viewBox="0 0 144 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M34.025 21.962C35.535 21.09 35.535 18.911 34.025 18.039L29.111 15.202L24.051 20.195L28.863 24.942L34.025 21.962ZM27.845 25.53L23.245 20.99L8.22 35.816C8.54262 35.9558 8.89363 36.0176 9.24458 35.9964C9.59553 35.9752 9.93655 35.8716 10.24 35.694L27.846 25.53H27.845ZM7.315 35.12C7.00651 34.7234 6.84059 34.2344 6.844 33.732V6.27C6.844 5.838 6.959 5.446 7.156 5.115L22.44 20.195L7.315 35.12ZM7.96 4.315L23.245 19.398L28.094 14.613L10.24 4.307C9.89382 4.10466 9.49975 3.99877 9.09877 4.00035C8.6978 4.00194 8.30457 4.10993 7.96 4.315ZM58.1 7.36C57.77 7.36 57.485 7.426 57.243 7.559C57.007 7.691 56.813 7.87 56.663 8.095C56.513 8.314 56.401 8.565 56.326 8.847C56.1863 9.4152 56.1863 10.0088 56.326 10.577C56.401 10.86 56.514 11.113 56.663 11.338C56.813 11.558 57.007 11.733 57.243 11.866C57.485 11.999 57.771 12.065 58.099 12.065C58.38 12.0742 58.6589 12.0125 58.9098 11.8856C59.1608 11.7587 59.3758 11.5708 59.535 11.339C59.685 11.113 59.795 10.859 59.864 10.577C60.0152 10.0102 60.0152 9.41376 59.864 8.847C59.8007 8.57849 59.6893 8.3237 59.535 8.095C59.3858 7.87091 59.1839 7.68686 58.947 7.559C58.6864 7.42006 58.3942 7.35115 58.099 7.359L58.1 7.36ZM58.1 6.478C58.56 6.478 58.973 6.564 59.336 6.737C59.706 6.91 60.016 7.144 60.27 7.437C60.524 7.732 60.717 8.075 60.85 8.467C60.988 8.859 61.057 9.274 61.057 9.712C61.057 10.156 60.988 10.574 60.85 10.966C60.7256 11.3438 60.5286 11.6937 60.27 11.996C60.012 12.2931 59.6936 12.5318 59.336 12.696C58.973 12.863 58.56 12.947 58.099 12.947C57.638 12.947 57.223 12.863 56.854 12.697C56.4996 12.5309 56.1841 12.292 55.928 11.996C55.669 11.6926 55.4696 11.3432 55.34 10.966C55.2054 10.5617 55.1382 10.1381 55.141 9.712C55.141 9.274 55.208 8.859 55.341 8.467C55.479 8.075 55.675 7.732 55.928 7.437C56.1842 7.14132 56.4997 6.90283 56.854 6.737C57.2446 6.55927 57.6699 6.47047 58.099 6.477L58.1 6.478ZM53.82 12.8H49.167V14.33H48.086V11.866H48.778C48.946 11.8039 49.089 11.6883 49.185 11.537C49.259 11.417 49.317 11.277 49.357 11.122C49.4058 10.9489 49.4436 10.7729 49.47 10.595C49.493 10.405 49.513 10.231 49.53 10.075C49.553 9.915 49.57 9.755 49.582 9.6C49.594 9.438 49.602 9.271 49.608 9.098C49.6202 8.89357 49.6259 8.6888 49.625 8.484C49.631 8.254 49.635 7.988 49.635 7.688C49.64 7.388 49.643 7.034 49.643 6.625H53.898V11.865H54.901V14.331H53.821L53.82 12.8ZM50.179 11.866H52.817V7.559H50.655C50.643 7.939 50.635 8.277 50.629 8.571C50.629 8.865 50.623 9.139 50.611 9.392C50.5996 9.88835 50.5505 10.3831 50.464 10.872C50.4289 11.0786 50.3829 11.2833 50.326 11.485C50.286 11.618 50.236 11.745 50.179 11.865V11.866ZM65.846 8.095C65.926 8.245 65.99 8.409 66.036 8.588H67.117C67.0891 8.27619 66.9979 7.97335 66.849 7.698C66.7075 7.44097 66.5132 7.21674 66.279 7.04C66.0399 6.85116 65.7665 6.71025 65.474 6.625C65.158 6.5254 64.8283 6.4758 64.497 6.478C64.0676 6.47101 63.642 6.55947 63.251 6.737C62.897 6.90297 62.5819 7.14146 62.326 7.437C62.072 7.732 61.876 8.075 61.737 8.467C61.6029 8.8683 61.5357 9.2889 61.538 9.712C61.538 10.156 61.605 10.574 61.738 10.966C61.876 11.359 62.072 11.702 62.326 11.996C62.579 12.29 62.888 12.523 63.251 12.696C63.621 12.863 64.035 12.947 64.496 12.947C64.871 12.947 65.214 12.887 65.526 12.765C65.837 12.645 66.108 12.475 66.339 12.255C66.569 12.03 66.751 11.765 66.884 11.459C67.022 11.154 67.103 10.816 67.126 10.448H66.071C66.0499 10.6636 66.0005 10.8754 65.924 11.078C65.849 11.275 65.744 11.448 65.612 11.598C65.48 11.742 65.321 11.858 65.137 11.944C64.952 12.024 64.739 12.064 64.497 12.064C64.167 12.064 63.882 11.998 63.64 11.866C63.4081 11.7377 63.2095 11.5569 63.06 11.338C62.9065 11.105 62.7927 10.8482 62.723 10.578C62.5833 10.0098 62.5833 9.4162 62.723 8.848C62.798 8.565 62.911 8.314 63.061 8.095C63.211 7.87 63.404 7.691 63.641 7.559C63.882 7.426 64.168 7.359 64.496 7.359C64.721 7.359 64.917 7.391 65.085 7.455C65.4122 7.56083 65.686 7.79055 65.846 8.095ZM67.348 6.625H73.479L74.889 10.075H74.906L76.342 6.625H77.552L75.512 11.157C75.246 11.751 74.929 12.18 74.56 12.445C74.197 12.705 73.782 12.835 73.315 12.835C73.1529 12.8385 72.9909 12.8268 72.831 12.8V11.866C72.9 11.877 72.961 11.886 73.012 11.892C73.064 11.898 73.122 11.9 73.185 11.9C73.405 11.9 73.609 11.834 73.799 11.702C73.989 11.563 74.131 11.379 74.223 11.148L72.348 6.975V7.559H70.385V12.8H69.304V7.559H67.349L67.348 6.625ZM77.97 6.625H82.943V12.8H81.863V7.559H79.051V12.8H77.971L77.97 6.625ZM85.12 6.625H84.04V12.8H85.121V10.015H87.932V12.8H89.013V6.625H87.932V9.08H85.122V6.625H85.12ZM92.763 7.36C92.434 7.36 92.149 7.426 91.907 7.559C91.67 7.691 91.477 7.87 91.327 8.095C91.177 8.314 91.065 8.565 90.99 8.847C90.8503 9.4152 90.8503 10.0088 90.99 10.577C91.065 10.86 91.177 11.113 91.327 11.338C91.477 11.558 91.67 11.733 91.907 11.866C92.149 11.999 92.434 12.065 92.763 12.065C93.0441 12.0743 93.3229 12.0126 93.5739 11.8857C93.8249 11.7588 94.0398 11.5708 94.199 11.339C94.349 11.113 94.459 10.859 94.528 10.577C94.679 10.0102 94.679 9.41378 94.528 8.847C94.4644 8.57843 94.3526 8.32363 94.198 8.095C94.0491 7.87103 93.8475 7.68699 93.611 7.559C93.3504 7.42006 93.0582 7.35215 92.763 7.36ZM92.763 6.478C93.224 6.478 93.637 6.564 94 6.737C94.369 6.91 94.68 7.144 94.934 7.437C95.188 7.732 95.381 8.075 95.514 8.467C95.652 8.859 95.721 9.274 95.721 9.712C95.721 10.156 95.651 10.574 95.514 10.966C95.3896 11.3438 95.1926 11.6937 94.934 11.996C94.676 12.2931 94.3576 12.5317 94 12.696C93.637 12.863 93.224 12.947 92.763 12.947C92.302 12.947 91.887 12.863 91.518 12.697C91.1636 12.5309 90.8481 12.292 90.592 11.996C90.333 11.6927 90.1335 11.3432 90.004 10.966C89.8694 10.5617 89.8022 10.1381 89.805 9.712C89.805 9.274 89.871 8.859 90.004 8.467C90.142 8.075 90.338 7.732 90.592 7.437C90.8482 7.14132 91.1637 6.90283 91.518 6.737C91.9086 6.55927 92.3339 6.47147 92.763 6.478ZM101.612 9.211H99.847V7.507H101.612C101.906 7.507 102.131 7.57 102.286 7.697C102.442 7.824 102.52 8.043 102.52 8.354C102.52 8.631 102.433 8.844 102.26 8.994C102.077 9.14206 101.847 9.21912 101.612 9.211ZM101.767 6.625H98.767V12.8H101.603C102.001 12.8 102.344 12.757 102.632 12.67C102.889 12.5941 103.13 12.471 103.342 12.307C103.526 12.151 103.662 11.97 103.748 11.762C103.835 11.549 103.878 11.321 103.878 11.079C103.878 10.658 103.78 10.309 103.584 10.032C103.388 9.75 103.099 9.568 102.719 9.487V9.47C102.98 9.36596 103.205 9.18889 103.368 8.96C103.523 8.735 103.601 8.467 103.601 8.155C103.601 7.642 103.434 7.259 103.099 7.005C102.765 6.751 102.321 6.625 101.767 6.625ZM101.759 11.918H99.847V9.989H101.759C102.088 9.989 102.341 10.073 102.52 10.239C102.704 10.401 102.797 10.635 102.797 10.94C102.797 11.252 102.704 11.494 102.52 11.667C102.341 11.834 102.088 11.917 101.759 11.917V11.918ZM54.569 24.465V22.673H60.739C60.839 22.972 60.839 23.37 60.839 23.768C60.839 25.062 60.441 26.754 59.247 27.948C58.053 29.242 56.659 29.839 54.669 29.839C51.085 29.839 48 26.853 48 23.27C48 19.687 51.085 16.701 54.669 16.701C56.659 16.701 58.053 17.497 59.147 18.493L57.853 19.787C57.057 19.09 55.963 18.493 54.569 18.493C51.981 18.493 49.891 20.583 49.891 23.27C49.891 25.958 51.881 28.048 54.569 28.048C56.261 28.048 57.256 27.351 57.853 26.754C58.351 26.256 58.749 25.46 58.849 24.464L54.569 24.465ZM61.336 25.66C61.336 23.171 63.227 21.38 65.616 21.38C68.005 21.38 69.896 23.072 69.896 25.66C69.896 28.148 68.005 29.94 65.616 29.94C65.0528 29.9443 64.4943 29.8365 63.9731 29.6229C63.4519 29.4093 62.9784 29.0942 62.5801 28.6959C62.1818 28.2976 61.8667 27.8241 61.6531 27.3029C61.4395 26.7817 61.3317 26.2232 61.336 25.66ZM74.872 21.38C72.483 21.38 70.592 23.171 70.592 25.66C70.5877 26.2232 70.6955 26.7817 70.9091 27.3029C71.1227 27.8241 71.4378 28.2976 71.8361 28.6959C72.2344 29.0942 72.7079 29.4093 73.2291 29.6229C73.7503 29.8365 74.3088 29.9443 74.872 29.94C77.261 29.94 79.152 28.148 79.152 25.66C79.152 23.072 77.261 21.38 74.872 21.38ZM74.874 28.148C73.58 28.148 72.485 27.053 72.485 25.56C72.485 24.067 73.58 22.972 74.875 22.972C76.168 22.972 77.263 23.967 77.263 25.56C77.263 27.053 76.168 28.148 74.874 28.148ZM65.614 28.148C64.321 28.148 63.226 27.053 63.226 25.56C63.226 24.067 64.321 22.972 65.615 22.972C66.909 22.972 68.004 23.967 68.004 25.56C68.004 27.053 66.909 28.148 65.614 28.148ZM99.755 24.068C99.357 23.072 98.362 21.38 96.172 21.38C93.982 21.38 92.192 23.072 92.192 25.66C92.192 28.048 93.982 29.94 96.372 29.94C98.262 29.94 99.457 28.745 99.855 28.048L98.462 27.053C97.964 27.75 97.367 28.247 96.372 28.247C95.376 28.247 94.779 27.849 94.282 26.953L99.954 24.565L99.756 24.067L99.755 24.068ZM96.171 22.972C95.275 22.972 93.981 23.868 93.981 25.46L97.763 23.868C97.564 23.37 96.868 22.972 96.171 22.972ZM89.304 29.542H91.194V17.1H89.304V29.542ZM84.029 21.28C85.025 21.28 85.821 21.777 86.319 22.275V21.578H88.11V29.143C88.11 32.228 86.318 33.522 84.129 33.522C82.039 33.522 80.844 32.129 80.347 31.034L81.939 30.337C82.139 31.034 82.934 31.83 84.029 31.83C85.423 31.83 86.319 30.934 86.319 29.342V28.745H86.219C85.821 29.242 85.025 29.74 84.029 29.74C81.839 29.74 79.949 27.948 79.949 25.56C79.949 23.17 81.939 21.28 84.029 21.28ZM84.129 28.147C82.835 28.147 81.741 27.053 81.741 25.56C81.741 24.067 82.835 22.972 84.129 22.972C85.423 22.972 86.419 24.067 86.419 25.56C86.419 27.053 85.423 28.148 84.129 28.148V28.147ZM103.934 17.1H108.413C110.503 17.1 112.494 18.593 112.494 20.982C112.494 23.37 110.503 24.863 108.413 24.863H105.825V29.541H103.934V17.1ZM108.513 23.07H105.826V18.791H108.513C109.907 18.791 110.703 19.985 110.703 20.881C110.604 21.976 109.807 23.07 108.513 23.07ZM116.676 23.17C117.174 21.877 118.567 21.28 119.961 21.28C122.051 21.28 123.743 22.574 123.942 24.763V29.541H122.15V28.546H122.051C121.553 29.143 120.956 29.74 119.662 29.74C118.07 29.74 116.577 28.645 116.577 26.953C116.577 25.162 118.368 24.166 120.16 24.166C120.956 24.166 121.752 24.465 122.051 24.664V24.564C121.951 23.569 121.055 22.972 120.06 22.972C119.363 22.972 118.766 23.171 118.368 23.868L116.676 23.17ZM119.762 28.147C119.164 28.147 118.269 27.849 118.269 27.052C118.269 26.057 119.364 25.759 120.259 25.759C120.975 25.759 121.369 25.919 121.803 26.096L121.951 26.156C121.752 27.351 120.757 28.147 119.762 28.147ZM128.121 26.953L130.211 21.579H132.201L127.125 33.323H125.234L127.125 29.143L123.841 21.579H125.831L128.021 26.953H128.121ZM113.491 29.541H115.382V17.1H113.491V29.541Z"
                      fill="white"
                    />
                  </svg>

                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="13"
                      width="8"
                      height="8"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="8"
                      height="8"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <rect
                      x="13"
                      y="1"
                      width="8"
                      height="8"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <rect x="4" y="16" width="2" height="2" fill="white" />
                    <rect x="12" y="12" width="6" height="2" fill="white" />
                    <rect x="18" y="14" width="4" height="2" fill="white" />
                    <rect x="16" y="16" width="2" height="2" fill="white" />
                    <rect x="14" y="18" width="2" height="2" fill="white" />
                    <rect x="12" y="14" width="2" height="2" fill="white" />
                    <rect x="20" y="18" width="2" height="2" fill="white" />
                    <rect x="12" y="20" width="4" height="2" fill="white" />
                    <rect x="18" y="20" width="4" height="2" fill="white" />
                    <rect x="4" y="4" width="2" height="2" fill="white" />
                    <rect x="16" y="4" width="2" height="2" fill="white" />
                  </svg>
                </MarketplaceButton>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.carousel__right}>
        {/*<img src="phone.png" alt="" className={styles.carousel__phone} />*/}

        <Swiper ref={ref} className={styles.slider}>
          <SwiperSlide className={styles.slider__item}>
            <img src="s1.png" alt="" className={styles.carousel__image} />
          </SwiperSlide>
          <SwiperSlide className={styles.slider__item}>
            <img src="s2.png" alt="" className={styles.carousel__image} />
          </SwiperSlide>
          <SwiperSlide className={styles.slider__item}>
            <img src="s3.png" alt="" className={styles.carousel__image} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;