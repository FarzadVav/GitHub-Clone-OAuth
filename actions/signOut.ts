"use server"

import { deleteSession } from "@/lib/sessions"

const signOut = () => deleteSession()

export default signOut