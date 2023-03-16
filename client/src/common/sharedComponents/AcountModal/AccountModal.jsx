import React from 'react'

import { useToggleComponent, useCurrentUser } from '../../customHooks';
import { ToggledSourceController, Button } from '../../sharedComponents'
import { signOutUser } from '../../firebase/firebase'

import './AccountModal.scss'
import { useDispatch } from 'react-redux';
const AccountModal = () => {
    const [toggleSourceAccountModal, setToggleSourceAccountModal, toggleValAccountModal, setToggleAccountValModal, checker] = useToggleComponent('accountModal', false);

    // const dispatch  = useDispatch()
    const signOutCurrentUser = () => {
        signOutUser()
        // handleSourceChange()
    }



    return (
        <div className='account__dropdown-container'>
            <Button classType='account' color='blue' onClick={() => signOutCurrentUser()}>Sign Out</Button>


            <ToggledSourceController
                toggleVal={toggleValAccountModal}
                toggleSource={toggleSourceAccountModal}
                setToggleVal={setToggleAccountValModal}
                setToggleSource={setToggleSourceAccountModal}
            >
                <Button classType='account' color='red'
                    onClick={() => handleSourceChange()}        >
                    Close
                </Button>
            </ToggledSourceController>

        </div>
    )
}

export default AccountModal 