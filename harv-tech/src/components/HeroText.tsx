import Asterisk from "../assets/Asterisk";

export default function HeroText() {
  return (
    <div className="flex flex-col items-center text-center pt-100px">
        <div className="flex flex-col text-4vw <md:text-24px font-bold mb-32px">
            <span className="flex items-center gap-12px">Leading <Asterisk /> industry's</span>
            <span>next tech leaders</span>
        </div>
        <span className="mb-32px w-1/4 <lg:w-1/3 <md:w-1/2 text 16px leading-tight">
            Discover personalized resources, expert guidance, and a supportive community to help you thrive and succeed. Harness your talents, pursue your passions, and become the best version of yourself with Harv.
        </span>
    </div>
  )
}
