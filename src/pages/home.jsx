/**
 * Locales is a prop that is passed from the App component. It is destructured into "l" for use in the component.
 */
export default function HomePage({locales}) {
const l = locales
  return (
    <div className="container px-20 py-4">
      <h1 className="text-brown-mitsubishi text-center py-4">{l.title}</h1>
      <p className="text-center py-2">{l.description}</p>
      <p className="text-center py-2">{l.paragraph}</p>
    </div>
  )
}
