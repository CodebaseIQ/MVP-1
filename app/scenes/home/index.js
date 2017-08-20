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
    Icon,
    Grid,
    Col,
    Text,
    List,
    ListItem
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';

class HomeScreen extends Component{
    static navigationOptions = {
        header:  null
    };

    constructor(props){
        super(props);

        this.state = {
            selectedTab: 0,
            isSaved: [false, false]
        };
    }

    onSelectedTab(index){
        this.setState({
            selectedTab: index
        })
    }

    onDetail(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Detail'}));
    }

    onSave(index){
        this.state.isSaved[index] = !this.state.isSaved[index];
        this.setState({
            isSaved: this.state.isSaved
        });
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Body>
                        <View style={styles.searchbarContainer}>
                            <View style={styles.searchIconContainer}>
                                <Icon name="search" style={styles.searchIcon}/>
                            </View>
                            <Input style={styles.searchInput} placeholder="Search" placeholderTextColor="#fff"/>
                        </View>
                        <Grid style={styles.tabContainer}>
                            <Col>
                                <Button  onPress={() => this.onSelectedTab(0)} transparent style={[styles.tabItem, (this.state.selectedTab == 0) && styles.tabActiveItem]}>
                                    <Text style={[styles.tabItemText, (this.state.selectedTab == 0) && styles.tabItemActiveText]}>
                                        DISCOUNTS
                                    </Text>
                                </Button>
                            </Col>
                            <Col style={styles.tabItemContainer}>
                                <Button onPress={() => this.onSelectedTab(1)} transparent style={[styles.tabItem, (this.state.selectedTab == 1) && styles.tabActiveItem]}>
                                    <Text style={[styles.tabItemText, (this.state.selectedTab == 1) && styles.tabItemActiveText]}>
                                        PACKAGES
                                    </Text>
                                </Button>
                            </Col>
                            <Col style={styles.tabItemContainer}>
                                <Button onPress={() => this.onSelectedTab(2)} transparent style={[styles.tabItem, (this.state.selectedTab == 2) && styles.tabActiveItem]}>
                                    <Text style={[styles.tabItemText, (this.state.selectedTab == 2) && styles.tabItemActiveText]}>
                                        WHAT'S NEW
                                    </Text>
                                </Button>
                            </Col>
                        </Grid>
                    </Body>
                </Header>
                <Content style={styles.content}>
                    <List>
                        <ListItem style={styles.listItem} onPress={() => this.onDetail()}>
                            <Body>
                                <Thumbnail square source={require('../../assets/home/1.png')} style={styles.itemImage}>
                                    <View style={styles.disccountContainer}>
                                        <Text style={styles.disccountPercent}>50%</Text>
                                        <Text style={styles.disccountText}>OFF</Text>
                                    </View>
                                    <Button transparent style={styles.saveBtn} onPress={() => this.onSave(0)}>
                                        {this.state.isSaved[0] == false?
                                        <Thumbnail style={styles.saveBtnIcon} square source={require('../../assets/home/icFavorite.png')}/>:
                                        <Thumbnail style={styles.saveBtnIcon} square source={require('../../assets/saved/icFavoriteActive.png')}/>
                                        }
                                    </Button>
                                </Thumbnail>
                                <View style={styles.itemPriceContainer}>
                                    <Text style={styles.itemPriceText1}>Bowling</Text>
                                    <Text style={styles.itemPriceText1}>
                                        <Text style={styles.itemDiscount}>
                                            $80.00
                                        </Text>  $40.00                                        
                                    </Text>
                                </View>
                                <Text style={styles.itemEstimatedTime}>Ends in 4 days 5 hours</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItem} onPress={() => this.onDetail()}>
                            <Body>
                                <Thumbnail square source={require('../../assets/home/1.png')} style={styles.itemImage}>
                                    <View style={styles.disccountContainer}>
                                        <Text style={styles.disccountPercent}>50%</Text>
                                        <Text style={styles.disccountText}>OFF</Text>
                                    </View>
                                    <Button transparent style={styles.saveBtn} onPress={() => this.onSave(1)}>
                                        {this.state.isSaved[1] == false?
                                        <Thumbnail style={styles.saveBtnIcon} square source={require('../../assets/home/icFavorite.png')}/>:
                                        <Thumbnail style={styles.saveBtnIcon} square source={require('../../assets/saved/icFavoriteActive.png')}/>
                                        }
                                    </Button>
                                </Thumbnail>
                                <View style={styles.itemPriceContainer}>
                                    <Text style={styles.itemPriceText1}>Bowling</Text>
                                    <Text style={styles.itemPriceText1}>
                                        <Text style={styles.itemDiscount}>
                                            $80.00
                                        </Text>  $40.00                                        
                                    </Text>
                                </View>
                                <Text style={styles.itemEstimatedTime}>Ends in 4 days 5 hours</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default connect()(HomeScreen);