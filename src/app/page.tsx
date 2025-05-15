import { HackathonCard } from "@/components/hackathon-card";
import { Parallax } from "@/components/magicui/parallax";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex flex-col sm:flex-row justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <Parallax offset={20}>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-5xl xl:text-6xl/none">
                  {`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                </h1>
              </Parallax>
              <Parallax offset={15}>
                <p className="max-w-[600px] text-sm sm:text-base md:text-xl">
                  {DATA.description}
                </p>
              </Parallax>
            </div>
            <Parallax offset={30}>
              <Avatar className="size-20 sm:size-24 md:size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </Parallax>
          </div>
        </div>
      </section>
      <section id="about">
        <Parallax offset={25}>
          <h2 className="text-xl font-bold">About</h2>
        </Parallax>
        <Parallax offset={20}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </Parallax>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <Parallax offset={25}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </Parallax>
          {DATA.work.map((work, id) => (
            <Parallax key={work.company} offset={15}>
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </Parallax>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <Parallax offset={25}>
            <h2 className="text-xl font-bold">Education</h2>
          </Parallax>
          {DATA.education.map((education, id) => (
            <Parallax key={education.school} offset={15}>
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </Parallax>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <Parallax offset={25}>
            <h2 className="text-xl font-bold">Skills</h2>
          </Parallax>
          <Parallax offset={20}>
            <div className="flex flex-wrap gap-2 px-4 sm:px-6">
              {DATA.skills.map((skill, id) => (
                <Badge key={skill} className="text-xs sm:text-sm px-2 py-1">{skill}</Badge>
              ))}
            </div>
          </Parallax>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <Parallax offset={30}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Projek terakhir saya
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Saya telah mengerjakan berbagai jenis proyek, mulai dari situs
                  web sederhana hingga aplikasi web yang kompleks. Berikut
                  beberapa proyek favorit saya.
                </p>
              </div>
            </div>
          </Parallax>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[800px] mx-auto px-4 sm:px-6">
            {DATA.projects.map((project, id) => (
              <Parallax key={project.title} offset={20}>
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </Parallax>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <Parallax offset={30}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  CERTIFICATE
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Sertifikat yang telah saya dapatkan
                </h2>
              </div>
            </div>
          </Parallax>
          <Parallax offset={25}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <HackathonCard
                  key={project.title + project.dates}
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  image={project.image}
                  links={project.links}
                />
              ))}
            </ul>
          </Parallax>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-8 px-4 sm:px-6 text-center w-full py-8 sm:py-12">
          <Parallax offset={30}>
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Mari Terhubung
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-5xl">
                Mari Kita Ciptakan Sesuatu yang Menakjubkan Bersama
              </h2>
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                <p className="mx-auto max-w-[600px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed">
                  Baik Anda memiliki proyek dalam pikiran atau hanya ingin menyapa, saya selalu senang terhubung dengan sesama pengembang dan kreator.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <Link
                    href="mailto:raehan.ph@gmail.com"
                    className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                    </svg>
                    Email Me
                  </Link>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </section>
    </main>
  );
}
