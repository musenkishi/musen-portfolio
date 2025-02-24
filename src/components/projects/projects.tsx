
import { FC } from "react"
import Section from "../section/section"
import ProjectItem from "./projects-item"
import RootFlex from "../root/root-flex"
import { projectsItems } from "@/src/data/projects-overview"



const Projects: FC = () => {
  

  return (
    <RootFlex>
      {projectsItems.map((projectSection, index) => {
        return (
          <Section
            key={projectSection.title + "-" + index}
            title={projectSection.title}
            style={{ animationDelay: index * 100 + "ms" }}
          >
            <div className="appear-in-animation grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectSection.projects.map((project, index) => {
                return (
                  <ProjectItem
                    key={project.title + "-" + index}
                    thumbnail={project.thumbnail}
                    title={project.title}
                    path={project.path}
                    description={project.description}
                    delayMs={index * 250}
                  />
                )
              })}
            </div>
            {index < projectsItems.length - 1 && (
              <div
                key={projectSection.title + "-" + index}
                className="w-full h-px bg-primary/50 mt-4"
              />
            )}
          </Section>
        )
      })}
    </RootFlex>
  )
}

export default Projects
