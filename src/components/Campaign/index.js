import React from 'react'
import { CampaignContainer, CloseUpImg, FabricImg, GroupImg, ImagesSection, Title, TitleContainer, TitleSection } from './styles/Campaign'

export default function Campaign({ fabricImg, closeupImg, groupImg, title }) {
    return (
        <CampaignContainer data-scroll-container>
            <ImagesSection>

                <CloseUpImg src={closeupImg} />
                <GroupImg src={groupImg} />
            </ImagesSection>
            <TitleSection>
                <TitleContainer>
                    <Title>

                        {title}
                    </Title>
                </TitleContainer>
            </TitleSection>
        </CampaignContainer>
    )
}
