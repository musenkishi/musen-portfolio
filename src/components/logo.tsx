import { FC } from 'react'
import { PageLink } from './link/page-link'

const LogoIcon: FC = () => {
  return (
    <svg className="size-5 dark:invert" viewBox="0 0 5.2916 5.2916">
      <path d="m4.2204 2.3175-0.5797 0.36899a0.33647 0.34562 0 0 0-0.10876 0.47585l1.2847 2.1293a1.0376 1.0658 0 0 0 0.3093-1.4734zm-3.6299 1.1617c-0.3261 0-0.59047 0.27154-0.59047 0.60653v0.43973h4.0724l-0.63124-1.0462zm1.4215-3.4792-1.3692 3.2331h1.1108l0.78617-1.8564c0.22437-0.52986-0.0119-1.1462-0.52771-1.3767z" />
    </svg>
  )
}

const Logo: FC = () => {
  return (
    <PageLink href="/">
      <div className="navbar-logo flex gap-4">
        <LogoIcon />
        Freddie Lust-Hed
      </div>
    </PageLink>
  )
}

export default Logo
