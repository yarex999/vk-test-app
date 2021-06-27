import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, SimpleCell, Div, Avatar, List,Search } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser, userFriends, chooseUser }) => {
	const [search, setSearch] = useState('');
	const [friendList, setFriendList] = useState('')

	// go to Detailed page
	function getDetailedInfo(i,e){
		chooseUser(u=> i)
		go(e);

	}

	// receive info about users friends
	useEffect(()=>{
		if(userFriends)setFriendList(userFriends.response.items)
	},[userFriends])

	// for searching friends
	function findFriends(e){
		setSearch(s => e.target.value);
		console.log(search)
	}
	useEffect(()=>{
		if(search ){
		setFriendList(f => f.filter(el => el.first_name.toLowerCase().startsWith(search.toLowerCase()) || el.last_name.toLowerCase().startsWith(search.toLowerCase())))	
		}else if(!search && userFriends) {
			setFriendList( f => userFriends? userFriends.response.items: friendList)
		}
	},[search])
	
	return (
		<Panel id={id}>
		<PanelHeader>Friends</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">I am</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">My friends</Header>}>
			<Search value={search} onChange={(event)=>findFriends(event)} />
			<List>
				{ friendList ? friendList.map((el,index) => {
			return (
				<SimpleCell 
				   onClick={(event)=>getDetailedInfo(index,event)}
				   data-to="detailed"
			       key={index}
				   before={el.photo_100? <Avatar src={el.photo_100}/> : null}
				   description={el.city && el.city.title ? el.city.title: ''}         
				>
					{`${el.first_name} ${el.last_name}`}
				</SimpleCell>)}) : ''}
			</List>
			
		
		</Group>
	</Panel>
	)
};



export default Home;
