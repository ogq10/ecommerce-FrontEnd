import { useSelect } from '@mui/base';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { resetProfile } from '../../redux/features/verifyForgottenPasswordSlice';

export const ProfileWrapper = styled.div`
display: flex;
justify-content: center;
align-content: center;
align-items: center;
 flex-direction: column;
 margin: 4rem 0rem;
 
 
`;
export const ProfileTitle = styled.h4`margin: .7rem; color: #fff;`;

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
 width: 30%;
margin: auto;
.submit{
    background-color: #ffffff15;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;
    display: block;
   
    color: #fff;
    max-width: 63%;
    padding: 1rem;
    border-radius: 0.25rem;
    border: 0;
    cursor: pointer;
    outline: 0;
margin: 2rem .4rem;
    @media (max-width: 768px) {
        max-width: 68%;
        margin: 1rem .5rem;
      }
      
}


@media (max-width: 768px) {
    width: 80%;
  }
`;



export default function Profile() {
    const [newInfo, setNewInfo] = useState({
        password: "",
        confirmPassword: "",
        newEmail: "",
    });

    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth);


    const handleReset = (e) => {
        e.preventDefault();
        dispatch(resetProfile(newInfo));
    };

    return (
        <ProfileWrapper>

            <FormWrapper>
                <ProfileTitle>
                    Profile Information
                </ProfileTitle>
                <div className="fieldrp">
                    <span className="field__labelrp">Current E-mail</span>
                    <input
                        className="field__inputrp"
                        value={auth.email}
                        readOnly
                    />
                </div>

                <div className="fieldrp">
                    <span className="field__labelrp">New E-mail</span>
                    <input
                        className="field__inputrp"

                        onChange={(e) =>
                            setNewInfo({
                                ...newInfo,
                                newEmail: e.target.value,
                            })
                        }
                    />
                </div>


                <div className="fieldrp">
                    <span className="field__labelrp">New Password*</span>
                    <input
                        className="field__inputrp"

                        label="New Password*"
                        type="password"
                        autoComplete="on"
                        onChange={(e) =>
                            setNewInfo({
                                ...newInfo,
                                password: e.target.value,
                            })
                        }
                    />
                </div>

                <div className="fieldrp">
                    <span className="field__labelrp">Confirm New Password*</span>
                    <input
                        className="field__inputrp"

                        label="Confirm New Password*"
                        type="password"
                        autoComplete="on"
                        onChange={(e) =>
                            setNewInfo({
                                ...newInfo,
                                confirmPassword: e.target.value,
                            })
                        }
                    />
                </div>

                <button onClick={handleReset} className="submit" type="submit">
                    Update
                </button>
            </FormWrapper>
        </ProfileWrapper>
    )
}
