import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {Icon28AddOutline} from '@vkontakte/icons'
import { Panel, PanelHeader, PanelHeaderBack,Group, Gradient, Title, Avatar, InfoRow, Header,SimpleCell, CellButton, Textarea, FormItem, Button, Cell,MiniInfoCell } from '@vkontakte/vkui';




const Detailed = props => {

    const [userInfo, setUserInfo] = useState(null);
    const [addNote, setAddNote] = useState(false);
    const [notes, setNotes] = useState(null);
    const [noteStorage, setNoteStorage] = useState([]);

    let month = ['January', "February", 'March', 'April', 'May', 'June', 'July', 'August', 'September','Oktober', 'November', 'December'];

    // to recieve user info 
    useEffect(()=>{
        setUserInfo( i => props.userFriends.response.items[props.whichUser])
        
    },[props])

    // to update user info
    useEffect(()=>{
        if(userInfo){
            updateStorage();
        }
    },[userInfo])

    // to convert b-date
    function getDate(str){
        let result = str.match(/\d+/g);
        result[1] = month[result[1]-1];
       return result.join(' ');
    }

    // to store recieved note before adding to page
    function writeANote(e){
        setNotes(n=> e.target.value);
    }

    // add a note to local storage and to the page
    async function addNoteStorage(){
        
        let storageReq = await getStorage(userInfo.domain);
        let storage = storageReq.keys[0].value? storageReq.keys[0].value : "[]";
        let newStorage = await JSON.parse(storage);
        console.log(newStorage)
        setStorage(userInfo.domain,JSON.stringify([...newStorage, notes]))
        .then(result => updateStorage())
    
        setNotes(n => '')
        setAddNote( n => !n)
    }

    // add the note to VK Bridge Storage
    async function setStorage(noteKey, noteValue){
		const storageSet = await bridge.send('VKWebAppStorageSet', {
			key: noteKey ,
			value: noteValue
		});
		console.log('from storageSet', storageSet)
	}

    // to get notes from BK Bridge Storage
	async function getStorage(noteKey){
		const storageGet = await bridge.send('VKWebAppStorageGet', {
			keys: [noteKey],
		})
        console.log('from storageGet',storageGet)
		return storageGet;
	}

    
    // to delete the note from VK Bridge Storage and page
    async function deleteNote(indexN){
  
        let storageReq = await getStorage(userInfo.domain);
        let storage =  storageReq.keys[0].value? storageReq.keys[0].value : "[]";
        let newStorage = await JSON.parse(storage);
        console.log(newStorage)
        setStorage(userInfo.domain,JSON.stringify([...newStorage.slice(0, indexN), ...newStorage.slice(indexN+1)]))
        .then(result => updateStorage())
   
    }

    // to update internal React State to re-render notes on this page
    async function updateStorage(){
        let storageReq = await getStorage(userInfo.domain);
        let storage = storageReq.keys[0].value? storageReq.keys[0].value : "[]";
        let newStorage = await JSON.parse(storage);
        setNoteStorage(newStorage)
        
    }

// just for checking purposes
console.log('noteStorage:',noteStorage)
console.log(notes)
userInfo?     console.log('detailed', props.storage): '';

    return (
      <Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			back to the list {console.log(userInfo)}
		</PanelHeader>
        { userInfo? 
    <Group>
        <Gradient style={{
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 32,
        }}> 
        {userInfo?.photo_200_orig? <Avatar size={96} src={userInfo.photo_200_orig}/> : null}
        <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">{`${userInfo.first_name} ${userInfo.last_name}  `}</Title>
        {userInfo.status? <MiniInfoCell textWrap="full">
                    <InfoRow header='Что думает:'>
                        {`${userInfo.status}`}
                   </InfoRow> 
               </MiniInfoCell>: ''}

        </Gradient>
          <Group>
              <Header mode="secondary">Информация о пользователе</Header>
              
               {userInfo.bdate?<SimpleCell>
                    <InfoRow header='День рождения'>
                       {`${getDate(userInfo.bdate)}`}
                   </InfoRow> 
               </SimpleCell> : ''}
               {userInfo.city && userInfo.city.title ?<SimpleCell>
                    <InfoRow header='Город'>
                        {`${userInfo.city.title}`}
                   </InfoRow> 
               </SimpleCell> : ''}
               {userInfo.country && userInfo.country.title ?<SimpleCell>
                    <InfoRow header='Страна'>
                        {`${userInfo.country.title}`}
                   </InfoRow> 
               </SimpleCell >: ''}
               {userInfo.faculty_name?<SimpleCell>
                    <InfoRow header='Образование'>
                    Закончил
                        {` ${userInfo.faculty_name}`}<br/>
                        {userInfo.university_name? ` в ${userInfo.university_name} `: '' }
                        {userInfo.graduation? `  в ${userInfo.graduation} году`: '' }
                   </InfoRow> 
               </SimpleCell >: ''}
              
          </Group>
          
          {addNote ? <Group>
              <FormItem top="What`s on your mind?">
                  <Textarea onChange={writeANote} placeholder="write something about this person" />
              </FormItem>
               </Group> : '' }
          {addNote? <Button style={{marginLeft: '15px'}} onClick={()=>addNoteStorage()} mode={notes? 'commerce': 'destructive'}>{notes? 'save' : 'close'}</Button> :<CellButton onClick={()=>setAddNote( n => !n)} before={<Icon28AddOutline />}>Добавить заметку</CellButton>}

          {noteStorage.length?
          <Group>
          <Header mode="secondary">Заметки о пользователе</Header>
          <SimpleCell>
    
               {noteStorage.map((el,index) =>{
                  return <MiniInfoCell textWrap="full">{`Note ${index+1}: ${el}`}<Button style={{marginLeft: '15px'}} onClick={()=>deleteNote(index)} mode="destructive">delete</Button></MiniInfoCell>
              })} 
              
          </SimpleCell>
          </Group> : ''
           }
          
        </Group>
        
         : ''}
        
	
	</Panel>  
    )
	
};


export default Detailed;