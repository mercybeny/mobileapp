import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, Picker, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'
//import App from './components/TitleOnPress'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    searchAndOption: {

        alignItems: 'center',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10
    }
});
const HomeScreen = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState("java");
    const [list, setList] = useState([
        {
            name: 'bai viet dau tien',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'Within the space of a few days, the rollout of the Oxford-AstraZeneca Covid-19 vaccine has ground to a standstill in virtually all of western Europe.',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '13:35 GMT March 17, 2021',
            link: 'https://edition.cnn.com/2021/03/16/us/metro-atlanta-shootings/index.html',
        },
        {
            name: 'bai viet thu 2',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'The discovery of the call comes after state officials originally told CNN that they did not think audio of the call existed!',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '03:52 GMT March 17, 2021',
            link: 'https://edition.cnn.com/2021/03/16/us/metro-atlanta-shootings/index.html',
        },
        {
            name: 'bai viet thu 3',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'Europe has taken a muddled stance towards the AstraZeneca vaccine since it was first approved for use in the European Union in late January.',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '23:15 GMT March 16, 2021',
            link: 'https://edition.cnn.com/2021/03/16/us/metro-atlanta-shootings/index.html',
        },
        {
            name: 'bai viet thu 4',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'At the minute, Im just not seeing any reason at all why any country would pause the AstraZeneca vaccine.It doesnt really make much sense to me',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '22:51 GMT March 16, 2021',
            link: 'https://edition.cnn.com/2021/03/16/us/metro-atlanta-shootings/index.html',
        },
        {
            name: 'bai viet thu 5',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'The actions of European governments have surprised experts, and caused a myriad of questions among people who have had or are in line to get the shot.',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '15:35 GMT March 16, 2021',
            link: 'https://edition.cnn.com/2021/03/16/us/metro-atlanta-shootings/index.html',

        },
        {
            name: 'bai viet thu 6',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'Since then, virtually all of western Europe has stopped using the shot, but countries are reminding citizens that those decisions are precautionary!',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '08:30 GMT March 16, 2021',
            link: 'https://edition.cnn.com/2021/03/16/us/metro-atlanta-shootings/index.html',
        },
        {
            name: 'bai viet thu 7',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'The agency will meet on Thursday, and the World Health Organization (WHO) is analyzing the reports on Tuesday ',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '07:25 GMT March 15, 2021',
            link: 'https://edition.cnn.com/2021/03/16/us/metro-atlanta-shootings/index.html',
        },
        {
            name: 'bai viet thu 8',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'No cases of clotting have yet been linked to the vaccine -- thats what the EMA and WHO are analyzing, and the EMA are expected to issue their advice to countries on Thursday.',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '21:30 GMT March 14, 2021',
            link: 'https://edition.cnn.com/2021/03/16/us/metro-atlanta-shootings/index.html',
        },
        {
            name: 'bai viet thu 9',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'But even the reported cases of clotting in inoculated people are very few and far between. In Denmark, one fatality prompted the initial wave of suspensions',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '17:35 GMT March 14, 2021',
            link: 'https://edition.cnn.com/2021/03/16/us/metro-atlanta-shootings/index.html',
        },
        {
            name: 'bai viet thu 10',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'After giving out 1.7 million AstraZeneca doses, Germany has uncovered just seven cases of blood clotting',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '03:35 GMT March 14, 2021',
            link: 'https://edition.cnn.com/2021/03/16/us/metro-atlanta-shootings/index.html',
        }
    ]);

    const renderItem = ({ item }) => (

        <Card>
            <Card.Image
                source={{ uri: item.avatar_url }} >
            </Card.Image>
            <Card.Title
                style={{ marginTop: 15, textAlign: 'left' }}>
                <Text onPress={() => {
                    navigation.navigate("Detail", { key: item }); // chuyen den trang co name Detail khai bao ben ngoai, tham so 2 la gia tri chuyen sang
                }}>
                    {item.subtitle}
                </Text>


                {/* Phai dung component Text vi thang nay ho tro onPress(Touch) */}
            </Card.Title>
            <Text style={{ fontStyle: 'italic' }}>{item.creatOn}</Text>
            <Text> </Text>
            <Text style={{ fontSize: 10 }}>{item.link}</Text>
        </Card>
    )

    const keyExtractor = (item, index) => index.toString();

    return (
        <View style={styles.container}>
            <View style={styles.searchAndOption}>
                <Text>{list.length} Nội dung</Text>
                <Text style={{ textAlign: 'right' }}>

                </Text>
            </View>
            <FlatList
                keyExtractor={keyExtractor}
                data={list}
                renderItem={renderItem}
            />
        </View>
    );



}

export default HomeScreen
