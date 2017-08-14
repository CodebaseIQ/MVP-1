import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Header,
    Title,
    Body,
    Thumbnail,
    Text,
    View,
    List,
    ListItem,
    Right,
    Icon,
    Left,
    Button
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class ProfileScreen extends Component{
    static navigationOptions = {
        header: null
    };

    onPaymentMethod(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'PaymentMethod'}));
    }

    onEdit(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'EditProfile'}));
    }

    render(){
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Text></Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.headerTitle}>Profile</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.onEdit()}>
                            <Text style={styles.editBtnText}>Edit</Text>
                        </Button>
                    </Right>
                </Header>
                <Content style={styles.content}>
                    <Body>
                        <Thumbnail source={require('../../assets/home/1.png')} style={styles.image}/>
                        <Text style={styles.basicText}>Judy Gilbert, 29</Text>
                        <Text style={styles.locationText}>Berlin, Germany</Text>                        
                    </Body>
                    <Text style={styles.interestText}>My interests</Text>
                    <Text style={styles.interestText1}>
                        Bowling, Laser Tag, Food, Party
                    </Text>
                    <View style={styles.divider}/>
                    <Text style={styles.verifyText}>Verified Info</Text>
                    <Text style={styles.verifyText1}>
                        Email Address, Phone Number
                    </Text>
                    <View style={styles.divider}/>
                    <List style={styles.list}>
                        <ListItem style={styles.listItem} onPress={() => this.onPaymentMethod()}>
                            <Body>
                                <Text style={styles.listItemText}>payment Method</Text>
                            </Body>
                            <Right>
                                <Icon  style={styles.listItemIcon} name="arrow-forward"/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

export default connect()(ProfileScreen);