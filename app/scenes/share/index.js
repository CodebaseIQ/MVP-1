import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Container,
    Content,
    Body,
    Text,
    Header,
    Thumbnail,
    List,
    Icon,
    ListItem,
    Left,
    Button
 } from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class ShareScreen extends Component{
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
                            <Thumbnail square source={require('../../assets/share/icNavCloseBalck.png')} style={styles.backBtnIcon}/>
                        </Button>
                    </Left>
                </Header>
                <Content>
                    <Body style={styles.body}>
                        <Thumbnail square source={require('../../assets/home/1.png')} style={styles.image}/>
                        <Text style={styles.title}>Bowling</Text>
                        <List style={styles.list}>
                            <ListItem style={styles.listItem}>                                
                                <Body style={styles.listItemBody}>
                                    <Icon name="mail"  style={styles.listItemIcon}/>
                                    <Text style={styles.listItemText}>Email</Text>
                                </Body>
                            </ListItem>
                            <ListItem style={styles.listItem}>                                
                                <Body style={styles.listItemBody}>
                                    <Icon name="chatbubbles"  style={styles.listItemIcon}/>
                                    <Text style={styles.listItemText}>Messages</Text>
                                </Body>
                            </ListItem>
                            <ListItem style={styles.listItem}>                                
                                <Body style={styles.listItemBody}>
                                    <Icon name="logo-facebook"  style={styles.listItemIcon}/>
                                    <Text style={styles.listItemText}>Facebook</Text>
                                </Body>
                            </ListItem>
                            <ListItem style={styles.listItem}>                                
                                <Body style={styles.listItemBody}>
                                    <Icon name="link"  style={styles.listItemIcon}/>
                                    <Text style={styles.listItemText}>Copy link</Text>
                                </Body>
                            </ListItem>
                            <ListItem style={styles.listItem}>                                
                                <Body style={styles.listItemBody}>
                                    <Icon name="logo-twitter"  style={styles.listItemIcon}/>
                                    <Text style={styles.listItemText}>Twitter</Text>
                                </Body>
                            </ListItem>
                            <ListItem style={styles.listItem}>                                
                                <Body style={styles.listItemBody}>
                                    <Icon name="more"  style={styles.listItemIcon}/>
                                    <Text style={styles.listItemText}>More</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </Body>
                </Content>
            </Container>
        )
    }
}

export default connect()(ShareScreen);