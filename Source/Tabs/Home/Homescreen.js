import React, {PureComponent} from 'react';
import {Text, View,StyleSheet, ScrollView, ViewPagerAndroid} from 'react-native';

import ViewContainer from '../../Components/Common/ViewContainer';
import NavBar from '../../Components/Header/NavBar';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import UpdateList from './UpdateList';
import EventList from './EventList';
import {Header} from '../../Components/Common'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import TabbedViewPager from 'react-native-tabbed-view-pager-android';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

//import ScrollableTabMenu from 'react-native-scrollable-tab-menu'
// import Tabs from 'react-native-tabs';

// const FirstRoute = () => <UpdateList />;
// const SecondRoute = () => <EventList />;


var radio_props = [
  {label: 'Updates    ', value: 0 },
  {label: 'Events', value: 1 }
];

class Homescreen extends PureComponent {
constructor(props){
	super(props)
	this.state = {
	display: 0
	}
}

  getInitialState(){
    return {
      display: 0,
    }
  }

  render() {
    return (

      <ViewContainer>
				<NavBar />
				<View style = {{alignItems: 'center'}}>
        <RadioForm
          radio_props={radio_props}
          initial={0}
					formHorizontal={true}
					labelHorizontal={true}
					buttonColor={'#800000'}
					animation={true}
          onPress={(display) => {this.setState({display:display})}}
        >
				</RadioForm>

				</View>
				{this.state.display===0 ? <UpdateList /> : <EventList />}
      </ViewContainer>
    );
  }
}






//   state = {
//     index: 0,
//     routes: [
//       { key: '1', title: 'Events' },
//       { key: '2', title: 'Updates' },
//     ],
//   };

//   _handleChangeTab = index => this.setState({ index });

//   _renderHeader = props => <TabBar {...props} />;

//   _renderScene = SceneMap({
//     '1': FirstRoute,
//     '2': SecondRoute,
//   });

//   render() {
//     return (
//       <TabViewAnimated
//         style={styles.container}
//         navigationState={this.state}
//         renderScene={this._renderScene}
//         renderHeader={this._renderHeader}
//         onRequestChangeTab={this._handleChangeTab}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// render(){
// return(
// 			<ViewContainer>
// 				<NavBar/>
// 				<ScrollView style={{flex:1}}> 
// 					{/*<ScrollableTabView tabBarTextStyle = {{fontSize: 20, fontFamily: 'GillSans'}}>*/}
// 					<View tabLabel = "Updates">
// 						<UpdateList />
// 					</View>
// 					<View tabLabel = "Events">
// 						<EventList />
// 					</View>
// 					{/*</ScrollableTabView>*/}
// 				</ScrollView>
// 			</ViewContainer>
// 		 )
// 	}
// }

export default Homescreen;