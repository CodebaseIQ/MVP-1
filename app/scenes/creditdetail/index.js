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
    Title,
    View,
    Footer,
    Grid,
    Col
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';

class CreditDetailScreen extends Component{
    static navigationOptions = {
        header: null
    };

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onDelete(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onEdit(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'AddCredit'}));
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left style={styles.IconContainer}>
                        <Button transparent onPress={() => this.onBack()}>
                            <Thumbnail square source={require('../../assets/icNavBackBlack.png')} style={styles.backBtnIcon}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.headerTitle}>Master Card</Title>
                    </Body>
                    <Right style={styles.IconContainer}>
                        <Button transparent>
                            <Text></Text>
                        </Button>
                    </Right>
                </Header>
                <Content style={styles.content}>
                    <Text style={styles.numberText}>NUMBER</Text>
                    <View style={styles.numberContainer}>
                        <Thumbnail square source={require('../../assets/payment/mastercard.png')} style={styles.cardIcon}/>
                        <Text style={styles.cardNumberText}>
                            ... ... ... 345
                        </Text>
                    </View>
                    <Text style={styles.expiredDateText}>EXPIRY DATE</Text>
                    <View style={styles.expiredDateContainer}>
                        <Text style={styles.expredDateText1}>01 / 2018</Text>
                    </View>
                </Content>
                <Footer style={styles.footer}>
                    <Grid>
                        <Col>
                            <Button block style={styles.deleteBtn} onPress={() => this.onDelete()}>
                                <Text style={styles.deleteBtnText}>Delete</Text>
                            </Button>
                        </Col>
                        <Col>
                            <Button block style={styles.editBtn} onPress={() => this.onEdit()}>
                                <Text style={styles.editBtnText}>Edit</Text>
                            </Button>
                        </Col>
                    </Grid>
                </Footer>
            </Container>
        );
    }
}

export default connect()(CreditDetailScreen);