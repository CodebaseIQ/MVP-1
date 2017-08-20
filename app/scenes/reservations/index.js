import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Button,
    Title,
    Thumbnail,
    Header,
    Label,
    Left,
    Form,
    Input,
    View,
    Grid,
    Col,
    Text,
    List,
    ListItem,
    Right,
    Icon
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';

class ReservationScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            selectedTab: 0
        }
    }

    onSelectedTab(index){
        this.setState({selectedTab: index});
    }

    onDetail(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'ReservationDetail'}));
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Body>
                        <Title style={styles.headerTitle}>Reservations</Title>
                    </Body>
                </Header>
                <View style={styles.tabContainer}>
                    <Grid>
                        <Col>
                            <Button onPress={() => this.onSelectedTab(0)} block transparent style={[styles.tabItemBtn,( this.state.selectedTab == 0 ) && styles.tabItemActiveBtn]}>
                                <Text style={[styles.tabItemBtnText, (this.state.selectedTab == 0) && styles.tabItemActiveBtnText]}>ACTIVE</Text>
                            </Button>
                        </Col>
                        <Col>
                            <Button onPress={() => this.onSelectedTab(1)} block transparent style={[styles.tabItemBtn,( this.state.selectedTab == 1 ) && styles.tabItemActiveBtn]}>
                                <Text style={[styles.tabItemBtnText, (this.state.selectedTab == 1) && styles.tabItemActiveBtnText]}>HISTORY</Text>
                            </Button>
                        </Col>
                    </Grid>
                </View>
                <Content style={styles.content}>
                    {this.state.selectedTab == 0?
                    <List>
                        <ListItem style={styles.listItem} onPress={() => this.onDetail()}>
                            <Thumbnail square source={require('../../assets/home/1.png')} style={styles.listItemImage}/>
                            <Body>
                                <Text style={styles.listItemTitleText}>Bowling</Text>
                                <Text style={styles.listItemDateText}>22 July, 2017</Text>
                                <Text style={styles.listItemTimeText}>7:00 pm - 8:00 pm</Text>
                            </Body>
                            <Right>
                                <Icon style={styles.listItemRightIcon} name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem} onPress={() => this.onDetail()}>
                            <Thumbnail square source={require('../../assets/home/1.png')} style={styles.listItemImage}/>
                            <Body>
                                <Text style={styles.listItemTitleText}>Bowling</Text>
                                <Text style={styles.listItemDateText}>22 July, 2017</Text>
                                <Text style={styles.listItemTimeText}>7:00 pm - 8:00 pm</Text>
                            </Body>
                            <Right>
                                <Icon style={styles.listItemRightIcon} name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem} onPress={() => this.onDetail()}>
                            <Thumbnail square source={require('../../assets/home/1.png')} style={styles.listItemImage}/>
                            <Body>
                                <Text style={styles.listItemTitleText}>Bowling</Text>
                                <Text style={styles.listItemDateText}>22 July, 2017</Text>
                                <Text style={styles.listItemTimeText}>7:00 pm - 8:00 pm</Text>
                            </Body>
                            <Right>
                                <Icon style={styles.listItemRightIcon} name="arrow-forward"/>
                            </Right>
                        </ListItem>
                    </List>:
                    <List>
                        <ListItem style={styles.listItem} onPress={() => this.onDetail()}>
                            <Thumbnail square source={require('../../assets/home/1.png')} style={styles.listItemImage}/>
                            <Body>
                                <Text style={styles.listItemTitleText}>Bowling</Text>
                                <Text style={styles.listItemLocationText}>Boronia St & Anzac Parade, NSW 2033</Text>
                                <Text style={styles.listItemReceivedTimeText}>Received:   07/22/2017      7:00-8:00 pm</Text>
                                <Text style={styles.listItemReceivedTimeText}>Total: <Text style={styles.listItemPriceText}> $40.00</Text></Text>
                            </Body>
                        </ListItem> 
                        <ListItem style={styles.listItem} onPress={() => this.onDetail()}>
                            <Thumbnail square source={require('../../assets/home/1.png')} style={styles.listItemImage}/>
                            <Body>
                                <Text style={styles.listItemTitleText}>Bowling</Text>
                                <Text style={styles.listItemLocationText}>Boronia St & Anzac Parade, NSW 2033</Text>
                                <Text style={styles.listItemReceivedTimeText}>Received:   07/22/2017      7:00-8:00 pm</Text>
                                <Text style={styles.listItemReceivedTimeText}>Total: <Text style={styles.listItemPriceText}> $40.00</Text></Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItem} onPress={() => this.onDetail()}>
                            <Thumbnail square source={require('../../assets/home/1.png')} style={styles.listItemImage}/>
                            <Body>
                                <Text style={styles.listItemTitleText}>Bowling</Text>
                                <Text style={styles.listItemLocationText}>Boronia St & Anzac Parade, NSW 2033</Text>
                                <Text style={styles.listItemReceivedTimeText}>Received:   07/22/2017      7:00-8:00 pm</Text>
                                <Text style={styles.listItemReceivedTimeText}>Total: <Text style={styles.listItemPriceText}> $40.00</Text></Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItem} onPress={() => this.onDetail()}>
                            <Thumbnail square source={require('../../assets/home/1.png')} style={styles.listItemImage}/>
                            <Body>
                                <Text style={styles.listItemTitleText}>Bowling</Text>
                                <Text style={styles.listItemLocationText}>Boronia St & Anzac Parade, NSW 2033</Text>
                                <Text style={styles.listItemReceivedTimeText}>Received:   07/22/2017      7:00-8:00 pm</Text>
                                <Text style={styles.listItemReceivedTimeText}>Total: <Text style={styles.listItemPriceText}> $40.00</Text></Text>
                            </Body>
                        </ListItem>                       
                    </List>
                    }
                </Content>
            </Container>
        );
    }
}

export default connect()(ReservationScreen);