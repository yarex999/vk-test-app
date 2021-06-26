import React, {useState, useEffect} from 'react';
import {Icon28AddOutline} from '@vkontakte/icons'
import { Panel, PanelHeader, PanelHeaderBack,Group, Gradient, Title, Avatar, InfoRow, Header,SimpleCell, CellButton, Textarea, FormItem, Button, Cell,MiniInfoCell } from '@vkontakte/vkui';




const Detailed = props => {

    const [userInfo, setUserInfo] = useState(null);
    const [addNote, setAddNote] = useState(false);
    const [notes, setNotes] = useState(null);

    let user;
    let month = ['January', "February", 'March', 'April', 'May', 'June', 'July', 'August', 'September','Oktober', 'November', 'December'];

    useEffect(()=>{
        setUserInfo( i => props.userFriends.response.items[props.whichUser])
    
      
    },[props])

    function getDate(str){
        let result = str.match(/\d+/g);
        result[1] = month[result[1]-1];
       return result.join(' ');
    }

    function writeANote(e){
        setNotes(n=> e.target.value);
    }

    function addNoteStorage(){
        props.setStorage(props.storage.map((el,index) =>{
            if(el.id === userInfo.domain && notes){
               return  {...props.storage[index], id: userInfo.domain, note:[...el.note, notes]};
            } else {
                return el
            }
        }))
        setNotes(n => '')
        setAddNote( n => !n)
    }

    function deleteNote(indexU, indexN){
        if(props.storage[indexU].note.length){
          props.setStorage(props.storage.map((el,index) =>{
            if(index === indexU){
               return  {...props.storage[index], id: userInfo.domain, note:[...el.note.slice(0,indexN),...el.note.slice(indexN+1)]};
            } else {
                return el
            }
        }))  
        }
    }
console.log(notes)
userInfo?     console.log('detailed', props.storage): '';
    return (
      <Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			back to the list {console.log(userInfo)}
		</PanelHeader>
        { userInfo? user = (
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

          {props.storage[props.whichUser].note.length?
          <Group>
          <Header mode="secondary">Заметки о пользователе</Header>
          <SimpleCell>
    
               {props.storage[props.whichUser].note.map((el,index) =>{
                  return <MiniInfoCell textWrap="full">{`Note ${index+1}: ${el}`}<Button style={{marginLeft: '15px'}} onClick={()=>deleteNote(props.whichUser, index)} mode="destructive">delete</Button></MiniInfoCell>
              })} 
              
          </SimpleCell>
          </Group> : ''
           }
          
        </Group>
        
         ): ''}
        
	
	</Panel>  
    )
	
};


export default Detailed;