const showModalHandler = (id: string) => {
  const dialog = document.getElementById(id) as HTMLDialogElement
  dialog.showModal()
}

export default showModalHandler