'use client'

import { CreateServerModal } from '@/components/modals/create-server-modal'

export const ModalProvider = () => {
  // const [, setIsMounted] = useState(false)

  // useEffect(() => {
  //   setIsMounted(true)
  // }, [])

  return (
    <>
      <CreateServerModal />
    </>
  )
}
