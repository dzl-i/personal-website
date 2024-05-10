import { ContactCard } from "@/components/ContactCard";

export default function Contact() {
  return (
    <main className="w-full">
      <div className="flex flex-col max-w-7xl mx-auto sm:px-16 px-6 mb-12 pt-[7rem]">
        <ContactCard />
      </div>
    </main>
  )
}