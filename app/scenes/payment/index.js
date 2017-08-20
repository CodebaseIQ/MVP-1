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
    Grid,
    Col,
    List,
    ListItem,
    Icon,
    Right,
    CheckBox,
    Footer
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';

class PaymentScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            peoples: 1,
            lines: 1,
            paymentmethod: 0
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onAddCredit(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'AddCredit'}));
    }

    onCalPeople(delta){
        if(this.state.peoples + delta  > 0){
            this.setState({
                peoples: this.state.peoples + delta
            });
        }
    }

    onCalLines(delta){
        if(this.state.lines + delta > 0){
            this.setState({
                lines: this.state.lines + delta
            });
        }
    }

    onPaymentMethod(index){
        this.setState({
            paymentmethod: index
        });
    }

    render(){
        StatusBar.setBarStyle('dark-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.onBack()}>
                            <Thumbnail square source={require('../../assets/icNavBackBlack1.png')} style={styles.backBtnIcon}/>
                        </Button>
                    </Left>
                </Header>
                <Content style={styles.content}>
                    <Grid>
                        <Col style={styles.basicContainer}>
                            <Text style={styles.nameText}>Bowling</Text>
                            <Text style={styles.locationText}>Boronia St & Anzac Parade, NSW 2033</Text>
                            <Text style={styles.phoneText}>+61 123 456 678</Text>
                        </Col>
                        <Col style={styles.imageContainer}>
                            <Thumbnail square source={require('../../assets/home/1.png')} style={styles.image}/>
                        </Col>
                    </Grid>
                    <Text style={styles.datetimeText}>Data & Time</Text>
                    <Text style={styles.dateText}>Thutsday, 22 September, 2016</Text>
                    <Text style={styles.timeText}>7:00 pm - 8:00 pm</Text>
                    <List style={styles.list}>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text>Number of people</Text>
                            </Body>
                            <Right style={styles.right}>
                                <Button transparent onPress={() => this.onCalPeople(-1)}>
                                    <Icon name="remove-circle" style={styles.listItemIcon}/>
                                </Button>
                            </Right>
                            <Right style={styles.right}>
                                <View style={styles.countTextContainer}>
                                    <Text style={styles.countText}>{this.state.peoples}</Text>
                                </View>
                            </Right>
                            <Right style={styles.right}>
                                <Button transparent onPress={() => this.onCalPeople(1)}>
                                    <Icon name="add-circle" style={styles.listItemIcon}/>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text>Bowling lines</Text>
                            </Body>
                            <Right style={styles.right} >
                                <Button icon transparent onPress={() => this.onCalLines(-1)}>
                                    <Icon name="remove-circle"style={styles.listItemIcon}/>
                                </Button>
                            </Right>
                            <Right style={styles.right}>
                                <View style={styles.countTextContainer}>
                                    <Text style={styles.countText}>{this.state.lines}</Text>
                                </View>
                            </Right>
                            <Right style={styles.right}>
                                <Button icon transparent onPress={() => this.onCalLines(1)}>
                                    <Icon name="add-circle" style={styles.listItemIcon}/>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                    <Text style={styles.paymentText}>Payment Method</Text>
                    <List style={styles.list}>
                        <ListItem style={styles.listItem} onPress={() => this.onPaymentMethod(0)}>  
                            <Body style={styles.paymentListItemBody}>                          
                                <Thumbnail square source={require('../../assets/payment/mastercard.png')} style={styles.paymentIcon}/>
                                <Text>... 3475</Text>
                            </Body>                            
                            <Right>
                                {this.state.paymentmethod == 0?
                                <Icon name="checkmark" style={styles.checkIcon}/>: <View style={{height: 37.33}}/>}
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem} onPress={() => this.onPaymentMethod(1)}>  
                            <Body style={styles.paymentListItemBody}>                          
                                <Thumbnail square source={require('../../assets/payment/visa.png')} style={styles.paymentIcon}/>
                                <Text>... 3475</Text>
                            </Body>                            
                            <Right>
                                {this.state.paymentmethod == 1?
                                <Icon name="checkmark" style={styles.checkIcon}/>: <View style={{height: 37.33}}/>}
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem} onPress={() => this.onAddCredit()}>                            
                            <Body style={styles.paymentListItemBody}>
                                <Icon name="add-circle" style={styles.addPaymentIcon}/>
                                <Text style={styles.addPaymentText}>Add credit card</Text>
                            </Body>
                        </ListItem>
                    </List>
                    <View style={{height: 40}}/>
                </Content>
                <Footer style={styles.footer}>
                    <View>
                        <Text style={styles.footerPriceText}>$80.00</Text>
                        <Text style={styles.footerLineText}>for 2 lines</Text>
                    </View>
                    <Button style={styles.payBtn}>
                        <Text>Pay</Text>
                    </Button>
                </Footer>
            </Container>
        )
    }
}

export default connect()(PaymentScreen);