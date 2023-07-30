import React from 'react'

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex justify-center w-full h-full items-center'>
            {children}
        </div>
    )
}

export default AuthLayout;