import React from 'react'

import { useToggleComponent } from '../../customHooks';
import {ToggledSourceController} from '../../sharedComponents'

import './AccountModal.scss'
const AccountModal = () => {
    const [toggleSourceAccountModal, setToggleSourceAccountModal, toggleValAccountModal, setToggleAccountValModal, checker] = useToggleComponent('accountModal', false);

    return (
        <div className='account__dropdown-container'>
            <ToggledSourceController
                toggleVal={toggleValAccountModal}
                toggleSource={toggleSourceAccountModal}
                setToggleVal={setToggleAccountValModal}
                setToggleSource={setToggleSourceAccountModal}
            >
                <button className='close__account'
                    onClick={() => handleSourceChange()}        >
                    Close
                </button>
            </ToggledSourceController><p>Account</p>

        </div>
    )
}

export default AccountModal 