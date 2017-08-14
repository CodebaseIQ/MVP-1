import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Text,
    Button,
    Header,
    Thumbnail,
    Left,
    View,
    Footer,

} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class InterestScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            interest: [2,1,2,0,0,0,0,0,0]
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onClick(index){
        if(this.state.interest[index] < 2){
            this.state.interest[index]++;
            this.setState({interest: this.state.interest});
        }
    }

    onNext(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Login', params: {type: 'signup'}}));
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
                </Header>
                <Content style={styles.content}>
                    <Text style={styles.loginText}>Tap your interests!</Text>
                    <Text style={styles.descText}>1 tap - you like it, 2 taps - you like it very much</Text>
                    <View style={styles.ballContainer}>
                        <Button  onPress={() => this.onClick(0)} style={[styles.ballBtn, styles.ball1, (this.state.interest[0] == 1) && styles.ball1tapBtn, (this.state.interest[0] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.interest[0] == 1) && styles.ball1tapBtnText, (this.state.interest[0] == 2) && styles.ball2tapBtnText]}>Laser Tag</Text>
                        </Button>
                        <Button onPress={() => this.onClick(1)} style={[styles.ballBtn, styles.ball2, (this.state.interest[1] == 1) && styles.ball1tapBtn, (this.state.interest[1] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.interest[1] == 1) && styles.ball1tapBtnText, (this.state.interest[1] == 2) && styles.ball2tapBtnText]}>Arcade</Text>
                        </Button>
                        <Button onPress={() => this.onClick(2)} style={[styles.ballBtn, styles.ball3,(this.state.interest[2] == 1) && styles.ball1tapBtn, (this.state.interest[2] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.interest[2] == 1) && styles.ball1tapBtnText, (this.state.interest[2] == 2) && styles.ball2tapBtnText]}>Cosmic Bowling</Text>
                        </Button>
                        <Button onPress={() => this.onClick(3)} style={[styles.ballBtn, styles.ball4, (this.state.interest[3] == 1) && styles.ball1tapBtn, (this.state.interest[3] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.interest[3] == 1) && styles.ball1tapBtnText, (this.state.interest[3] == 2) && styles.ball2tapBtnText]}>Kids Party</Text>
                        </Button>
                        <Button onPress={() => this.onClick(4)} style={[styles.ballBtn, styles.ball5, (this.state.interest[4] == 1) && styles.ball1tapBtn, (this.state.interest[4] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.interest[4] == 1) && styles.ball1tapBtnText, (this.state.interest[4] == 2) && styles.ball2tapBtnText]}>League</Text>
                        </Button>
                        <Button onPress={() => this.onClick(5)} style={[styles.ballBtn, styles.ball6, (this.state.interest[5] == 1) && styles.ball1tapBtn, (this.state.interest[5] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.interest[5] == 1) && styles.ball1tapBtnText, (this.state.interest[5] == 2) && styles.ball2tapBtnText]}>Bowling</Text>
                        </Button>
                        <Button onPress={() => this.onClick(6)} style={[styles.ballBtn, styles.ball7, (this.state.interest[6] == 1) && styles.ball1tapBtn, (this.state.interest[6] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.interest[6] == 1) && styles.ball1tapBtnText, (this.state.interest[6] == 2) && styles.ball2tapBtnText]}>Food</Text>
                        </Button>
                        <Button onPress={() => this.onClick(7)} style={[styles.ballBtn, styles.ball8, (this.state.interest[7] == 1) && styles.ball1tapBtn, (this.state.interest[7] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.interest[7] == 1) && styles.ball1tapBtnText, (this.state.interest[7] == 2) && styles.ball2tapBtnText]}>Group Event</Text>
                        </Button>
                        <Button onPress={() => this.onClick(8)} style={[styles.ballBtn, styles.ball9, (this.state.interest[8] == 1) && styles.ball1tapBtn, (this.state.interest[8] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.interest[8] == 1) && styles.ball1tapBtnText, (this.state.interest[8] == 2) && styles.ball2tapBtnText]}>Adult Party</Text>
                        </Button>                        
                    </View>
                </Content>
                <Footer style={styles.footer}>
                    <Button block style={styles.nextBtn} onPress={() => this.onNext()}>
                        <Text style={styles.nextBtnText}>Next</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}

export default connect()(InterestScreen);