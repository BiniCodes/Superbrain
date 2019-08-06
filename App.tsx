import { createAppContainer, createStackNavigator } from 'react-navigation';
import AddingGrades from './src/pages/AddingGrades';
import AdditionalQuestions from './src/pages/AdditionalQuestions';
import HomeScreen from './src/pages/Homescreen';
import InterGrades from './src/pages/InterGrades';
import InterQuest2 from './src/pages/InterQuest2';
import InterQuest3 from './src/pages/InterQuest3';
import InterQuest4 from './src/pages/InterQuest4';
import InterQuest5 from './src/pages/InterQuest5';
import InterResult from './src/pages/InterResult';
import JoinInternational from './src/pages/JoinInternational';
import JoinLeaderboard from './src/pages/JoinLeaderboard';
import CreateLeaderboard from './src/pages/LeaderBoard/CreateLeaderboard';
import CreateLeaderboardFeature from './src/pages/LeaderBoard/ShowLeaderboard';
import NeedHelp from './src/pages/NeedHelp';

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    JoinLeaderboard: { screen: JoinLeaderboard },
    AddingGrade: { screen: AddingGrades },
    CreateLeaderboard: { screen: CreateLeaderboard },
    JoinInternational: { screen: JoinInternational },
    InterQuest2: { screen: InterQuest2 },
    InterQuest3: { screen: InterQuest3 },
    InterQuest4: { screen: InterQuest4 },
    InterQuest5: { screen: InterQuest5 },
    InterGrades: { screen: InterGrades },
    AdditionalQuestions: { screen: AdditionalQuestions },
    InterResult: { screen: InterResult },
    CreateLeaderboardFeature: { screen: CreateLeaderboardFeature },
    NeedHelp: { screen: NeedHelp }
});

const App = createAppContainer(MainNavigator);
export default App;
