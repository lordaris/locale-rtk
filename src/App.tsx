import React from "react"
import { useAppSelector } from "./app/hooks"
import { NavBar } from "./components/navBar"
import { locales } from "./locales"
import { About, Home } from "./pages"

/**
 * "locales" is an object wich can be imported from the folder locales.
 * To read its values you need to use the selected language as a key, which is a string like "EN" or "ES".
 * In this case, the language is selected using the selectedLanguage variable, which is the value of the language slice of the store, but you can use any other method like a cookie, a local storage, a useState, etc.
 * In this example, the language is selected using a feature called "languageSelector", imported in the navBar component.
 * Then, the "selectedLanguage" constant is used to select the correct locale from the locales object.
 * The "selectedLanguage" can be sent as a prop to any component that needs to be translated, but the "locales" object needs to be imported in the component.
 */
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
