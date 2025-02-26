import Badge from "@/src/components/badge"
import BulletList from "@/src/components/bullet-list"
import InlineLink from "@/src/components/link/inline-link"
import Paragraph from "@/src/components/paragraph"
import RootFlex from "@/src/components/root/root-flex"
import Section from "@/src/components/section/section"

export default function Page() {
  return (
    <RootFlex>
      <h1 className="flex items-center gap-2">
        Tale Traveler - Privacy Policy <Badge isTag>Open Alpha</Badge>
      </h1>
      <div className="max-w-2xl">
        <Section title="Effective Date: November 19, 2024">
          <Paragraph>
            Welcome to Tale Traveler, an app created and operated by Freddie
            Lust-Hed. This Privacy Policy outlines how Tale Traveler collects,
            uses, and protects your information.
          </Paragraph>
        </Section>
        <Section title="Information We Collect">
          <BulletList
            list={[
              {
                label: "Step Data",
                description:
                  "Tale Traveler collects the number of steps taken by the user starting from the date you agree to step retrieval in the app. This information is used solely to enhance your adventure experience within the app.",
              },
            ]}
          />
        </Section>
        <Section title="How Your Information is Used">
          <BulletList
            list={[
              {
                label: "Adventure Enhancement",
                description:
                  "The step data is used to track your progress during an active adventure. This data is discarded after the adventure is concluded.",
              },
            ]}
          />
        </Section>
        <Section title="Data Retention">
          <BulletList
            list={[
              {
                label: "Step Data",
                description:
                  "Step data is retained only for the duration of an active adventure. Once the adventure ends, this data is permanently deleted.",
              },
            ]}
          />
        </Section>
        <Section title="Internet Usage">
          <BulletList
            list={[
              {
                label: "Download Adventure",
                description:
                  "Tale Traveler uses an internet connection to download adventures.",
              },
              {
                label: "No Personal Data Storage",
                description:
                  "The app does not store any personal information on our servers.",
              },
            ]}
          />
        </Section>
        <Section title="Contact Information">
          <Paragraph>
            For any questions or concerns regarding this Privacy Policy, please
            contact us at{" "}
            <InlineLink href="mailto:appsupport@musen.dev">
              appsupport@musen.dev
            </InlineLink>
            .
          </Paragraph>
        </Section>
      </div>
    </RootFlex>
  )
}
