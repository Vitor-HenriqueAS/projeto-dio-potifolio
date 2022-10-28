
async function fetchProfileData(){
	const url = 'https://raw.githubusercontent.com/Vitor-HenriqueAS/projeto-dio-potifolio/main/data/profile.json'
	const fetching = await fetch(url)

	return await fetching.json()
}
