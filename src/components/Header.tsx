import { StarsCanvas } from "./Stars"
import { TypingAnimation } from "./TypingAnimation"

export const Header = () => {
  return (
    <section id="about" className="flex flex-row items-start gap-5">
      <StarsCanvas />
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-primary' />
        <div className='w-1 sm:h-60 h-40 bg-gradient-to-b from-primary' />
      </div>

      <div>
        <h1 className="sm:text-7xl text-3xl font-extrabold mt-5">
          Hi! I&apos;m <span className="text-primary">Denzel</span>
        </h1>
        <p className="sm:text-3xl text-lg">
          I am a Third Year <br className="sm:block hidden" />
          Software Engineering Student at UNSW!
        </p>
        <div className="mt-12">
          <TypingAnimation />
        </div>
      </div>
    </section>
  )
}