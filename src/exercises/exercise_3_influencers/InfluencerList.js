import React from 'react';
import styled from "styled-components";

import InfluencerItem from './InfluencerItem';

const Container = styled.div({

});

const InfluencerList = ({ data }) => {
    return (
        <Container>
            {data.map(item => {
                return <InfluencerItem key={item.member} influencer={item} />
            })}
        </Container>
    );
};

export default InfluencerList;