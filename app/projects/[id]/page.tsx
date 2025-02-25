import {
  SimpleBulletList,
  SimpleInlineLink,
  StrongText,
} from "@/src/components/markdown-components"
import Paragraph from "@/src/components/paragraph"
import Metadata from "@/src/components/projects/project/metadata"
import NavBreadCrumb from "@/src/components/projects/project/nav-breadcrumb"
import ProjectLogo from "@/src/components/projects/project/project-logo"
import ScreenshotsMasonry from "@/src/components/projects/project/screenshot-masonry"
import RootFlex from "@/src/components/root/root-flex"
import Section from "@/src/components/section/section"
import projectsMap from "@/src/data/projects-all"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const project = projectsMap.get(id)

  if (!project) notFound()

  return (
    <RootFlex>
      <div className="flex flex-col gap-4 max-w-2xl w-full px-2">
        <NavBreadCrumb
          paths={[{ href: "/projects", label: "Projects" }, project.title]}
          badge={project.badge}
        />
        <ProjectLogo id={project.id} />
        <Metadata metadata={project.metadata} />
        {project.description.map((section, index) => {
          return (
            <Section key={index} title={section.title}>
              <ReactMarkdown
                components={{
                  ul: SimpleBulletList,
                  p: Paragraph,
                  strong: StrongText,
                  a: SimpleInlineLink,
                }}
              >
                {section.markdown}
              </ReactMarkdown>
            </Section>
          )
        })}
        {project.screenshots.length > 0 && (
          <Section title="Screenshots">
            <ScreenshotsMasonry images={project.screenshots} />
          </Section>
        )}
      </div>
    </RootFlex>
  )
}
