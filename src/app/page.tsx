import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Profilecard } from "@/components/sections/Profilecard";
import { AboutMe } from "@/components/sections/AboutMe";
import { Friends } from "@/components/sections/Friends";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <section id="hero">
          <Hero />
        </section>

        <section id="profile">
          <Profilecard />
        </section>

        <section id="about">
          <AboutMe />
        </section>
        
        <section id="skills">
          <Skills />
        </section>

        <section id="friends">
          <Friends />
        </section>

        <section id="projects">
          <Projects />
        </section>
                
        <section id="contact">
          <Contact />
          
        </section>
      </div>
    </main>
  );
}
