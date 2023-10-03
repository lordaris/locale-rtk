// A language selector slice with redux-toolkit

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface LanguageState {
  value: string
}

const initialState: LanguageState = {
  value: "EN",
}

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { changeLanguage } = languageSlice.actions
export default languageSlice.reducer