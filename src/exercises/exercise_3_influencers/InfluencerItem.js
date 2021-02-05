import React from "react";
import styled from "styled-components";

const Container = styled.div({
    border: "1px solid black",
    borderRadius: 4,
    marginTop: '15px'
});

const Header = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
});

const Body = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
});

const Item = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 10px',
    alignItems: 'center'
});

const ItemText = styled.div({
    width: '310px',
});

const InfluencerItem = ({ influencer }) => {
    const {
        member,
        influencerType,
        indicationCategory,
        affiliation,
        affiliationPosition,
        primaryState,
        priority,
    } = influencer;

    return (
        <Container>
                <Header>
                    <h3>Member</h3>
                    {member}
                </Header>
                <Body>
                    <Item>
                        <h4>Type</h4>
                        <ItemText>
                            {influencerType}
                        </ItemText>
                    </Item>
                    <Item>
                        <h4>Category</h4>
                        <ItemText>
                            {indicationCategory}
                        </ItemText>
                    </Item>
                    <Item>
                        <h4>Affiliation</h4>
                        <ItemText>
                            {affiliation}
                        </ItemText>
                    </Item>
                    <Item>
                        <h4>Title</h4>
                        <ItemText>
                            {affiliationPosition}
                        </ItemText>
                    </Item>
                    <Item>
                        <h4>State</h4>
                        <ItemText>
                            {primaryState}
                        </ItemText>
                    </Item>
                    <Item>
                        <h4>Priority</h4>
                        <ItemText>
                            {priority}
                        </ItemText>
                    </Item>
                </Body>
        </Container>
    );
};

export default InfluencerItem;