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

class SavedScreen extends Component{
    static navigationOptions = {
        header:  null
    };

    constructor(props){
        super(props);

        this.state = {
            selectedTab: 0
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

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Body>
                        <Title style={styles.headerTitle}>Saved</Title>
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
                                    <Button transparent style={styles.saveBtn}>
                                        <Thumbnail style={styles.saveBtnIcon} square source={require('../../assets/saved/icFavoriteActive.png')}/>
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
                                    <Button transparent style={styles.saveBtn}>
                                        <Thumbnail style={styles.saveBtnIcon} square source={require('../../assets/saved/icFavoriteActive.png')}/>
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

export default connect()(SavedScreen);