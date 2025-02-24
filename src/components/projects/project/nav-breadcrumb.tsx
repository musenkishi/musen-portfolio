import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/components/ui/breadcrumb"
import { Button } from "@/components/components/ui/button"
import { FC, Fragment, ReactNode } from "react"
import Badge from "../../badge"
import { PageLink } from "../../link/page-link"

type BreadcrumbLinkData = {
  href: string
  label: ReactNode
}

type NavBreadCrumbProps = {
  paths: (ReactNode | BreadcrumbLinkData)[]
  badge?: string
}

const isBreadcrumbLinkData = (path: unknown): path is BreadcrumbLinkData => {
  return (
    typeof path === "object" &&
    path !== null &&
    "href" in path &&
    "label" in path
  )
}

const NavBreadCrumb: FC<NavBreadCrumbProps> = ({ paths, badge }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {paths.map((path, index) => {
          if (isBreadcrumbLinkData(path)) {
            return (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    <Button asChild variant="link" size="link" className="font-bold">
                      <PageLink href={path.href}>{path.label}</PageLink>
                    </Button>
                  </BreadcrumbPage>
                </BreadcrumbItem>
                {index < paths.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            )
          } else {
            return (
              <Fragment key={index}>
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage className="text-md font-bold">
                    {path}
                  </BreadcrumbPage>
                </BreadcrumbItem>
                {index < paths.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            )
          }
        })}
        {badge && <Badge isTag>{badge}</Badge>}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default NavBreadCrumb
