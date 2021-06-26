import React, { useState, useEffect, useMemo } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Detailed from './panels/Detailed';

const STORAGE_TEST = {
	STATUS: 'online'
}



const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [userFriends, setUsersFriends] = useState(null);
	const [detailedUser, setDetailedUser] = useState(null);
	const [noteStorage, setNoteStorage] = useState({})
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});

		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			const userFriendsToken = await bridge.send('VKWebAppGetAuthToken', {
				app_id: 7888409,
				scope: "friends"
			});
			
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
			const storage = await bridge.send('VKWebAppStorageSet', {
				key: STORAGE_TEST.STATUS ,
				value: JSON.stringify({online: true})
				
			});
			console.log(storage)
			const storageGet = await bridge.send('VKWebAppStorageGet', {
				keys: Object.values(STORAGE_TEST),
			})
			console.log(JSON.parse(storageGet.keys[0].value))


	        setUser(user);
	        setUsersFriends(friends);
			setPopout(null);
			
		}
		fetchData() 
	}, []);

	useEffect(()=>{
		if(userFriends){
			let friendsArr = userFriends.response.items;
			console.log('friends', friendsArr)
			setNoteStorage(n=> friendsArr.map(el=>{
				return {...n, id: el.domain, note: []}
			}))
		}

	},[userFriends])


console.log('storage',noteStorage)
	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	console.log(userFriends)
	console.log('user is', detailedUser)

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id='home' fetchedUser={fetchedUser} chooseUser={setDetailedUser} userFriends={userFriends} go={go} />
					<Detailed id='detailed' storage={noteStorage} setStorage={setNoteStorage}whichUser={detailedUser} userFriends={userFriends}  go={go} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
