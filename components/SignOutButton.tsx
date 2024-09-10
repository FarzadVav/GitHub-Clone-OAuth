"use client"

import { useId } from "react"
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline"

import signOut from "@/actions/signOut"
import showModalHandler from "@/lib/showModal"
import Modal from "./Modal"

const SignOutButton = () => {
  const id = useId()

  return (
    <>
      <button
        className="btn btn-ghost text-error hover:bg-error/20"
        onClick={() => showModalHandler(id)}
      >
        <span className="max-sm:hidden">Sign out</span>
        <ArrowLeftStartOnRectangleIcon className="size-4 -scale-x-100" />
      </button>

      <Modal id={id}>
        <span className="font-bold text-xl">Are you sure?</span>
        <p className="mt-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora incidunt voluptas
          deserunt officia cupiditate tenetur voluptatibus delectus vitae. Modi debitis praesentium
          vitae, veniam quam excepturi?
        </p>
        <button className="btn btn-error w-1/3 mt-3" onClick={() => signOut()}>
          Yes
        </button>
      </Modal>
    </>
  )
}

export default SignOutButton
