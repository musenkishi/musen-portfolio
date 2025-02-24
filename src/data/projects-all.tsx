import { Project } from "../types/projects/project"
import { ProjectPath } from "./paths"
import taleTraveler from "./project/tale-traveler"

const projectsMap: Map<string, Project> = new Map()

projectsMap.set(ProjectPath.TALE_TRAVELER, taleTraveler)

export default projectsMap
