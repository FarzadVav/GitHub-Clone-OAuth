import { PropsWithChildren } from "react"

type ModalT = PropsWithChildren & {
  id: string
}

const Modal = ({ id, children }: ModalT) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">{children}</div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}

export default Modal
