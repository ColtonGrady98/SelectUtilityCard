import React from "react";
import styled from "styled-components/macro";

import {
  Button,
  Typography,
  Grid,
  InputAdornment,
  Input,
} from "@material-ui/core";

import LinkIcon from "@material-ui/icons/Link";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 13px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin: 30px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled(Typography)`
  margin: ${(props) => props.theme.spacing(1.5)}px;
`;

const SubText = styled(Typography)`
  margin: ${(props) => props.theme.spacing(1)}px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: ${(props) => props.theme.spacing(3)}px;
`;

const TextInput = styled(Input)`
  width: 85%;
  ${(props) => props.theme.breakpoints.down("xs")} {
    width: 60%;
  }
  margin-top: ${(props) => props.theme.spacing(2)}px;
`;

const LogosContainer = styled(Grid)`
  display: flex;
  width: 100%;
  margin: ${(props) => props.theme.spacing(5)}px;
  ${(props) => props.theme.breakpoints.down("xs")} {
    flex-direction: column;
  }
`;

const LogoButton = styled(Button)`
  margin: ${(props) => props.theme.spacing(3)}px;
  ${(props) => props.theme.shadows[1]};
`;

const Logo = styled.img`
  height: 35px;
  margin: ${(props) => props.theme.spacing(2)}px;
`;

const LowerContainer = styled(Grid)`
  margin: ${(props) => props.theme.spacing(1)}px
    ${(props) => props.theme.spacing(8)}px;
`;

const LowerContentContainer = styled(Grid)`
  margin: ${(props) => props.theme.spacing(1)}px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  ${(props) => props.theme.breakpoints.down("xs")} {
    align-items: center;
  }
`;

const ListContentContainer = styled.ul`
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.breakpoints.only("xs")} {
    align-items: center;
    text-align: center;
    list-style-type: none;
  }
  padding: 0px ${(props) => props.theme.spacing(6)}px;
`;

const ListItem = styled.li`
  margin: ${(props) => props.theme.spacing(2)}px 0px;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${(props) => props.theme.breakpoints.down("xs")} {
    flex-direction: column;
    align-items: center;
  }
`;

const ActionButton = styled(Button)`
  border-radius: 30px;
  width: 175px;
  margin: ${(props) => props.theme.spacing(1)}px;
`;

const Footer = styled(Typography)`
  margin: ${(props) => props.theme.spacing(4)}px
    ${(props) => props.theme.spacing(2)}px
    ${(props) => props.theme.spacing(2)}px;
`;

const SelectUtilityCard = ({ style, className }) => {
  return (
    <OuterContainer style={style} className={className}>
      <ContentContainer>
        <HeaderContainer>
          <Header variant="h6">Select Utility</Header>
          <SubText variant="body">Select your utility provider...</SubText>
        </HeaderContainer>
        <InputWrapper>
          <TextInput
            startAdornment={
              <InputAdornment position="start">
                <CheckCircleIcon color={"primary"} />
              </InputAdornment>
            }
            placeholder="SDG&E"
          />
        </InputWrapper>
        <LogosContainer
          container
          direction="row"
          alignItems="center"
          justify="center"
        >
          <LogoButton variant="contained" size="medium">
            <Logo src="static/img/brands/logo-colored.svg" alt="Optiwatt" />
          </LogoButton>
          <LinkIcon />
          <LogoButton variant="contained" size="medium">
            <Logo src="static/img/brands/sdge.svg" alt="SDGE" />
            <Logo src="static/img/brands/leap_logo.png" alt="Leap"></Logo>
          </LogoButton>
        </LogosContainer>
        <LowerContainer container item direction="column" alignItems="center">
          <Grid item sm={2} xs={0} />
          <LowerContentContainer
            container
            direction="column"
            alignItems="flex-start"
            item
            sm={8}
            xs={12}
          >
            <ListContainer>
              <Header variant="h6">Support Your Local Grid</Header>
              <ListContentContainer>
                <ListItem>
                  <SubText variant="body">
                    Help reduce CO2 and grid blackouts by delaying charging
                    during high electricity demand.
                  </SubText>
                </ListItem>
                <ListItem>
                  <SubText variant="body">
                    Optiwatt will notify you prior to these rare events and
                    automatically resume charging immediately afterwards.
                  </SubText>
                </ListItem>
                <ListItem>
                  <SubText variant="body">You can opt-out anytime.</SubText>
                </ListItem>
              </ListContentContainer>
            </ListContainer>
            <ActionsContainer>
              <ActionButtonsContainer>
                <ActionButton variant={"contained"} color={"primary"}>
                  Authorize
                </ActionButton>
                <ActionButton variant={"text"} color={"primary"}>
                  Skip for Later
                </ActionButton>
              </ActionButtonsContainer>
              <Footer variant="caption">
                By clicking authorize, Leap, or 3rd part provider, will connect
                to your utility company meter and enable Optiwatt to support the
                grid.
              </Footer>
            </ActionsContainer>
          </LowerContentContainer>
          <Grid item sm={2} xs={0} />
        </LowerContainer>
      </ContentContainer>
    </OuterContainer>
  );
};

export default SelectUtilityCard;
