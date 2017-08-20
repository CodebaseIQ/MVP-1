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
    Item,
    Label,
    Left,
    Right,
    View,
    List,
    ListItem,
    Grid,
    Col,
    Icon,
    Footer
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import QRCode from 'react-native-qrcode';
import styles from './styles';
import { StatusBar } from 'react-native';

class ReservationDetailScreen extends Component{
    static navigationOptions = {
        header: null
    };

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Thumbnail square source={require('../../assets/home/1.png')} style={styles.image}/>
                <Header style={styles.header}>                    
                    <Left>
                        <Button transparent onPress={() => this.onBack()}>
                            <Thumbnail square source={require('../../assets/icNavBackBlack.png')} style={styles.backBtnIcon}/>
                        </Button>
                    </Left>                                    
                </Header>
                <Content style={styles.content}>
                    <Text style={styles.nameText}>Bowling</Text>
                    <Text style={styles.locationText}>
                        <Icon name="md-pin" style={styles.pinIcon}/> Boronia St & Anzac Parade, NSW 2033
                    </Text>
                    <Text style={styles.dateText}>
                        Thutsday, 22 September, 2016
                    </Text>
                    <Text style={styles.timeText}>
                        7:00 pm - 8:00 pm
                    </Text>
                    <View style={styles.divider}/>
                    <Text style={styles.qrText}>
                        QR - Code
                    </Text>
                    <View style={styles.qrWrapper}>
                        <View style={styles.qrContainer}>
                            <QRCode
                                value="1234567891234567"
                                size={230}
                                bgColor='black'
                                fgColor='white'/>
                            <Text style={styles.qrCodeText}>1234 - 5678 - 9123 - 4567</Text>
                        </View>
                    </View>
                    <View style={styles.divider}/>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>
                            $40.00
                        </Text>
                        <View iconLeft style={styles.paidMark}>     
                            <Icon name="checkmark" style={styles.checkIcon}/>                       
                            <Text style={styles.paidText}> Paid</Text>
                        </View>
                    </View>
                    <View style={styles.divider}/>
                    <Text style={styles.qrText}>
                        Instruction
                    </Text>
                    <Text style={styles.descText}>
                        Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nam porttitor blandit…  <Text style={styles.moreBtn}>read more</Text>
                    </Text>
                    <View style={styles.divider}/>
                    <Button block style={styles.cancelBtn}>
                        <Text style={styles.cancelBtnText}>Cancel Reservation</Text>
                    </Button>
                    <View style={{height: 16}}/>
                </Content>
            </Container>
        );
    }
}

export default connect()(ReservationDetailScreen);