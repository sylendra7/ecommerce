'use client';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { UserButton, UserProfile } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import React from 'react'

const DashboardPage = () => {
  return (

    <div className='p-4'>
      <Modal isOpen onClose={() => { }} description='Test' title='Hello'>
        <UserButton afterSignOutUrl='/' />
      </Modal>
    </div>
  )
}

export default DashboardPage;
