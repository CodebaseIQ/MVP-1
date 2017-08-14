import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Text,
    Button,
    Title,
    Thumbnail,
    Header,
    Left,
    Form,
    Item,
    Label,
    View,
    Right,
    Input,
    Grid,
    Col,
    List,
    ListItem,
    Icon,
    Footer
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class AddCreditScreen extends Component{
    static navigationOptions = {
        header: null
    };

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    render(){
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.onBack()}>
                            <Thumbnail square source={require('../../assets/icNavBackBlack.png')} style={styles.backBtnIcon}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>Add credit card</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text></Text>
                        </Button>   
                    </Right>
                </Header>
                <Content style={styles.content}>
                    <Form style={styles.form}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formLabel}>NUMBER</Label>                            
                            <Grid style={styles.cardContainer}>
                                <Col style={styles.cardIconContainer}>
                                    <Icon name="card" style={styles.cardIcon}/>
                                </Col>
                                <Col>
                                    <Input style={styles.formInput} placeholder="1234 5678 9012 3456"/>
                                </Col>
                                <Col style={styles.scanIconContainer} onPress={() => alert("scan")}>
                                    <Thumbnail   square source={require('../../assets/addcredit/icScanCard.png')} style={styles.scanIcon}/>
                                </Col>
                            </Grid>                          
                        </Item>
                        <Grid>
                            <Col style={styles.expireDateContainer}>
                                <Item stackedLabel style={styles.formItem}>
                                    <Label style={styles.formLabel}>EXPIRY DATE</Label>
                                    <Input style={styles.formInput} placeholder="MM / YY"/>
                                </Item>
                            </Col>
                            <Col style={styles.cvvContainer}>
                                <Item stackedLabel style={styles.formItem}>
                                    <Label style={styles.formLabel}>CVV</Label>
                                    <Input style={styles.formInput}/>
                                </Item>
                            </Col>
                        </Grid>                        
                    </Form>
                    <Text style={styles.countryText}>COUNTRY</Text>
                    <List style={styles.list}>
                        <ListItem style={styles.listItem}>
                            <Body style={styles.listItemBody}>
                                <Thumbnail square source={require('../../assets/addcredit/us.png')} style={styles.countryIcon}/>
                                <Text style={styles.countryText1}>United States</Text>
                            </Body>
                            <Right>
                                <Icon style={styles.listItemRightIcon} name="arrow-forward"/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
                <Footer style={styles.footer}>
                    <Button block style={styles.saveBtn}>
                        <Text style={styles.saveBtnText}>Save</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}

export default connect()(AddCreditScreen);