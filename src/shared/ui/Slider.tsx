import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import cn from "classnames";

type SliderProps = {
  children: React.ReactNode[];
  className?: string;
};

export const Slider = ({ children, className }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [details, setDetails] = useState<{
    slides: { portion: number }[];
  } | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    detailsChanged(s) {
      setDetails(s.track.details);
    },
    created() {
      setLoaded(true);
    },
  });

  const scaleStyle = (idx: number) => {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  };

  return (
    <div className={className}>
      <div
        ref={sliderRef}
        className="keen-slider"
        style={{ overflow: "unset" }}
      >
        {children.map((child, idx) => (
          <div
            key={idx}
            className={cn("keen-slider__slide not-[.active]:invisible", {
              active: currentSlide === idx,
            })}
            style={{ overflow: "unset" }}
          >
            <div style={scaleStyle(idx)}>{child}</div>
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex justify-center mt-4">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-2 h-2 rounded-full mx-1 bg-aspire-green cursor-pointer transition-all duration-200 ${
                currentSlide === idx ? "w-4" : "opacity-20"
              } focus:outline-none`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
