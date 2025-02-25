import { Project } from "../types/projects/project"
import { ProjectID } from "./paths"
import projectBackspace from "./project/backspace"
import projectBahnhofWatchdog from "./project/bahnhof-watchdog"
import projectBlockEngineBuilder from "./project/block-engine-builder"
import projectSMSBox from "./project/smsbox"
import projectTabscape from "./project/tabscape"
import projectTaleTraveler from "./project/tale-traveler"
import projectWally from "./project/wally"

const projectsMap: Map<string, Project> = new Map()

projectsMap.set(ProjectID.TALE_TRAVELER, projectTaleTraveler)
projectsMap.set(ProjectID.BACKSPACE, projectBackspace)
projectsMap.set(ProjectID.WALLY, projectWally)
projectsMap.set(ProjectID.SMS_BOX, projectSMSBox)
projectsMap.set(ProjectID.BLOCK_ENGINE_BUILDER, projectBlockEngineBuilder)
projectsMap.set(ProjectID.TABSCAPE, projectTabscape)
projectsMap.set(ProjectID.BAHNHOF_WATCHDOG, projectBahnhofWatchdog)

export default projectsMap
