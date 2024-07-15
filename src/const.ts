import { RawAxiosRequestHeaders } from "axios"

export const AEROBOTICS_API_BASE_HEADERS: RawAxiosRequestHeaders = {
  Accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_AEROBOTICS_API_KEY}`
}

export const AEROBOTICS_API_URI_BASE = import.meta.env.VITE_AEROBOTICS_API_URI_BASE
