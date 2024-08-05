'use client';

import { CreateServerModal } from '@/components/modals/create-server-modal';
import { EditServerModal } from '@/components/modals/edit-server-modal';
import { InviteModal } from '@/components/modals/invite-modal';
import { MembersModal } from '@/components/modals/members-modal';
import { CreateChannelModal } from '../modals/create-channel-modal';
import { DeleteServerModal } from '../modals/delete-server-modal';
import { LeaveServerModal } from '../modals/leave-server-modal';

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
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
    </>
  );
};
