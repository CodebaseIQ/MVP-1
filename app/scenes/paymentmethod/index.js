import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Header,
    Left,
    Thumbnail,
    Body,
    Text,
    List,
    ListItem,
    Icon,
    Button,
    Right,
    Title
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class PaymentMethodScreen extends Component{
    static navigationOptions = {
        header: null
    };

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onAddCredit(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'AddCredit'}));
    }

    onCreditDetail(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'CreditDetail'}));
    }

    render(){
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left style={styles.IconContainer}>
                        <Button transparent onPress={() => this.onBack()}>
                            <Thumbnail square source={require('../../assets/icNavBackBlack.png')} style={styles.backBtnIcon}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.headerTitle}>Payment Method</Title>
                    </Body>
                    <Right style={styles.IconContainer}>
                        <Button transparent>
                            <Text></Text>
                        </Button>
                    </Right>
                </Header>
                <Content style={styles.content}>
                    <Text style={styles.paymentText}>Payment Method</Text>
                    <List style={styles.list}>
                        <ListItem style={styles.listItem} onPress={() => this.onCreditDetail()}>  
                            <Body style={styles.paymentListItemBody}>                          
                                <Thumbnail square source={require('../../assets/payment/mastercard.png')} style={styles.paymentIcon}/>
                                <Text>... 3475</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItem} onPress={() => this.onCreditDetail()}>  
                            <Body style={styles.paymentListItemBody}>                          
                                <Thumbnail square source={require('../../assets/payment/visa.png')} style={styles.paymentIcon}/>
                                <Text>... 3475</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItem} onPress={() => this.onAddCredit()}>                            
                            <Body style={styles.paymentListItemBody}>
                                <Icon name="add-circle" style={styles.addPaymentIcon}/>
                                <Text style={styles.addPaymentText}>Add credit card</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default connect()(PaymentMethodScreen);