import { FC } from "react"
import InlineLink from "../link/inline-link"
import Timeline from "../timeline/timeline"

const BioTimeline: FC = () => {
  const items = [
    { date: "1987", title: "Born", description: "in Mora/Sweden" },
    {
      date: "2007",
      title: "Computer and Systems Science Bachelor Program",
      description: "at Uppsala University, Uppsala",
    },
    {
      date: "2011",
      title: "Designer / Android developer",
      description: "at AppCrate",
    },
    {
      date: "2012",
      title: "Lead Android developer",
      description: (
        <>
          at{" "}
          <InlineLink href="https://www.umain.com" isExternal>
            apegroup
          </InlineLink>{" "}
          with big clients such as{" "}
          <InlineLink
            href="https://play.google.com/store/apps/details?id=se.ica.handla"
            isExternal
          >
            ICA
          </InlineLink>
        </>
      ),
    },
    {
      date: "2014",
      title: "Android developer",
      description: (
        <>
          at Aftonbladet for several apps;{" "}
          <InlineLink
            href="https://play.google.com/store/apps/details?id=se.aftonbladet.start"
            isExternal
          >
            Aftonbladet
          </InlineLink>
          , Sportbladet, Sportbladet Hockey, Sportbladet Fotboll, and Supernytt
        </>
      ),
    },
    {
      date: "2015",
      title: "Android developer",
      description: (
        <>
          at{" "}
          <InlineLink href="https://doist.com" isExternal>
            Doist
          </InlineLink>
        </>
      ),
    },
    {
      date: "2016",
      title: "Lead full-stack developer",
      description: (
        <>
          at Sokigo for the{" "}
          <InlineLink href="https://sokigo.com/produkter/plandirekt" isExternal>
            PlanDirekt
          </InlineLink>{" "}
          product
        </>
      ),
    },
    {
      date: "2022",
      title: "Lead front-end developer",
      description: (
        <>
          at{" "}
          <InlineLink href="https://www.viatel.se" isExternal>
            Viatel
          </InlineLink>
        </>
      ),
    },
    {
      date: "2023",
      title: "Android developer",
      description: (
        <>
          at{" "}
          <InlineLink href="https://bontouch.com" isExternal>
            Bontouch
          </InlineLink>
        </>
      ),
    },
    {
      date: "2025",
      title: "Android developer",
      description: (
        <>
          at{" "}
          <InlineLink href="https://www.sj.se" isExternal>
            SJ
          </InlineLink>
        </>
      ),
    },
  ]

  return <Timeline items={items} />
}

export default BioTimeline
