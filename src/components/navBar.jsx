import { LanguageSelector } from "../features/languageSelector/LanguageSelector"

export function NavBar({ locales }) {
  return (
    <header className="my-4 mx-auto left-0 right-0 bg-brown-medium rounded-lg opacity-70 w-2/3 p-2">
      <nav className="flex justify-center items-center">
        <LanguageSelector />
      </nav>
    </header>
  )
}
