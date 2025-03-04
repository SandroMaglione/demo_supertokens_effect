import Dashboard from './$node_modules/supertokens-node/recipe/dashboard/index.js'
import Passwordless from './$node_modules/supertokens-node/recipe/passwordless/index.js'
import Session from './$node_modules/supertokens-node/recipe/session/index.js'
import UserRoles from './$node_modules/supertokens-node/recipe/userroles/index.js'
import type { TypeInput } from './$node_modules/supertokens-node/types/index.js'

export function getApiDomain() {
	const apiPort = process.env.REACT_APP_API_PORT || 3001
	const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`
	return apiUrl
}

export function getWebsiteDomain() {
	const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000
	const websiteUrl =
		process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`
	return websiteUrl
}

export const SuperTokensConfig: TypeInput = {
	supertokens: {
		// this is the location of the SuperTokens core.
		connectionURI: 'https://try.supertokens.com',
	},
	appInfo: {
		appName: 'SuperTokens Demo App',
		apiDomain: getApiDomain(),
		websiteDomain: getWebsiteDomain(),
	},
	// recipeList contains all the modules that you want to
	// use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
	recipeList: [
		Passwordless.init({
			contactMethod: 'EMAIL_OR_PHONE',
			flowType: 'USER_INPUT_CODE_AND_MAGIC_LINK',
		}),
		Session.init(),
		Dashboard.init(),
		UserRoles.init(),
	],
}
