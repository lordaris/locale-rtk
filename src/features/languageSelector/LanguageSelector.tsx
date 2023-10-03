// A language selector component is added to the NavBar component.

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { changeLanguage } from "./languageSlice"
import { locales } from "../../locales"

/**
 * The language selector is a select element that uses the locales object to render the options.
 * When you add a new language to the locales object, it will be automatically added to the selector.
 */

export function LanguageSelector() {
  const dispatch = useAppDispatch()
  const language = useAppSelector((state) => state.language.value)
  const l = locales
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <select
      className="bg-brown-medium text-brown-soft"
      onChange={handleChange}
      value={language}
    >
      {Object.values(l).map((value) => (
        <option value={value.code}>{value.language}</option>
      ))}
    </select>
  )
}
