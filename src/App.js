import React, { useState, useEffect, useMemo } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Detailed from './panels/Detailed';





const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [userFriends, setUsersFriends] = useState(null);
	const [detailedUser, setDetailedUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);




	useEffect(() => {
		
		// to install the right theme on a device
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});

		// get user data and necessary permissons
		async function fetchData() {
			
			// main info
			const user = await bridge.send('VKWebAppGetUserInfo');

			// permission to get info about user`s friends
			const userFriendsToken = await bridge.send('VKWebAppGetAuthToken', {
				app_id: 7888409,
				scope: "friends"
			});
			
			// get info about user`s friends
			const friends = await bridge.send("VKWebAppCallAPIMethod", {
				method: "friends.get",
				request_id:7888409,
				params: {
					"user_ids": `${user.id}`, 
					"v":"5.131",
					"access_token":`${userFriendsToken.access_token}`,
					"fields": " nickname, domain, sex, bdate, city, country, timezone, photo_50, photo_100, photo_200_orig, has_mobile, contacts, education, online, relation, last_seen, status, can_write_private_message, can_see_all_posts, can_post, universities"
				}
			})

	        setUser(user);
	        setUsersFriends(friends);
			setPopout(null);
			
		}
		fetchData() 
	}, []);

	

// to switch between pages
	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};


	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id='home' fetchedUser={fetchedUser} chooseUser={setDetailedUser} userFriends={userFriends} go={go} />
					<Detailed id='detailed' whichUser={detailedUser} userFriends={userFriends}  go={go}/>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
