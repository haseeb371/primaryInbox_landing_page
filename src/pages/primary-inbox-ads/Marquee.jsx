import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { ReverseMarquee } from "@/components/magicui/reverseMarquee";

const reviews = [
  "Email Marketing",
  "Campaigns",
  "Management",
  "DKIM",
  "Domain",
  "DMARC",
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ label }) => {
  return (
    <div className="border-[2] border-solid border-white bg-[#FFFFFF3D] w-[144px] h-auto rounded-full flex justify-center items-center py-3 font-medium text-sm leading-5">
      {label}
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex gap-1 w-full flex-col items-center justify-center overflow-hidden">
      <Marquee
        data-aos="fade-left"
        pauseOnHover={true}
        repeat={7}
        className="[--duration:10s] w-full"
        >
        {reviews.map((review) => (
          <ReviewCard key={review} label={review} />
        ))}
      </Marquee>
      <ReverseMarquee
        data-aos="fade-right"
        pauseOnHover={true}
        repeat={7}
        className="[--duration:10s] w-full"
      >
        {reviews.map((review) => (
          <ReviewCard key={review} label={review} />
        ))}
      </ReverseMarquee>
    </div>
  );
}
