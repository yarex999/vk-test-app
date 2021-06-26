import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, SimpleCell, Div, Avatar, List } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser, userFriends, chooseUser }) => {
	
	function getDetailedInfo(i,e){
		chooseUser(u=> i)
		go(e);
		

	}
	
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
			<List>
				{ userFriends ? userFriends.response.items.map((el,index) => {
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
