import { backend, data, frontend, management, progLanguages, technical } from "@/constants/data";
import { Card, CardHeader, CardBody, Image, Chip, Button, CardFooter } from "@nextui-org/react";

export const SkillsList = () => {
  return (
    <section id="skills" className="relative z-0 min-h-[calc(100vh-241px-10rem)]">
      <h3 className="sm:text-base text-xs text-gray-500 tracking-wider">WHAT I CAN DO</h3>
      <h1 className="sm:text-5xl text-3xl font-extrabold pt-2">Skills &amp; Proficiences</h1>

      <div className="sm:pt-16 pt-8">
        <h2 className="flex justify-center sm:text-3xl text-2xl font-bold text-[#006fee]">Programming Languages</h2>
        <div className="sm:pt-6 pt-4 grid sm:grid-cols-5 grid-cols-2 sm:gap-8 gap-6">
          {progLanguages.map((item, index) => (
            <Card className="py-4" key={`${item.skill}-${index}`}>
              <CardBody className="overflow-visible py-2 mt-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={item.picture}
                  height={200}
                />
              </CardBody>
              <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold sm:text-xl text-lg">{item.skill}</h4>
                <p className="text-sm">{item.level}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="sm:pt-16 pt-8">
        <h2 className="flex justify-center sm:text-3xl text-2xl font-bold text-[#006fee]">Backend Development</h2>
        <div className="sm:pt-6 pt-4 grid sm:grid-cols-5 grid-cols-2 sm:gap-8 gap-6">
          {backend.map((item, index) => (
            <Card className="py-4" key={`${item.skill}-${index}`}>
              <CardBody className="overflow-visible py-2 mt-2 flex items-center">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl flex items-center"
                  src={item.picture}
                  height={200}
                />
              </CardBody>
              <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold sm:text-xl text-lg">{item.skill}</h4>
                <p className="text-sm">{item.level}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="sm:pt-16 pt-8">
        <h2 className="flex justify-center sm:text-3xl text-2xl font-bold text-[#006fee]">Frontend Development</h2>
        <div className="sm:pt-6 pt-4 grid sm:grid-cols-5 grid-cols-2 sm:gap-8 gap-6">
          {frontend.map((item, index) => (
            <Card className="py-4" key={`${item.skill}-${index}`}>
              <CardBody className="overflow-visible py-2 mt-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={item.picture}
                  height={200}
                />
              </CardBody>
              <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold sm:text-xl text-lg">{item.skill}</h4>
                <p className="text-sm">{item.level}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="sm:pt-16 pt-8">
        <h2 className="flex justify-center sm:text-3xl text-2xl font-bold text-[#006fee]">Data Analytics</h2>
        <div className="sm:pt-6 pt-4 grid sm:grid-cols-5 grid-cols-2 sm:gap-8 gap-6">
          {data.map((item, index) => (
            <Card className="py-4" key={`${item.skill}-${index}`}>
              <CardBody className="overflow-visible py-2 mt-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={item.picture}
                  height={200}
                />
              </CardBody>
              <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold sm:text-xl text-lg">{item.skill}</h4>
                <p className="text-sm">{item.level}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="sm:pt-16 pt-8">
        <h2 className="flex justify-center sm:text-3xl text-2xl font-bold text-[#006fee]">Technical Areas</h2>
        <div className="sm:pt-6 pt-4 grid sm:grid-cols-5 grid-cols-2 sm:gap-8 gap-6">
          {technical.map((item, index) => (
            <Card className="py-4" key={`${item.skill}-${index}`}>
              <CardBody className="overflow-visible py-2 mt-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={item.picture}
                  height={200}
                />
              </CardBody>
              <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold sm:text-xl text-lg">{item.skill}</h4>
                <p className="text-sm">{item.level}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="sm:pt-16 pt-8">
        <h2 className="flex justify-center sm:text-3xl text-2xl font-bold text-[#006fee]">Project Management</h2>
        <div className="sm:pt-6 pt-4 grid sm:grid-cols-5 grid-cols-2 sm:gap-8 gap-6">
          {management.map((item, index) => (
            <Card className="py-4" key={`${item.skill}-${index}`}>
              <CardBody className="overflow-visible py-2 mt-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={item.picture}
                  height={200}
                />
              </CardBody>
              <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold sm:text-xl text-lg">{item.skill}</h4>
                <p className="text-sm">{item.level}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}