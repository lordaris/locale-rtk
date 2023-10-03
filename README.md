# Locales Selector Component

This is a simplified version of a locales selector I made for a project. I'll be using it as a template for future projects.

It includes a "locales" folder with the translations for the different languages. 

## Short description 

A simple system to change the language of a website. It uses a redux store to keep the selected language and a component to render the languages.

## Technologies
- Vite React 
- Redux Toolkit
- Tailwind CSS

## Usage

To add a new language, add a new js file with an object with the translations to the locales folder. Then add the language to the index file as the others. 
The language selector will be automatically updated with the new language as it uses a map function to render the languages. 

Each language should have the same keys, so the component can load the translations from the selected language.

To render the translations, if you're using a SPA, you can send the translations to the component as props from the "App.tsx" file. Then you can deestructure the translations in the components and use them as you need.

## Example

```javascript
// App.tsx
import { useAppSelector } from "./app/hooks"
import { NavBar } from "./components/navBar"
import { locales } from "./locales"
import { About, Home } from "./pages"

function App() {
  const selectedLanguage = useAppSelector((state) => state.language.value)

  const loc = locales[selectedLanguage]

  return (
    <div>
      <NavBar locales={loc} />
      <Home locales={loc} />
      <About locales={loc} />
    </div>
  )
}

export default App


// home.tsx
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

```

## TODO: 
[ ] Make it work with the react-router-dom

