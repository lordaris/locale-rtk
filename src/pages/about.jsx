/**
 * locales extracts the data from the "App" component, where it is defined as "loc", and is sent to the "About" component as a prop.
 * It is then destructured into "l" for use in the component.
 * It is dynamic and changes based on the language selected.
 *
 */

import { GithubMarkBlack } from "../assets/images/GithubMark"

export default function About({ locales }) {
  const l = locales

  return (
    <div className="container px-20 py-4 flex flex-col items-center">
    <h1 className="text-brown-mitsubishi text-center py-4">{l.about}</h1>
    <p className="text-center">{l.aboutParagraph}</p>
    <p className="text-center">{l.moreAbout}</p>
    <div className="py-4 flex items-center flex-col justify-center">
      <a
        href="https://www.github.com"
        className="opacity-80 hover:opacity-100 flex items-center"
      >
        <GithubMarkBlack />
        <span className="ml-2">My Github account</span>
      </a>
    </div>
  </div>
  )
}
