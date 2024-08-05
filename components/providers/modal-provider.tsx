'use client'

import { CreateServerModal } from '@/components/modals/create-server-modal'
import { EditServerModal } from '@/components/modals/edit-server-modal'
import { InviteModal } from '@/components/modals/invite-modal'
import { MembersModal } from '@/components/modals/members-modal'

export const ModalProvider = () => {
  // const [, setIsMounted] = useState(false)

  // useEffect(() => {
  //   setIsMounted(true)
  // }, [])

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
    </>
  )
}
