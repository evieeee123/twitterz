import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import Modal from "react-modal";

export default function CommentModal() {
    const [open, setOpen] = useRecoilState(modalState)

  return (
    <div>
        <h1>Comment Modal</h1>
        {open && (
            <Modal isOpen={open}>
                <h1>Comment Modal</h1>
            </Modal>
        )}
    </div>
  )
}
