declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      ["relative-time"]: JSXBase["span"] &
        Partial<Omit<RelativeTimeElement, keyof HTMLElement>>
    }
  }
}

export * from '@/global.d.ts'
