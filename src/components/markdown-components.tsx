import { FC, ReactNode } from "react"
import InlineLink from "./link/inline-link"
import ReactMarkdown from "react-markdown"
import Paragraph from "./paragraph"

export const StrongText: FC<{ children: ReactNode }> = ({ children }) => (
  <span className="font-bold">{children}</span>
)

export const SimpleBulletList: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ul className="flex flex-col gap-2 list-disc list-inside">{children}</ul>
  )
}

export const SimpleInlineLink: FC<{ children: ReactNode; href: string }> = ({
  children,
  href,
}) => (
  <InlineLink href={href} isExternal showExternalIcon>
    {children}
  </InlineLink>
)

export const MarkDown: FC<{ content: string }> = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        ul(props) {
          return <SimpleBulletList>{props.children}</SimpleBulletList>
        },
        p(props) {
          return <Paragraph>{props.children}</Paragraph>
        },
        strong(props) {
          return <StrongText>{props.children}</StrongText>
        },
        a(props) {
          return (
            <SimpleInlineLink href={props.href || ""}>
              {props.children}
            </SimpleInlineLink>
          )
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
